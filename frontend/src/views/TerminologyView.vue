<template>
  <div class="terminology">
    <h1 class="mb-5 text-center text-success">📚 야구 기록 용어 정리</h1>

    <div class="accordion shadow" id="terminologyAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingHitter">
          <button
            class="accordion-button fw-bold bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseHitter"
            aria-expanded="true"
            aria-controls="collapseHitter"
          >
            ⚾ 타자 기록 용어 (Hitter Stats)
          </button>
        </h2>
        <div
          id="collapseHitter"
          class="accordion-collapse collapse show"
          aria-labelledby="headingHitter"
          data-bs-parent="#terminologyAccordion"
        >
          <div class="accordion-body">
            <dl class="row">
              <dt class="col-sm-3">AB (At Bat)</dt>
              <dd class="col-sm-9">
                **타수**. 공식적으로 타석에 들어선 횟수에서 볼넷(BB), 사구(HBP),
                희생타 등을 제외한 횟수.
              </dd>

              <dt class="col-sm-3">H (Hit)</dt>
              <dd class="col-sm-9">
                **안타**. 타자가 수비수의 실책 없이 출루한 횟수.
              </dd>

              <dt class="col-sm-3">AVG</dt>
              <dd class="col-sm-9">
                **타율**. 타자의 기본적인 능력을 나타내며, 안타를 타수로 나눈
                값입니다. $(H / AB)$
              </dd>

              <dt class="col-sm-3">OBP</dt>
              <dd class="col-sm-9">
                **출루율**. 타자가 타석에서 얼마나 자주 베이스에 살아나갔는지
                나타내는 지표. (안타+볼넷+사구) / (타수+볼넷+사구+희생플라이)
              </dd>

              <dt class="col-sm-3">SLG</dt>
              <dd class="col-sm-9">
                **장타율**. 타수당 총 루타수를 계산하여 타자의 장타력을 평가.
                (총 루타 / AB)
              </dd>

              <dt class="col-sm-3">OPS</dt>
              <dd class="col-sm-9">
                **출루율 + 장타율**. 타자의 공격력을 종합적으로 평가하는 핵심
                지표입니다. $(OBP + SLG)$
              </dd>

              <dt class="col-sm-3">RBI</dt>
              <dd class="col-sm-9">
                **타점**. 타자가 적시타, 희생타 등으로 팀의 득점을 올린 횟수.
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingPitcher">
          <button
            class="accordion-button collapsed fw-bold bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePitcher"
            aria-expanded="false"
            aria-controls="collapsePitcher"
          >
            🥎 투수 기록 용어 (Pitcher Stats)
          </button>
        </h2>
        <div
          id="collapsePitcher"
          class="accordion-collapse collapse"
          aria-labelledby="headingPitcher"
          data-bs-parent="#terminologyAccordion"
        >
          <div class="accordion-body">
            <dl class="row">
              <dt class="col-sm-3">IP (Innings Pitched)</dt>
              <dd class="col-sm-9">
                **투구 이닝**. 아웃카운트 3개가 1이닝이며, 1/3이닝(0.1) 단위로
                기록됩니다. (예: 5.2이닝)
              </dd>

              <dt class="col-sm-3">ERA</dt>
              <dd class="col-sm-9">
                **방어율**. 투수가 9이닝당 평균적으로 허용한 **자책점**입니다.
                $(ER \times 9 / IP)$
              </dd>

              <dt class="col-sm-3">ER (Earned Run)</dt>
              <dd class="col-sm-9">
                **자책점**. 투수의 책임으로 인한 실점 (실책으로 인한 실점은
                제외).
              </dd>

              <dt class="col-sm-3">WHIP</dt>
              <dd class="col-sm-9">
                **이닝당 출루 허용률**. 투수가 1이닝 동안 평균 몇 명의 타자를
                출루시켰는지 나타냅니다. (안타 + 볼넷) / 이닝 수.
              </dd>

              <dt class="col-sm-3">K (Strikeouts)</dt>
              <dd class="col-sm-9">
                **탈삼진**. 타자를 삼진 아웃으로 잡은 횟수.
              </dd>

              <dt class="col-sm-3">K/9</dt>
              <dd class="col-sm-9">
                **9이닝당 탈삼진**. 투수의 탈삼진 능력을 평가하는 지표입니다.
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOther">
          <button
            class="accordion-button collapsed fw-bold bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOther"
            aria-expanded="false"
            aria-controls="collapseOther"
          >
            🏃 수비 및 기타 기록 용어 (Defense & Others)
          </button>
        </h2>
        <div
          id="collapseOther"
          class="accordion-collapse collapse"
          aria-labelledby="headingOther"
          data-bs-parent="#terminologyAccordion"
        >
          <div class="accordion-body">
            <dl class="row">
              <dt class="col-sm-3">E (Error)</dt>
              <dd class="col-sm-9">
                **실책**. 수비수가 정상적인 플레이를 방해하여 타자나 주자에게
                유리한 결과를 초래했을 때 기록됩니다.
              </dd>

              <dt class="col-sm-3">FPCT</dt>
              <dd class="col-sm-9">
                **수비율**. 수비 기회 중 실책을 제외한 성공적인 처리 비율. 수비
                안정도를 나타냅니다.
              </dd>

              <dt class="col-sm-3">SB (Stolen Base)</dt>
              <dd class="col-sm-9">
                **도루**. 주자가 투구 중 다음 베이스로 성공적으로 진루한 횟수.
              </dd>

              <dt class="col-sm-3">CS (Caught Stealing)</dt>
              <dd class="col-sm-9">**도루 실패**. 도루 시도 중 아웃된 횟수.</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 이 뷰는 순수한 정적 정보 제공 뷰이므로 스크립트 로직은 필요 없습니다.
</script>
