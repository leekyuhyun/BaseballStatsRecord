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
                    <th>AVG</th>
                    <th>OBP</th>
                    <th>SLG</th>
                    <th>OPS</th>
                    <th>ISO</th>
                    <th>PA</th>
                    <th>AB</th>
                    <th>H</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>BB</th>
                    <th>SO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ recordsStore.avg }}</td>
                    <td>{{ recordsStore.obp }}</td>
                    <td>{{ recordsStore.slg }}</td>
                    <td>{{ recordsStore.ops }}</td>
                    <td>{{ recordsStore.iso }}</td>
                    <td>{{ total.PA }}</td>
                    <td>{{ total.AB }}</td>
                    <td>{{ total.H }}</td>
                    <td>{{ total.HR }}</td>
                    <td>{{ total.RBI }}</td>
                    <td>{{ total.BB }}</td>
                    <td>{{ total.SO }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="card-header bg-light fw-bold border-top">
                세부 기록
              </div>
              <table class="table table-sm table-striped table-hover mb-0 fs-7">
                <thead class="table-secondary">
                  <tr>
                    <th>1B</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HBP</th>
                    <th>SF</th>
                    <th>SH</th>
                    <th>GO (땅볼)</th>
                    <th>FO (뜬공)</th>
                    <th>RO (기타)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ total["1B"] }}</td>
                    <td>{{ total["2B"] }}</td>
                    <td>{{ total["3B"] }}</td>
                    <td>{{ total.HBP }}</td>
                    <td>{{ total.SF }}</td>
                    <td>{{ total.SH }}</td>
                    <td>{{ total.GO }}</td>
                    <td>{{ total.FO }}</td>
                    <td>{{ total.RO }}</td>
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
                    <th>ERA</th>
                    <th>WHIP</th>
                    <th>K/9</th>
                    <th>BB/9</th>
                    <th>K/BB</th>
                    <th>IP</th>
                    <th>ER</th>
                    <th>K</th>
                    <th>P_H</th>
                    <th>P_BB</th>
                    <th>W</th>
                    <th>L</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ recordsStore.era }}</td>
                    <td>{{ recordsStore.whip }}</td>
                    <td>{{ recordsStore.kPer9 }}</td>
                    <td>{{ recordsStore.bbPer9 }}</td>
                    <td>{{ recordsStore.kToBB }}</td>
                    <td>{{ total.IP }}</td>
                    <td>{{ total.ER }}</td>
                    <td>{{ total.K }}</td>
                    <td>{{ total.P_H }}</td>
                    <td>{{ total.P_BB }}</td>
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

              <div class="card-header bg-light fw-bold border-top">
                세부 기록
              </div>
              <table class="table table-sm table-striped table-hover mb-0 fs-7">
                <thead class="table-secondary">
                  <tr>
                    <th>투구수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ total.Pitches }}</td>
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
