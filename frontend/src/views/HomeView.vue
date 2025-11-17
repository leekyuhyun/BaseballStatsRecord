<template>
  <div class="home">
    <h1 class="mb-5 text-center text-dark">👋 마이 페이지</h1>

    <div class="row mb-5 g-4">
      <div class="col-lg-12">
        <div
          class="card shadow-lg border-0 bg-primary text-white position-relative"
        >
          <div class="card-body text-center py-4">
            <h5 class="card-title mb-1">나의 프로필</h5>
            <h2 class="card-text fw-bold">
              {{ recordsStore.profile.name }}
              <span v-if="recordsStore.profile.number">
                (NO. {{ recordsStore.profile.number }})</span
              >
            </h2>
            <p class="text-light mb-0">
              소속 팀: {{ recordsStore.profile.team }}
            </p>

            <p class="text-warning fw-bold mb-0 mt-2 fs-5">
              {{ recordsStore.profile.position }} / {{ throwingSideLabel }}투{{
                battingSideLabel
              }}타
            </p>

            <button
              class="btn btn-sm btn-warning position-absolute top-0 end-0 m-3"
              data-bs-toggle="modal"
              data-bs-target="#profileEditModal"
            >
              수정
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card shadow-sm h-100">
          <div class="card-header bg-warning text-dark fw-bold">
            📊 이번 시즌 핵심 성적
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                타율 (AVG)
                <span class="badge bg-dark rounded-pill fw-bold">{{
                  recordsStore.avg
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                OPS
                <span class="badge bg-dark rounded-pill fw-bold">{{
                  recordsStore.ops
                }}</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                방어율 (ERA)
                <span class="badge bg-dark rounded-pill fw-bold">{{
                  recordsStore.era
                }}</span>
              </li>
            </ul>
            <RouterLink
              to="/stats"
              class="btn btn-sm btn-outline-primary mt-3 w-100"
              >세부 성적 보러가기</RouterLink
            >
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card shadow-sm h-100">
          <div class="card-header bg-light">
            📜 최근 경기 목록 (총 {{ totalGames }} 경기)
          </div>
          <ul v-if="totalGames > 0" class="list-group list-group-flush">
            <li
              v-for="game in recentGames"
              :key="game.id"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <span
                  :class="[
                    'badge me-2',
                    game.result === 'W' ? 'bg-primary' : 'bg-secondary',
                  ]"
                  >{{ game.result }}</span
                >
                <span class="fw-bold">{{ game.opponent }}</span> 전
                <small class="text-muted ms-3">{{ game.date }}</small>
              </div>
              <span class="text-muted">{{ game.score }}</span>
            </li>
            <li class="list-group-item text-center">
              <RouterLink to="/games" class="btn btn-outline-primary btn-sm"
                >전체 경기 더보기</RouterLink
              >
            </li>
          </ul>
          <div
            v-else
            class="card-body text-center d-flex align-items-center justify-content-center"
          >
            <p class="text-muted">
              아직 기록된 경기가 없습니다. <br />
              <RouterLink to="/record-input" class="fw-bold"
                >기록 입력 뷰</RouterLink
              >에서 첫 경기를 추가해주세요!
            </p>
          </div>
        </div>
      </div>
    </div>

    <ProfileEditModal />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRecordsStore } from "../stores/records";
import ProfileEditModal from "../components/common/ProfileEditModal.vue";

const recordsStore = useRecordsStore();

const totalGames = computed(() => recordsStore.games.length);

// 최근 3경기만 보여주기 (최신순)
const recentGames = computed(() => {
  return [...recordsStore.games]
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // 날짜 기준 내림차순 정렬
    .slice(0, 3); // 최근 3개만 자르기
});

// ----------------------------------------------------
// ⚾ 투/타 방향 약자를 한글로 변환하는 computed 속성 추가
// ----------------------------------------------------

const sideMap = {
  R: "우",
  L: "좌",
  S: "양",
  "": "정보없음",
};

const throwingSideLabel = computed(() => {
  return sideMap[recordsStore.profile.throwingHand] || "정보없음";
});

const battingSideLabel = computed(() => {
  return sideMap[recordsStore.profile.battingSide] || "정보없음";
});
</script>

<style scoped>
.card-title {
  font-size: 1.25rem;
}
</style>
