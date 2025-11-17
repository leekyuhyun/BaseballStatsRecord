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
              <dt class="col-sm-3">PA (Plate Appearance)</dt>
              <dd class="col-sm-9">
                타석. 타자가 타석에 들어선 횟수. (AB + BB + HBP + SF + SH)
              </dd>

              <dt class="col-sm-3">AB (At Bat)</dt>
              <dd class="col-sm-9">
                타수. 공식적으로 타석에 들어선 횟수에서 볼넷, 사구, 희생타 등을
                제외한 횟수.
              </dd>

              <dt class="col-sm-3">H (Hit)</dt>
              <dd class="col-sm-9">
                안타. 타자가 수비수의 실책 없이 출루한 횟수.
              </dd>

              <dt class="col-sm-3">AVG</dt>
              <dd class="col-sm-9">타율. 안타를 타수로 나눈 값. (H / AB)</dd>

              <dt class="col-sm-3">OBP</dt>
              <dd class="col-sm-9">
                출루율. 타자가 타석에서 얼마나 자주 베이스에 살아나갔는지
                나타내는 지표. (안타+볼넷+사구) / (타수+볼넷+사구+희생플라이)
              </dd>

              <dt class="col-sm-3">SLG</dt>
              <dd class="col-sm-9">
                장타율. 타수당 총 루타수를 계산하여 타자의 장타력을 평가. (총
                루타 / AB)
              </dd>

              <dt class="col-sm-3">OPS</dt>
              <dd class="col-sm-9">
                출루율 + 장타율. 타자의 공격력을 종합적으로 평가하는 핵심
                지표입니다. (OBP + SLG)
              </dd>

              <dt class="col-sm-3">ISO</dt>
              <dd class="col-sm-9">
                순수 장타율 (Isolated Power). 타율에 포함되지 않는 순수한 장타
                능력만 측정. (SLG - AVG)
              </dd>

              <dt class="col-sm-3">BABIP</dt>
              <dd class="col-sm-9">
                인플레이 타구 타율 (Batting Average on Balls In Play). 홈런을
                제외한 인플레이 타구가 안타가 되는 비율. (H - HR) / (AB - HR -
                SO + SF)
              </dd>

              <dt class="col-sm-3">wOBA</dt>
              <dd class="col-sm-9">
                가중 출루율 (Weighted On-Base Average). 각 타격 결과에 가치를
                부여해 계산하는 진보된 출루율 지표.
              </dd>

              <dt class="col-sm-3">GPA</dt>
              <dd class="col-sm-9">
                Gross Production Average. OBP와 SLG를 활용해 타격 생산성을
                나타내는 지표. (OBP * 1.5 + SLG) / 4
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
                투구 이닝. 아웃카운트 3개가 1이닝이며, 1/3이닝(0.1) 단위로
                기록됩니다.
              </dd>

              <dt class="col-sm-3">ERA</dt>
              <dd class="col-sm-9">
                방어율. 투수가 9이닝당 평균적으로 허용한 자책점입니다. (ER * 9 /
                IP)
              </dd>

              <dt class="col-sm-3">ER (Earned Run)</dt>
              <dd class="col-sm-9">
                자책점. 투수의 책임으로 인한 실점 (실책으로 인한 실점은 제외).
              </dd>

              <dt class="col-sm-3">WHIP</dt>
              <dd class="col-sm-9">
                이닝당 출루 허용률. 투수가 1이닝 동안 평균 몇 명의 타자를
                출루시켰는지 나타냅니다. (안타 + 볼넷) / 이닝 수.
              </dd>

              <dt class="col-sm-3">FIP</dt>
              <dd class="col-sm-9">
                수비 무관 평균자책점 (Fielding Independent Pitching). 수비 영향
                없이 삼진, 볼넷, 홈런만으로 평가하는 방어율.
              </dd>

              <dt class="col-sm-3">LOB%</dt>
              <dd class="col-sm-9">
                잔루율 (Left On Base Percentage). 투수가 루상의 주자를
                득점시키지 않고 이닝을 종료시키는 비율.
              </dd>

              <dt class="col-sm-3">K/9</dt>
              <dd class="col-sm-9">
                9이닝당 탈삼진. 투수의 탈삼진 능력을 평가하는 지표입니다.
              </dd>

              <dt class="col-sm-3">BB/9</dt>
              <dd class="col-sm-9">
                9이닝당 볼넷. 투수의 제구력을 평가하는 지표입니다.
              </dd>

              <dt class="col-sm-3">K/BB</dt>
              <dd class="col-sm-9">
                삼진 대 볼넷 비율. 투수의 탈삼진 능력과 제구력의 균형을
                보여줍니다.
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
                실책. 수비수가 정상적인 플레이를 방해하여 타자나 주자에게 유리한
                결과를 초래했을 때 기록됩니다.
              </dd>

              <dt class="col-sm-3">FPCT</dt>
              <dd class="col-sm-9">
                수비율. 수비 기회 중 실책을 제외한 성공적인 처리 비율. 수비
                안정도를 나타냅니다.
              </dd>

              <dt class="col-sm-3">SB (Stolen Base)</dt>
              <dd class="col-sm-9">
                도루. 주자가 투구 중 다음 베이스로 성공적으로 진루한 횟수.
              </dd>

              <dt class="col-sm-3">CS (Caught Stealing)</dt>
              <dd class="col-sm-9">도루 실패. 도루 시도 중 아웃된 횟수.</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
