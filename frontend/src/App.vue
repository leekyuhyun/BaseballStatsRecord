<template>
  <div id="baseball-app-container" class="d-flex flex-column min-vh-100">

    <Header 
        @change-view="handleViewChange" 
        :active-view="currentView" 
    />

    <main class="flex-grow-1 p-3">
        
        <component :is="currentViewComponent" />
        
        <div class="fixed-bottom p-3 bg-white border-top text-center d-lg-none">
            <button 
              class="btn btn-success btn-lg w-100 shadow-sm" 
              @click="openNewRecordModal"
            >
              + 새 경기 기록
            </button>
        </div>
    </main>

    <GameFormModal />
    
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Composables (로직 및 상태)
import { useRecords } from './composables/useRecords';
import { useNavigation } from './composables/useNavigation';
import { useModal } from './composables/useModal';

// 뷰 컴포넌트 Imports
import Header from './components/Header.vue';
import BaseballGlossary from './components/components/BaseballGlossary.vue';
import GameFormModal from './components/GameFormModal.vue'; 
import SummaryView from './views/SummaryView.vue';
import ListAllView from './views/ListAllView.vue';

// Composables Hooks
const { currentView, handleViewChange } = useNavigation();
const { openNewRecordModal } = useModal();

// 뷰 매핑 (주요 로직)
const componentMap = {
  summary: SummaryView,
  list: ListAllView,
  glossary: BaseballGlossary,
};

// 현재 뷰에 따라 렌더링할 컴포넌트를 계산
const currentViewComponent = computed(() => {
  return componentMap[currentView.value] || SummaryView;
});

// useRecords는 Composables 트리 구성을 위해 import 유지
useRecords(); 
</script>

<style>
/* (전역 스타일은 main.js에 정의되거나 외부 CSS 파일 사용) */
</style>