<template>
  <div class="stat-summary">
    <h1 class="mb-5 text-center text-info">📈 시즌 세부 성적 요약</h1>

    <div class="row mb-5 g-3">
      <div class="col-md-4">
        <div class="card shadow border-info h-100 text-center">
          <div class="card-body">
            <p class="card-text text-muted mb-1">타율 (AVG)</p>
            <h2 class="card-title fw-bold text-dark">{{ recordsStore.avg }}</h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow border-info h-100 text-center">
          <div class="card-body">
            <p class="card-text text-muted mb-1">OPS (장타율+출루율)</p>
            <h2 class="card-title fw-bold text-dark">{{ recordsStore.ops }}</h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow border-info h-100 text-center">
          <div class="card-body">
            <p class="card-text text-muted mb-1">방어율 (ERA)</p>
            <h2 class="card-title fw-bold text-dark">{{ recordsStore.era }}</h2>
          </div>
        </div>
      </div>
    </div>

    <ul class="nav nav-tabs mb-4" id="statTabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="hitter-stat-tab"
          data-bs-toggle="tab"
          data-bs-target="#hitter-stat"
          type="button"
          role="tab"
          aria-controls="hitter-stat"
          aria-selected="true"
        >
          타자 성적
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pitcher-stat-tab"
          data-bs-toggle="tab"
          data-bs-target="#pitcher-stat"
          type="button"
          role="tab"
          aria-controls="pitcher-stat"
          aria-selected="false"
        >
          투수 성적
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div
        class="tab-pane fade show active"
        id="hitter-stat"
        role="tabpanel"
        aria-labelledby="hitter-stat-tab"
      >
        <div class="card shadow">
          <div class="card-header bg-light fw-bold">타격 지표 합계</div>
          <div class="card-body p-0">
            <div
              v-if="recordsStore.totalStats.AB === 0"
              class="text-center py-5 text-muted"
            >
              아직 타격 기록이 없습니다.
            </div>
            <div v-else class="table-responsive">
              <table class="table table-striped table-hover mb-0">
                <thead class="table-primary">
                  <tr>
                    <th>타수(AB)</th>
                    <th>안타(H)</th>
                    <th>홈런(HR)</th>
                    <th>타점(RBI)</th>
                    <th>볼넷(BB)</th>
                    <th>삼진(SO)</th>
                    <th>사구(HBP)</th>
                    <th>희생플라이(SF)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ total.AB }}</td>
                    <td>{{ total.H }}</td>
                    <td>{{ total.HR }}</td>
                    <td>{{ total.RBI }}</td>
                    <td>{{ total.BB }}</td>
                    <td>{{ total.SO }}</td>
                    <td>{{ total.HBP }}</td>
                    <td>{{ total.SF }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tab-pane fade"
        id="pitcher-stat"
        role="tabpanel"
        aria-labelledby="pitcher-stat-tab"
      >
        <div class="card shadow">
          <div class="card-header bg-light fw-bold">투구 지표 합계</div>
          <div class="card-body p-0">
            <div
              v-if="recordsStore.totalStats.IP === 0"
              class="text-center py-5 text-muted"
            >
              아직 투구 기록이 없습니다.
            </div>
            <div v-else class="table-responsive">
              <table class="table table-striped table-hover mb-0">
                <thead class="table-info">
                  <tr>
                    <th>투구이닝(IP)</th>
                    <th>자책점(ER)</th>
                    <th>탈삼진(K)</th>
                    <th>볼넷허용(BB)</th>
                    <th>피안타(P_H)</th>
                    <th>승(W)</th>
                    <th>패(L)</th>
                    <th>무(D)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ total.IP }}</td>
                    <td>{{ total.ER }}</td>
                    <td>{{ total.K }}</td>
                    <td>{{ total.P_BB }}</td>
                    <td>{{ total.P_H }}</td>
                    <td>
                      <span class="badge bg-success">{{ total.W }}</span>
                    </td>
                    <td>
                      <span class="badge bg-danger">{{ total.L }}</span>
                    </td>
                    <td>
                      <span class="badge bg-secondary">{{ total.D }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRecordsStore } from "../stores/records";

const recordsStore = useRecordsStore();

// Pinia의 totalStats 게터를 사용하여 전체 합계 데이터를 가져옵니다.
const total = computed(() => recordsStore.totalStats);
</script>

<style scoped>
/* 카드 테두리 색상 강조 */
.border-info {
  border-color: #0dcaf0 !important;
}
</style>
