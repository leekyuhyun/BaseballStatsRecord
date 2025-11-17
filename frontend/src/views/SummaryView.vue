<template>
  <h2 class="mb-4">📊 시즌 기록 요약</h2>
  <RecordSummary :records="allRecords" />

  <h3 class="mt-5 mb-3">🗓️ 최근 경기 기록</h3>

  <GameList
    :games="allRecords.slice().reverse().slice(0, summaryListCount)"
    :is-summary-view="true"
    @edit-game="openEditModal"
    @delete-game="handleDeleteGame"
  />

  <div v-if="allRecords.length > 0" class="d-grid gap-2 mt-4">
    <button
      v-if="allRecords.length > summaryListCount"
      class="btn btn-outline-secondary"
      @click="loadMoreGames"
    >
      더 많은 기록 보기 ({{
        loadStep > allRecords.length - summaryListCount
          ? allRecords.length - summaryListCount
          : loadStep
      }}개 추가)
    </button>
    <div v-else class="text-center text-muted">
      --- 모든 기록을 표시했습니다 ---
    </div>

    <button class="btn btn-outline-primary" @click="handleViewChange('list')">
      전체 경기 목록 페이지로 이동 → (총 {{ allRecords.length }}경기)
    </button>
  </div>

  <div
    v-else-if="allRecords.length === 0"
    class="alert alert-info mt-3 text-center"
  >
    기록이 없습니다. 새 경기 기록을 추가해주세요!
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

// Composables Imports
import { useRecords } from "../composables/useRecords";
import { useModal } from "../composables/useModal";

// Components Imports
import RecordSummary from "../components/RecordSummary.vue";
import GameList from "../components/GameList.vue";

// Prop 정의 (App.vue에서 넘어옴)
defineProps({
  handleViewChange: {
    type: Function,
    required: true,
  },
});

// Records Hook
const { allRecords, handleDeleteGame } = useRecords();
const { openEditModal } = useModal();

// Load More Logic
const initialCount = 3;
const loadStep = 3;
const summaryListCount = ref(initialCount);

const loadMoreGames = () => {
  summaryListCount.value += loadStep;
};
</script>
