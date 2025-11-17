<template>
  <div class="hitter-form border p-3 rounded bg-light">
    <h5 class="mb-3 text-primary">타자 상세 기록 입력</h5>

    <div class="row g-3 mb-4 border p-3 bg-white rounded">
      <h6 class="text-secondary">① 타석 결과 (자동 계산)</h6>
      <div class="col-md-3 col-6">
        <label for="h" class="form-label">안타 (H)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.H"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="bb" class="form-label">볼넷 (BB)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.BB"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="hbp" class="form-label">몸에 맞는 공 (HBP)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.HBP"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="so" class="form-label">삼진 (SO)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.SO"
          min="0"
        />
      </div>
    </div>

    <div class="row g-3 mb-4 border p-3 bg-white rounded">
      <h6 class="text-secondary">② 추가 상세 기록</h6>
      <div class="col-md-3 col-6">
        <label for="rbi" class="form-label">타점 (RBI)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.RBI"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="fo" class="form-label">뜬공 아웃 (FO)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.FO"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="go" class="form-label">땅볼 아웃 (GO)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.GO"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="ro" class="form-label">기타 아웃 (RO)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.RO"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="sf" class="form-label">희생플라이 (SF)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.SF"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="sh" class="form-label">희생번트 (SH)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.SH"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="2b" class="form-label">2루타 (2B)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats['2B']"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="3b" class="form-label">3루타 (3B)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats['3B']"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="hr" class="form-label">홈런 (HR)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="stats.HR"
          min="0"
        />
      </div>
    </div>

    <div class="row g-3 pt-3 border-top">
      <div class="col-md-6">
        <div class="alert alert-info py-2 mb-0">
          **자동 계산 타석 (PA):** <span class="fw-bold">{{ totalPA }}</span>
          <small class="d-block">(AB + BB + HBP + SF + SH)</small>
        </div>
      </div>
      <div class="col-md-6">
        <div class="alert alert-warning py-2 mb-0">
          **자동 계산 타수 (AB):** <span class="fw-bold">{{ totalAB }}</span>
          <small class="d-block">(PA - BB - HBP - SF - SH)</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, computed } from "vue";

const emit = defineEmits(["update:hitterStats"]);

// 초기 상태는 실제 야구 기록지에 필요한 모든 항목을 포함합니다.
const stats = reactive({
  H: 0,
  AB: 0,
  HR: 0,
  RBI: 0,
  BB: 0,
  SO: 0,
  HBP: 0,
  SF: 0,
  SH: 0, // 희생 번트 추가
  FO: 0, // 뜬공 아웃 추가
  GO: 0, // 땅볼 아웃 추가
  RO: 0, // 기타 아웃 추가
  "2B": 0, // 2루타
  "3B": 0, // 3루타
  // PA와 AB는 계산된 값으로 전달됩니다.
});

// ------------------------------------------
// ⚾ 타석(PA) 및 타수(AB) 자동 계산 로직
// ------------------------------------------

// 총 아웃 수 (삼진 + 뜬공 + 땅볼 + 기타)
const totalOuts = computed(() => {
  return stats.SO + stats.FO + stats.GO + stats.RO;
});

// 타수 (AB) 계산: 모든 아웃 + 안타
// 타수는 타석(PA)에서 볼넷, 사구, 희생번트, 희생플라이를 제외한 값입니다.
const totalAB = computed(() => {
  return totalOuts.value + stats.H;
});

// 타석 (PA) 계산: 타수 + 타수 제외 항목 (BB, HBP, SF, SH)
const totalPA = computed(() => {
  // 실제 PA는 타수(AB) + BB + HBP + SF + SH 로 계산됩니다.
  return totalAB.value + stats.BB + stats.HBP + stats.SF + stats.SH;
});

// ------------------------------------------
// 부모 컴포넌트(RecordInputView)로 최종 데이터 전달
// ------------------------------------------

// stats 객체가 변경될 때마다 부모 컴포넌트(RecordInputView)로 데이터를 전달
watch(
  stats,
  (newStats) => {
    // AB와 PA를 계산하여 최종 데이터에 포함하여 전달합니다.
    emit("update:hitterStats", {
      ...newStats,
      // 계산된 값 추가
      AB: totalAB.value,
      PA: totalPA.value,
      // 단타(1B)는 H - 2B - 3B - HR 로 계산하여 포함합니다.
      "1B": newStats.H - newStats["2B"] - newStats["3B"] - newStats.HR,
    });
  },
  { deep: true, immediate: true }
); // immediate: true를 통해 초기값도 전달
</script>

<style scoped>
.form-label {
  font-size: 0.85rem;
  font-weight: 500;
}
</style>
