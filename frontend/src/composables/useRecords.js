// src/composables/useRecords.js

import { ref, computed, onMounted } from "vue";
import {
  loadRecords,
  addRecord,
  deleteRecord as deleteRecordManager,
  updateRecord as updateRecordManager,
} from "../utils/recordManager";
import {
  calculateBatterStats,
  calculatePitcherStats,
} from "../utils/statsCalculator";

export function useRecords() {
  const allRecords = ref([]);
  const recordToEdit = ref(null);

  onMounted(() => {
    allRecords.value = loadRecords();
  });

  // 통계 계산 (Computed)
  const batterSummary = computed(() => calculateBatterStats(allRecords.value));
  const pitcherSummary = computed(() =>
    calculatePitcherStats(allRecords.value)
  );

  // CRUD 함수들
  const handleSaveRecord = (newRecord) => {
    allRecords.value = addRecord(newRecord);
  };

  const handleUpdateRecord = (updatedRecord) => {
    allRecords.value = updateRecordManager(updatedRecord);
    recordToEdit.value = null;
  };

  const handleDeleteGame = (gameId) => {
    if (confirm(`경기 ID ${gameId} 기록을 정말로 삭제하시겠습니까?`)) {
      allRecords.value = deleteRecordManager(gameId);
      alert(`경기 ID ${gameId} 기록이 삭제되었습니다.`);
    }
  };

  const prepareEditMode = (gameId) => {
    recordToEdit.value = allRecords.value.find((r) => r.id === gameId);
  };

  const prepareNewRecordMode = () => {
    recordToEdit.value = null;
  };

  return {
    allRecords,
    recordToEdit,
    batterSummary,
    pitcherSummary,
    handleSaveRecord,
    handleUpdateRecord,
    handleDeleteGame,
    prepareEditMode,
    prepareNewRecordMode,
  };
}
