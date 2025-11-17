<template>
  <div id="baseball-app-container" class="d-flex flex-column min-vh-100">
    <Header />

    <main class="flex-grow-1 p-3">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>

      <div class="fixed-bottom p-3 bg-white border-top text-center d-lg-none">
        <button
          class="btn btn-primary btn-lg w-100 shadow-sm"
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
import { useModal } from "./composables/useModal";
import { useRecords } from "./composables/useRecords";

// Components (Layout/Structural)
import Header from "./components/Header.vue";
import GameFormModal from "./components/GameFormModal.vue";

// 상태 및 함수 가져오기
const { openNewRecordModal } = useModal();
useRecords();
</script>

<style>
/* 전역 스타일: 현대적인 미니멀리즘 배경 */
body {
  padding-bottom: 70px;
  background-color: #f7f9fb; /* 아주 옅은 블루 그레이 배경 */
  color: #333; /* 기본 텍스트 색상을 약간 어둡게 */
}
.modal-fullscreen-sm-down .modal-content {
  height: 100%;
  border-radius: 0;
}
/* 카드 모달 스타일 */
.card-header {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
