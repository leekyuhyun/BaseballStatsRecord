<template>
  <div class="card shadow-lg mb-5">
    <div class="card-header bg-secondary text-white">
      <h4 class="mb-0">📖 프로야구 기록 용어 사전</h4>
    </div>
    <div class="card-body">
      <div class="btn-group w-100 mb-4" role="group">
        <button
          type="button"
          class="btn btn-lg"
          :class="
            activeTab === 'batter' ? 'btn-primary' : 'btn-outline-primary'
          "
          @click="activeTab = 'batter'"
        >
          🏏 타자 기록 용어
        </button>
        <button
          type="button"
          class="btn btn-lg"
          :class="
            activeTab === 'pitcher' ? 'btn-success' : 'btn-outline-success'
          "
          @click="activeTab = 'pitcher'"
        >
          ⚾️ 투수 기록 용어
        </button>
      </div>

      <div v-if="activeTab === 'batter'">
        <h5 class="text-primary mb-3">🏏 타자 기록 용어</h5>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">타율 (AVG: Batting Average)</div>
              타자가 타수 대비 안타를 쳐낸 비율. 타격의 정확도를 측정합니다.
              <div class="small text-muted mt-1">계산: 안타 ÷ 타수</div>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">OPS (On-base Plus Slugging)</div>
              출루율과 장타율을 합한 값으로, 타자의 종합적인 공격력을 나타내는
              핵심 지표입니다.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">출루율 (OBP: On-Base Percentage)</div>
              타자가 타석에서 출루에 성공하는 비율입니다. (안타, 볼넷, 사구
              포함)
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">장타율 (SLG: Slugging Percentage)</div>
              타자가 타수당 평균 몇 개의 루타를 얻어냈는지 나타내는 비율.
              장타력을 측정합니다.
              <div class="small text-muted mt-1">계산: 총 루타 ÷ 타수</div>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">타석 (PA: Plate Appearance)</div>
              타자가 타석에 들어선 총 횟수입니다. (안타, 볼넷, 삼진 등 모든 결과
              포함)
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">타수 (AB: At Bat)</div>
              타율을 계산할 때 사용되는 값. 볼넷, 사구, 희생타를 제외한 순수한
              타격 기회입니다.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">
                안타 (H: Hit) & 총 루타 (TB: Total Bases)
              </div>
              안타는 1루타, 2루타, 3루타, 홈런의 합계. 총 루타는 안타로 진루한
              총 베이스 수입니다.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">타점 (RBI: Run Batted In)</div>
              타자의 공격으로 주자가 홈을 밟아 득점하게 만든 횟수입니다.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">삼진 (SO) & 볼넷 (BB)</div>
              삼진: 투수에게 삼진 아웃된 횟수. 볼넷: 볼 4개로 1루에 나간 횟수.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">희생타 (SF/SH)</div>
              희생플라이(SF) 또는 희생번트(SH). 아웃되더라도 주자를 진루시키거나
              득점시킨 경우입니다. (타수에서 제외)
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">병살타 (GDP: Ground into Double Play)</div>
              타자가 친 땅볼로 인해 수비수가 주자 2명을 아웃시킨 기록입니다.
            </div>
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'pitcher'">
        <h5 class="text-primary mb-3">⚾️ 투수 기록 용어</h5>
        <ul class="list-group mb-4">
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">방어율 (ERA: Earned Run Average)</div>
              9이닝당 평균 자책점으로, 투수의 실점 억제 능력을 나타내는 핵심
              지표입니다.
              <div class="small text-muted mt-1">
                계산: (자책점 × 9) ÷ 투구 이닝 수
              </div>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">이닝 수 (IP: Innings Pitched)</div>
              투수가 아웃시킨 총 횟수를 3으로 나눈 값. 1이닝은 아웃 3개이며,
              소수점 (.1, .2)은 1/3, 2/3 이닝을 의미합니다.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">자책점 (ER: Earned Run)</div>
              투수의 책임으로 기록되는 실점. 수비 실책 없이 허용한 점수입니다.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">WHIP</div>
              이닝당 출루 허용률. 투수가 1이닝당 몇 명의 주자를 내보냈는지를
              나타냅니다. (낮을수록 좋음)
              <div class="small text-muted mt-1">
                계산: (볼넷 + 피안타) ÷ 투구 이닝 수
              </div>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">승/패 (W/L: Win/Loss)</div>
              승리투수: 팀 승리에 기여한 투수. 패전투수: 팀 패배에 결정적 실점을
              허용한 투수.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">세이브 (S: Save) & 홀드 (H: Hold)</div>
              세이브: 리드를 지키고 경기를 끝냄. 홀드: 리드를 지킨 채 마운드를
              내려옴 (세이브 조건 불충족 시).
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">탈삼진 (K 또는 SO) & 볼넷 (BB)</div>
              투수가 삼진으로 잡아낸 타자의 수 (K). 볼넷은 볼 4개로 타자를
              진루시킨 횟수.
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">피안타 (H: Hits allowed)</div>
              투수가 상대 타자에게 허용한 안타의 총 개수입니다.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("batter");
</script>

<style scoped>
.list-group-item {
  border-left: 5px solid var(--bs-primary);
  border-radius: 0.375rem;
  margin-bottom: 8px;
  background-color: #ffffff;
}

.btn-group .btn-lg {
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
}
</style>
