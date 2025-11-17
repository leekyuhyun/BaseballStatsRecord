import { defineStore } from "pinia";
import { ref, computed } from "vue";
// 유틸리티 함수 임포트
import {
  calculateAVG,
  calculateERA,
  calculateOPS,
  calculateWHIP,
} from "../utils/statCalculator";

export const useRecordsStore = defineStore(
  "records",
  () => {
    // ------------------------------------
    // State (상태)
    // ------------------------------------
    const profile = ref({
      name: "사용자",
      number: "1",
      team: "우리팀",
      position: "P", // 포지션
      throwingHand: "R", // 던지는 손
      battingSide: "R", // 치는 방향
    }); //

    const games = ref([]); //
    const nextGameId = ref(1); //

    // ------------------------------------
    // Actions (상태 변경 로직)
    // ------------------------------------

    function setProfile(newProfile) {
      profile.value = { ...profile.value, ...newProfile };
    } //

    function addGame(gameData) {
      const newGame = {
        id: nextGameId.value,
        ...gameData,
      };
      games.value.push(newGame);
      nextGameId.value++;
    } //

    // ------------------------------------
    // Getters (계산된 속성)
    // ------------------------------------

    /** 1. 모든 경기 기록을 합산한 총계 통계 (타자/투수) */
    const totalStats = computed(() => {
      let total = {
        // 타자 기록 총합 (Hitting)
        H: 0,
        AB: 0,
        PA: 0,
        HR: 0,
        RBI: 0,
        BB: 0,
        SO: 0,
        HBP: 0,
        SF: 0,
        SH: 0,
        "1B": 0,
        "2B": 0,
        "3B": 0,
        FO: 0,
        GO: 0,
        RO: 0,
        // 투수 기록 총합 (Pitching)
        IP: 0,
        ER: 0,
        K: 0,
        P_H: 0,
        P_BB: 0,
        Pitches: 0,
        // 승패
        W: 0,
        L: 0,
        D: 0,
      }; //

      games.value.forEach((game) => {
        // 경기 결과 합산
        if (game.result === "W") total.W++;
        if (game.result === "L") total.L++;
        if (game.result === "D") total.D++;

        // 타자 기록 합산
        if (game.hitterStats) {
          total.H += game.hitterStats.H || 0;
          total.AB += game.hitterStats.AB || 0;
          total.PA += game.hitterStats.PA || 0;
          total.HR += game.hitterStats.HR || 0;
          total.RBI += game.hitterStats.RBI || 0;
          total.BB += game.hitterStats.BB || 0;
          total.SO += game.hitterStats.SO || 0;
          total.HBP += game.hitterStats.HBP || 0;
          total.SF += game.hitterStats.SF || 0;
          total.SH += game.hitterStats.SH || 0;
          total.FO += game.hitterStats.FO || 0;
          total.GO += game.hitterStats.GO || 0;
          total.RO += game.hitterStats.RO || 0;
          total["1B"] += game.hitterStats["1B"] || 0;
          total["2B"] += game.hitterStats["2B"] || 0;
          total["3B"] += game.hitterStats["3B"] || 0;
        } //

        // 투수 기록 합산
        if (game.pitcherStats) {
          total.IP += parseFloat(game.pitcherStats.IP) || 0;
          total.ER += game.pitcherStats.ER || 0;
          total.K += game.pitcherStats.K || 0;
          total.P_H += game.pitcherStats.P_H || 0;
          total.P_BB += game.pitcherStats.P_BB || 0;
          total.Pitches += game.pitcherStats.Pitches || 0;
        } //
      });

      return total;
    });

    // ----------------------------------------------------
    // 타자 비율 성적 (Hitting Ratio Stats)
    // ----------------------------------------------------

    /** 2. 타율 (AVG) 계산: H / AB */
    const avg = computed(() =>
      calculateAVG(totalStats.value.H, totalStats.value.AB)
    ); //

    /** 3. 출루율 (OBP) 계산 */
    const obp = computed(() => {
      const stats = totalStats.value;
      const numerator = stats.H + stats.BB + stats.HBP;
      const denominator = stats.AB + stats.BB + stats.HBP + stats.SF;
      if (denominator === 0) return ".000";
      return (numerator / denominator).toFixed(3).substring(1);
    }); //

    /** 4. 장타율 (SLG) 계산 */
    const slg = computed(() => {
      const stats = totalStats.value;
      const totalBases =
        stats["1B"] * 1 + stats["2B"] * 2 + stats["3B"] * 3 + stats.HR * 4;
      const AB = stats.AB;
      if (AB === 0) return ".000";
      return (totalBases / AB).toFixed(3).substring(1);
    }); //

    /** 5. OPS (OBP + SLG) 계산 */
    const ops = computed(() => {
      const obpVal = parseFloat(obp.value);
      const slgVal = parseFloat(slg.value);
      return calculateOPS(obpVal, slgVal);
    }); //

    /** 6. 순수 장타율 (ISO) 계산: SLG - AVG */
    const iso = computed(() => {
      const slgVal = parseFloat(slg.value);
      const avgVal = parseFloat(avg.value);
      return (slgVal - avgVal).toFixed(3).substring(1);
    }); //

    // ----------------------------------------------------
    // 투수 비율 성적 (Pitching Ratio Stats)
    // ----------------------------------------------------

    /** 7. 방어율 (ERA) 계산 */
    const era = computed(() =>
      calculateERA(totalStats.value.ER, totalStats.value.IP)
    ); //

    /** 8. WHIP (이닝당 출루 허용률) 계산 */
    const whip = computed(() =>
      calculateWHIP(
        totalStats.value.P_BB,
        totalStats.value.P_H,
        totalStats.value.IP
      )
    ); //

    /** 9. 9이닝당 삼진 (K/9) 계산 */
    const kPer9 = computed(() => {
      const K = totalStats.value.K;
      const IP = totalStats.value.IP;
      if (IP === 0) return "0.00";
      return ((K * 9) / IP).toFixed(2);
    }); //

    /** 10. 9이닝당 볼넷 (BB/9) 계산 */
    const bbPer9 = computed(() => {
      const BB = totalStats.value.P_BB;
      const IP = totalStats.value.IP;
      if (IP === 0) return "0.00";
      return ((BB * 9) / IP).toFixed(2);
    }); //

    /** 11. K/BB (삼진 대 볼넷 비율) 계산 */
    const kToBB = computed(() => {
      const K = totalStats.value.K;
      const BB = totalStats.value.P_BB;
      if (BB === 0) return K > 0 ? "∞" : "0.00";
      return (K / BB).toFixed(2);
    }); //

    return {
      // State
      profile,
      games,
      // Actions
      setProfile,
      addGame,
      // Getters (핵심 계산 결과들)
      totalStats,
      avg,
      obp,
      slg,
      ops,
      iso,
      era,
      whip,
      kPer9,
      bbPer9,
      kToBB,
    }; //
  },
  {
    // Pinia Persisted State (Local Storage) 설정
    persist: {
      key: "baseball_records_app",
      storage: localStorage,
    },
  } //
);
