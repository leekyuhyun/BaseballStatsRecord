<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="$emit('changeView', 'summary')">
        <i class="bi bi-baseball me-2"></i> 내 야구 기록장
      </a>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a 
              class="nav-link" 
              :class="{ 'active': activeView === 'summary' }"
              href="#" 
              @click.prevent="closeMenuAndEmit('summary')"
            >
              기록 요약
            </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link" 
              :class="{ 'active': activeView === 'list' }"
              href="#" 
              @click.prevent="closeMenuAndEmit('list')"
            >
              경기 목록
            </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link" 
              :class="{ 'active': activeView === 'glossary' }"
              href="#" 
              @click.prevent="closeMenuAndEmit('glossary')"
            >
              용어 사전
            </a>
          </li>
        </ul>
        
        </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { Collapse } from 'bootstrap'; 

defineProps({
    activeView: { 
        type: String,
        required: true
    }
});

// 'closeApp' 이벤트 제거
const emit = defineEmits(['changeView']);

/**
 * 메뉴를 닫고 해당 이벤트를 부모에게 전달하는 함수
 */
const closeMenuAndEmit = (action) => {
    // 1. Bootstrap Collapse를 토글하여 메뉴를 닫음 (햄버거 메뉴 토글 동작)
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        const collapseInstance = Collapse.getInstance(navbarCollapse);
        if (collapseInstance) {
            collapseInstance.hide();
        } else {
            new Collapse(navbarCollapse).hide();
        }
    }

    // 2. 페이지 전환 이벤트 발생
    emit('changeView', action);
};
</script>

<style scoped>
.nav-link.active {
    font-weight: bold;
}
</style>