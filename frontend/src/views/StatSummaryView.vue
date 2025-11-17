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
            <p class="card-text text-muted mb-1">OPS</p>
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
          <div class="card-header bg-light fw-bold">타격 종합 지표</div>
          <div class="card-body p-0">
            <div
              v-if="recordsStore.totalStats.AB === 0"
              class="text-center py-5 text-muted"
            >
              아직 타격 기록이 없습니다.
            </div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-striped table-hover mb-0 fs-7">
                <thead class="table-primary">
                  <tr>
                    <th class="text-center">AVG</th>
                    <th class="text-center">OBP</th>
                    <th class="text-center">SLG</th>
                    <th class="text-center">OPS</th>
                    <th class="text-center">ISO</th>
                    <th class="text-center">PA</th>
                    <th class="text-center">AB</th>
                    <th class="text-center">H</th>
                    <th class="text-center">HR</th>
                    <th class="text-center">RBI</th>
                    <th class="text-center">BB</th>
                    <th class="text-center">SO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">{{ recordsStore.avg }}</td>
                    <td class="text-center">{{ recordsStore.obp }}</td>
                    <td class="text-center">{{ recordsStore.slg }}</td>
                    <td class="text-center">{{ recordsStore.ops }}</td>
                    <td class="text-center">{{ recordsStore.iso }}</td>
                    <td class="text-center">{{ total.PA }}</td>
                    <td class="text-center">{{ total.AB }}</td>
                    <td class="text-center">{{ total.H }}</td>
                    <td class="text-center">{{ total.HR }}</td>
                    <td class="text-center">{{ total.RBI }}</td>
                    <td class="text-center">{{ total.BB }}</td>
                    <td class="text-center">{{ total.SO }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="card-header bg-light fw-bold border-top">
                세부 기록
              </div>
              <table class="table table-sm table-striped table-hover mb-0 fs-7">
                <thead class="table-secondary">
                  <tr>
                    <th class="text-center">1B</th>
                    <th class="text-center">2B</th>
                    <th class="text-center">3B</th>
                    <th class="text-center">HBP</th>
                    <th class="text-center">SF</th>
                    <th class="text-center">SH</th>
                    <th class="text-center">GO (땅볼)</th>
                    <th class="text-center">FO (뜬공)</th>
                    <th class="text-center">RO (기타)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">{{ total["1B"] }}</td>
                    <td class="text-center">{{ total["2B"] }}</td>
                    <td class="text-center">{{ total["3B"] }}</td>
                    <td class="text-center">{{ total.HBP }}</td>
                    <td class="text-center">{{ total.SF }}</td>
                    <td class="text-center">{{ total.SH }}</td>
                    <td class="text-center">{{ total.GO }}</td>
                    <td class="text-center">{{ total.FO }}</td>
                    <td class="text-center">{{ total.RO }}</td>
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
          <div class="card-header bg-light fw-bold">투구 종합 지표</div>
          <div class="card-body p-0">
            <div
              v-if="recordsStore.totalStats.IP === 0"
              class="text-center py-5 text-muted"
            >
              아직 투구 기록이 없습니다.
            </div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-striped table-hover mb-0 fs-7">
                <thead class="table-info">
                  <tr>
                    <th class="text-center">ERA</th>
                    <th class="text-center">WHIP</th>
                    <th class="text-center">K/9</th>
                    <th class="text-center">BB/9</th>
                    <th class="text-center">K/BB</th>
                    <th class="text-center">IP</th>
                    <th class="text-center">ER</th>
                    <th class="text-center">K</th>
                    <th class="text-center">P_H</th>
                    <th class="text-center">P_BB</th>
                    <th class="text-center">W</th>
                    <th class="text-center">L</th>
                    <th class="text-center">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">{{ recordsStore.era }}</td>
                    <td class="text-center">{{ recordsStore.whip }}</td>
                    <td class="text-center">{{ recordsStore.kPer9 }}</td>
                    <td class="text-center">{{ recordsStore.bbPer9 }}</td>
                    <td class="text-center">{{ recordsStore.kToBB }}</td>
                    <td class="text-center">{{ total.IP }}</td>
                    <td class="text-center">{{ total.ER }}</td>
                    <td class="text-center">{{ total.K }}</td>
                    <td class="text-center">{{ total.P_H }}</td>
                    <td class="text-center">{{ total.P_BB }}</td>
                    <td class="text-center">
                      <span class="badge bg-success">{{ total.W }}</span>
                    </td>
                    <td class="text-center">
                      <span class="badge bg-danger">{{ total.L }}</span>
                    </td>
                    <td class="text-center">
                      <span class="badge bg-secondary">{{ total.D }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="card-header bg-light fw-bold border-top">
                세부 기록
              </div>
              <table class="table table-sm table-striped table-hover mb-0 fs-7">
                <thead class="table-secondary">
                  <tr>
                    <th class="text-center">투구수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">{{ total.Pitches }}</td>
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

const total = computed(() => recordsStore.totalStats);
</script>

<style scoped>
/* 부트스트랩 table-sm 클래스를 사용했지만, fs-7 (font-size 7) 클래스를 커스텀으로 추가하여 더 작게 만듭니다. */
.fs-7 {
  font-size: 0.75rem !important; /* 기본 폰트 사이즈보다 작게 조정 */
}
.table-responsive {
  /* 가로 스크롤을 허용하고, 세로 스크롤은 필요할 때만 나타나도록 설정 */
  overflow-x: auto;
}
.border-info {
  border-color: #0dcaf0 !important;
}
</style>
