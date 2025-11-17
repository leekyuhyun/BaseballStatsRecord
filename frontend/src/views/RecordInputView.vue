<template>
  <div class="record-input">
    <h1 class="mb-4 text-center text-danger">📝 경기 기록 입력</h1>

    <div class="card shadow mb-4">
      <div class="card-header bg-danger text-white fw-bold">
        1. 기본 경기 정보
      </div>
      <div class="card-body">
        <form class="row g-3" @submit.prevent="submitRecord">
          <div class="col-md-3">
            <label for="gameDate" class="form-label">경기 날짜</label>
            <input
              type="date"
              class="form-control"
              id="gameDate"
              v-model="game.date"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="opponent" class="form-label">상대팀</label>
            <input
              type="text"
              class="form-control"
              id="opponent"
              v-model="game.opponent"
              placeholder="상대팀 이름"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="result" class="form-label">승패 결과</label>
            <select
              class="form-select"
              id="result"
              v-model="game.result"
              required
            >
              <option value="" disabled>선택</option>
              <option value="W">승 (Win)</option>
              <option value="L">패 (Loss)</option>
              <option value="D">무 (Draw)</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="score" class="form-label">점수 (예: 10:5)</label>
            <input
              type="text"
              class="form-control"
              id="score"
              v-model="game.score"
              placeholder="10:5"
              required
            />
          </div>
        </form>
      </div>
    </div>

    <ul
      class="nav nav-pills nav-fill mb-3 shadow-sm"
      id="recordTabs"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: currentTab === 'hitter' }"
          @click="currentTab = 'hitter'"
          type="button"
        >
          타자 기록
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: currentTab === 'pitcher' }"
          @click="currentTab = 'pitcher'"
          type="button"
        >
          투수 기록
        </button>
      </li>
    </ul>

    <div class="tab-content border p-4 bg-white shadow-sm mb-4">
      <div
        class="tab-pane fade"
        :class="{ 'show active': currentTab === 'hitter' }"
        role="tabpanel"
      >
        <HitterInputForm @update:hitter-stats="updateHitterStats" />
      </div>

      <div
        class="tab-pane fade"
        :class="{ 'show active': currentTab === 'pitcher' }"
        role="tabpanel"
      >
        <PitcherInputForm @update:pitcher-stats="updatePitcherStats" />
      </div>
    </div>

    <div class="text-center">
      <button
        type="button"
        class="btn btn-lg btn-danger shadow-lg px-5"
        @click="submitRecord"
      >
        ✅ 기록 저장하기
      </button>
    </div>

    <div v-if="successMessage" class="alert alert-success mt-4 text-center">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useRecordsStore } from "../stores/records";
import HitterInputForm from "../components/hitters/HitterInputForm.vue";
import PitcherInputForm from "../components/pitchers/PitcherInputForm.vue";

const router = useRouter();
const recordsStore = useRecordsStore();

const currentTab = ref("hitter"); // 현재 활성화된 탭
const successMessage = ref("");

// 폼 데이터 상태
const game = reactive({
  date: new Date().toISOString().substring(0, 10), // 오늘 날짜 기본값
  opponent: "",
  result: "",
  score: "",
});

const hitterStats = ref({});
const pitcherStats = ref({});

// 자식 컴포넌트에서 데이터 업데이트 시 호출
const updateHitterStats = (stats) => {
  hitterStats.value = stats;
};

const updatePitcherStats = (stats) => {
  pitcherStats.value = stats;
};

// 기록 저장 최종 함수
const submitRecord = () => {
  if (!game.date || !game.opponent || !game.result || !game.score) {
    alert("경기 기본 정보를 모두 입력해주세요.");
    return;
  }

  const fullRecord = {
    ...game,
    hitterStats: hitterStats.value,
    pitcherStats: pitcherStats.value,
    createdAt: new Date().toISOString(),
  };

  // 1. Pinia 스토어에 기록 추가
  recordsStore.addGame(fullRecord);

  // 2. 피드백 및 리셋
  successMessage.value = `"${game.opponent}" 전 기록이 성공적으로 저장되었습니다!`;

  // 3초 후 메시지 제거 및 홈으로 이동
  setTimeout(() => {
    successMessage.value = "";
    router.push("/");
  }, 2000);
};
</script>
