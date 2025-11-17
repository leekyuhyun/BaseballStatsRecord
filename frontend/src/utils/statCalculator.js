/**
 * 방어율 (Earned Run Average) 계산
 * @param {number} earnedRuns - 자책점 (ER)
 * @param {number} inningsPitched - 투구 이닝 (IP)
 * @returns {string} - 소수점 둘째 자리까지의 ERA
 */
export const calculateERA = (earnedRuns, inningsPitched) => {
  if (inningsPitched <= 0) return "0.00";
  // 공식: (자책점 * 9) / 투구이닝
  return ((earnedRuns * 9) / inningsPitched).toFixed(2);
};

/**
 * 타율 (Batting Average) 계산
 * @param {number} hits - 안타 (H)
 * @param {number} atBats - 타수 (AB)
 * @returns {string} - 소수점 셋째 자리까지의 타율 (ex: .345)
 */
export const calculateAVG = (hits, atBats) => {
  if (atBats <= 0) return ".000";
  // 공식: 안타 / 타수
  return (hits / atBats).toFixed(3).substring(1);
};

/**
 * 출루율 + 장타율 (OPS) 계산
 * @param {number} obp - 출루율 (On-Base Percentage)
 * @param {number} slg - 장타율 (Slugging Percentage)
 * @returns {string} - 소수점 셋째 자리까지의 OPS
 */
export const calculateOPS = (obp, slg) => {
  return (obp + slg).toFixed(3);
};

/**
 * WHIP (Walks plus Hits per Innings Pitched) 계산
 * @param {number} walks - 볼넷 (BB)
 * @param {number} hits - 안타 (H)
 * @param {number} inningsPitched - 투구 이닝 (IP)
 * @returns {string} - 소수점 둘째 자리까지의 WHIP
 */
export const calculateWHIP = (walks, hits, inningsPitched) => {
  if (inningsPitched <= 0) return "0.00";
  return ((walks + hits) / inningsPitched).toFixed(2);
};
