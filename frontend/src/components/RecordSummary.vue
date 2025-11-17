<template>
  <div class="card shadow-lg mb-4 border-0 rounded-lg">
    <div class="card-header bg-white border-bottom-0 pt-3 pb-2">
      <h5 class="mb-0 text-dark fw-bold">⚾️ 2024 시즌 개인 기록 요약</h5>
    </div>
    <div class="card-body pt-2">
      <div v-if="records.length === 0" class="alert alert-warning text-center">
        등록된 기록이 없어 통계 계산을 할 수 없습니다.
      </div>
      <div v-else>
        <h6 class="text-secondary mb-2 border-bottom pb-1">타자 기록</h6>
        <div class="table-responsive mb-4">
          <table class="table table-sm text-center align-middle mb-0">
            <thead class="bg-light fw-bold">
              <tr>
                <th>타율</th>
                <th>OPS</th>
                <th>타석</th>
                <th>타수</th>
                <th>안타</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bolder text-info">
                  {{ batterSummary.battingAvg }}
                </td>
                <td class="fw-bolder text-success">{{ batterSummary.ops }}</td>
                <td>{{ batterSummary.totalPA }}</td>
                <td>{{ batterSummary.totalAB }}</td>
                <td>{{ batterSummary.totalH }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-responsive mb-4">
          <table class="table table-sm text-center align-middle mb-0">
            <thead class="bg-light fw-bold">
              <tr>
                <th>HR</th>
                <th>RBI</th>
                <th>BB</th>
                <th>SO</th>
                <th>GDP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ batterSummary.totalHR }}</td>
                <td>{{ batterSummary.totalRBI }}</td>
                <td>{{ batterSummary.totalBB }}</td>
                <td>{{ batterSummary.totalSO }}</td>
                <td>{{ batterSummary.totalGDP }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="pitcherSummary.totalIP > 0">
          <h6 class="text-secondary mb-2 border-bottom pb-1">투수 기록</h6>
          <div class="table-responsive">
            <table class="table table-sm text-center align-middle mb-0">
              <thead class="bg-light fw-bold">
                <tr>
                  <th>이닝</th>
                  <th>자책점</th>
                  <th>탈삼진</th>
                  <th>볼넷</th>
                  <th>방어율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ formatInnings(pitcherSummary.totalIP) }}</td>
                  <td>{{ pitcherSummary.totalER }}</td>
                  <td>{{ pitcherSummary.totalSO }}</td>
                  <td>{{ pitcherSummary.totalBB }}</td>
                  <td class="fw-bolder text-danger">
                    {{ pitcherSummary.era.toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p class="text-end mt-2 text-muted small">
        총 {{ records.length }} 경기 기록됨
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import {
  calculateBatterStats,
  calculatePitcherStats,
  formatInnings,
} from "../utils/statsCalculator";

const props = defineProps({
  records: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const batterSummary = computed(() => {
  return calculateBatterStats(props.records);
});

const pitcherSummary = computed(() => {
  return calculatePitcherStats(props.records);
});
</script>

<style scoped>
.card {
  border-radius: 12px !important;
}
.table thead th {
  border-bottom: 2px solid #ddd;
}
</style>
