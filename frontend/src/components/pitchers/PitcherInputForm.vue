<template>
  <div class="pitcher-form border p-3 rounded bg-light">
    <h5 class="mb-3 text-secondary">투구 상세 기록</h5>
    <div class="row g-3">
      <div class="col-md-3 col-6">
        <label for="ip" class="form-label">투구 이닝 (IP)</label>
        <input
          type="text"
          class.lite="form-control"
          id="ip"
          v-model="stats.IP"
          placeholder="5.0 또는 5.2"
          required
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="er" class="form-label">자책점 (ER)</label>
        <input
          type="number"
          class="form-control"
          id="er"
          v-model.number="stats.ER"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="k" class="form-label">탈삼진 (K)</label>
        <input
          type="number"
          class="form-control"
          id="k"
          v-model.number="stats.K"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="p_bb" class="form-label">볼넷 (BB)</label>
        <input
          type="number"
          class="form-control"
          id="p_bb"
          v-model.number="stats.P_BB"
          min="0"
        />
      </div>

      <div class="col-md-3 col-6">
        <label for="p_h" class="form-label">피안타 (P_H)</label>
        <input
          type="number"
          class="form-control"
          id="p_h"
          v-model.number="stats.P_H"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="pitches" class="form-label">투구수</label>
        <input
          type="number"
          class="form-control"
          id="pitches"
          v-model.number="stats.Pitches"
          min="0"
        />
      </div>
      <div class="col-md-3 col-6">
        <label for="decision" class="form-label">구원 기록</label>
        <select class="form-select" id="decision" v-model="stats.Decision">
          <option value="">없음</option>
          <option value="W">승리 (W)</option>
          <option value="L">패전 (L)</option>
          <option value="H">홀드 (H)</option>
          <option value="S">세이브 (S)</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const emit = defineEmits(["update:pitcherStats"]);

// 로컬 상태 (PitcherStats)
const stats = reactive({
  IP: "0.0", // 이닝은 문자열로 관리 (x.1, x.2)
  ER: 0,
  K: 0,
  P_H: 0,
  P_BB: 0,
  Pitches: 0,
  Decision: "",
});

watch(
  stats,
  (newStats) => {
    emit("update:pitcherStats", { ...newStats });
  },
  { deep: true }
);
</script>
