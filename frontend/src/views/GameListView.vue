<template>
  <div class="game-list">
    <h1 class="mb-5 text-center text-primary">
      🗓️ 전체 경기 기록 목록 (총 {{ totalGames }} 경기)
    </h1>

    <div class="card shadow">
      <div class="card-body p-0">
        <div v-if="totalGames === 0" class="text-center py-5">
          <p class="text-muted fs-5">
            아직 기록된 경기가 없습니다. ⚾<br />
            **기록 입력 뷰**에서 첫 경기를 추가해 주세요.
          </p>
          <RouterLink to="/record-input" class="btn btn-lg btn-success mt-3"
            >첫 경기 기록 입력하기</RouterLink
          >
        </div>

        <div v-else class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">날짜</th>
                <th scope="col">상대팀</th>
                <th scope="col" class="text-center">승패</th>
                <th scope="col" class="text-center">점수</th>
                <th scope="col" class="text-center">결과 요약</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(game, index) in reversedGames" :key="game.id">
                <th scope="row">{{ totalGames - index }}</th>
                <td>{{ formatDate(game.date) }}</td>
                <td>{{ game.opponent }}</td>
                <td
                  :class="getResultClass(game.result)"
                  class="text-center fw-bold"
                >
                  {{ getResultLabel(game.result) }}
                </td>
                <td class="text-center">{{ game.score }}</td>
                <td class="text-center">
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    @click="viewDetail(game)"
                  >
                    상세 보기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useRecordsStore } from "../stores/records";

const recordsStore = useRecordsStore();
const router = useRouter();

// Pinia에서 전체 경기 기록 배열을 가져옴
const games = computed(() => recordsStore.games);
const totalGames = computed(() => games.value.length);

// 최신 경기가 위에 오도록 배열을 뒤집음
const reversedGames = computed(() => [...games.value].reverse());

// ----------------------
// UI Helper Functions
// ----------------------

const formatDate = (dateString) => {
  // YYYY-MM-DD 형식의 날짜를 MM/DD로 변환
  const parts = dateString.split("-");
  if (parts.length === 3) {
    return `${parts[1]}/${parts[2]}`;
  }
  return dateString;
};

const getResultLabel = (result) => {
  switch (result) {
    case "W":
      return "승 (W)";
    case "L":
      return "패 (L)";
    case "D":
      return "무 (D)";
    default:
      return "-";
  }
};

const getResultClass = (result) => {
  switch (result) {
    case "W":
      return "text-success"; // 승리는 녹색
    case "L":
      return "text-danger"; // 패배는 빨간색
    case "D":
      return "text-secondary"; // 무승부는 회색
    default:
      return "";
  }
};

const viewDetail = (game) => {
  // 상세 경기 뷰가 없으므로 임시로 알림창 표시
  alert(
    `[${game.date}] ${game.opponent} 전 상세 기록:\n\n` +
      `타자 기록: ${JSON.stringify(game.hitterStats, null, 2)}\n` +
      `투수 기록: ${JSON.stringify(game.pitcherStats, null, 2)}`
  );

  // 실제 앱에서는 router.push(`/games/${game.id}`)를 사용하여 상세 뷰로 이동합니다.
};
</script>

<style scoped>
/* 테이블 스타일 */
.table-responsive {
  border-radius: 0.25rem;
  overflow: hidden;
}
</style>
