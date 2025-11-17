<template>
  <h2 class="mb-4">⚾️ 홈: 내 성적 및 최근 활동</h2>

  <div class="card shadow-sm mb-4">
    <div class="card-header bg-warning text-dark">
      <h5 class="mb-0">👤 내 프로필</h5>
    </div>
    <div class="card-body">
      <p><strong>이름:</strong> 홍길동</p>
      <p>
        <strong>주 포지션:</strong>
        {{
          batterSummary.totalPA > 0 && pitcherSummary.totalIP > 0
            ? "투타 겸업"
            : batterSummary.totalPA > 0
            ? "타자"
            : pitcherSummary.totalIP > 0
            ? "투수"
            : "기록 없음"
        }}
      </p>
      <p><strong>총 경기 수:</strong> {{ allRecords.length }} 경기</p>
    </div>
  </div>

  <div class="card shadow-sm mb-5">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">📊 시즌 성적 요약</h5>
    </div>
    <div class="card-body">
      <h4 class="text-danger fw-bold">
        {{ batterSummary.battingAvg }} AVG /
        {{ pitcherSummary.era.toFixed(2) }} ERA
      </h4>
      <p class="text-muted small">타율 / 방어율</p>
    </div>
  </div>

  <h3 class="mt-5 mb-3">🗓️ 최근 경기 기록</h3>
  <GameList
    :games="allRecords.slice().reverse().slice(0, 3)"
    :is-summary-view="true"
    @edit-game="openEditModal"
    @delete-game="handleDeleteGame"
  />

  <div class="d-grid gap-2 mt-4">
    <router-link to="/games" class="btn btn-outline-primary">
      전체 경기 기록 목록 보기
    </router-link>
  </div>
</template>

<script setup>
import { useRecords } from "../composables/useRecords";
import { useModal } from "../composables/useModal";
import GameList from "../components/GameList.vue";

// Composables Hook
const { allRecords, batterSummary, pitcherSummary, handleDeleteGame } =
  useRecords();
const { openEditModal } = useModal();
</script>
