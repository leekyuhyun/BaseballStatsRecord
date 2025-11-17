<template>
  <div class="game-detail container">
    <h1 class="mb-4 text-center text-primary" v-if="game.id">
      {{ game.opponent }}전 상세 기록
    </h1>
    <h1 class="mb-4 text-center text-danger" v-else>
      🚨 경기를 찾을 수 없습니다
    </h1>

    <div v-if="game.id">
      <div class="card shadow mb-5">
        <div
          class="card-header bg-primary text-white fw-bold d-flex justify-content-between"
        >
          <span>경기 요약</span>
          <span
            class="badge fs-6"
            :class="{
              'bg-success': game.result === 'W',
              'bg-danger': game.result === 'L',
              'bg-secondary': game.result === 'D',
            }"
            >{{
              game.result === "W" ? "승" : game.result === "L" ? "패" : "무"
            }}</span
          >
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>날짜:</strong> {{ game.date }}
            </li>
            <li class="list-group-item">
              <strong>상대팀:</strong> {{ game.opponent }}
            </li>
            <li class="list-group-item">
              <strong>스코어:</strong> {{ game.score }}
            </li>
            <li class="list-group-item">
              <strong>비고:</strong> {{ game.memo || "기록 없음" }}
            </li>
          </ul>
        </div>
      </div>

      <div class="card shadow mb-5" v-if="game.hitterStats">
        <div class="card-header bg-success text-white fw-bold">
          ⚾ 타자 기록
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-sm table-striped table-hover mb-0 fs-7">
              <thead class="table-success">
                <tr>
                  <th>타석(PA)</th>
                  <th>타수(AB)</th>
                  <th>안타(H)</th>
                  <th>홈런(HR)</th>
                  <th>타점(RBI)</th>
                  <th>볼넷(BB)</th>
                  <th>삼진(SO)</th>
                  <th>2루타(2B)</th>
                  <th>3루타(3B)</th>
                  <th>희생플라이(SF)</th>
                  <th>땅볼(GO)</th>
                  <th>뜬공(FO)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ game.hitterStats.PA || 0 }}</td>
                  <td>{{ game.hitterStats.AB || 0 }}</td>
                  <td>{{ game.hitterStats.H || 0 }}</td>
                  <td>{{ game.hitterStats.HR || 0 }}</td>
                  <td>{{ game.hitterStats.RBI || 0 }}</td>
                  <td>{{ game.hitterStats.BB || 0 }}</td>
                  <td>{{ game.hitterStats.SO || 0 }}</td>
                  <td>{{ game.hitterStats["2B"] || 0 }}</td>
                  <td>{{ game.hitterStats["3B"] || 0 }}</td>
                  <td>{{ game.hitterStats.SF || 0 }}</td>
                  <td>{{ game.hitterStats.GO || 0 }}</td>
                  <td>{{ game.hitterStats.FO || 0 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="alert alert-warning" v-else>
        해당 경기에 기록된 타자 성적이 없습니다.
      </div>

      <div class="card shadow mb-5" v-if="game.pitcherStats">
        <div class="card-header bg-info text-white fw-bold">🥎 투수 기록</div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-sm table-striped table-hover mb-0 fs-7">
              <thead class="table-info">
                <tr>
                  <th>이닝(IP)</th>
                  <th>자책점(ER)</th>
                  <th>삼진(K)</th>
                  <th>피안타(P_H)</th>
                  <th>볼넷(P_BB)</th>
                  <th>투구수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ game.pitcherStats.IP || 0 }}</td>
                  <td>{{ game.pitcherStats.ER || 0 }}</td>
                  <td>{{ game.pitcherStats.K || 0 }}</td>
                  <td>{{ game.pitcherStats.P_H || 0 }}</td>
                  <td>{{ game.pitcherStats.P_BB || 0 }}</td>
                  <td>{{ game.pitcherStats.Pitches || 0 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="alert alert-warning" v-else>
        해당 경기에 기록된 투수 성적이 없습니다.
      </div>
    </div>

    <div class="text-center mt-4">
      <RouterLink to="/games" class="btn btn-secondary">
        목록으로 돌아가기
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useRecordsStore } from "../stores/records";

const route = useRoute();
const recordsStore = useRecordsStore();

// URL 파라미터에서 game ID를 가져옵니다.
const gameId = parseInt(route.params.id);

// 해당 ID의 경기 데이터를 computed 속성으로 가져옵니다.
const game = computed(() => {
  // Pinia 스토어의 games 배열에서 ID가 일치하는 경기를 찾습니다.
  const foundGame = recordsStore.games.find((g) => g.id === gameId);
  if (!foundGame) {
    // 경기를 찾지 못했을 경우, 오류 처리를 위한 최소 객체를 반환합니다.
    return {
      opponent: "경기를 찾을 수 없음",
      date: "",
      score: "0-0",
      result: "D",
      id: null,
    };
  }
  return foundGame;
});
</script>

<style scoped>
/* StatSummaryView와 동일하게 작은 폰트 사이즈를 정의합니다. */
.fs-7 {
  font-size: 0.75rem !important;
}
</style>
