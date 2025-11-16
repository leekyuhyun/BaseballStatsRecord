// src/utils/statsCalculator.js

/**
 * 이닝 수(IP)를 야구 표기법(1/3 단위)으로 변환하는 함수
 */
export function formatInnings(ip) {
    const fullInnings = Math.floor(ip);
    const partialInnings = (ip * 10) % 10;
    
    if (partialInnings >= 3) {
        return (fullInnings + 1).toFixed(1);
    }
    return ip.toFixed(1);
}

/**
 * 타자 통계를 계산하여 객체로 반환합니다. (H, AB, PA 자동 계산)
 */
export function calculateBatterStats(records) {
    const batterRecords = records.filter(r => r.gameType === 'Batter' || r.gameType === 'Both');
    
    if (batterRecords.length === 0) {
        return { totalPA: 0, totalAB: 0, totalH: 0, battingAvg: '0.000', obp: '0.000', slg: '0.000', ops: '0.000', totalRBI: 0, totalBB: 0, totalSO: 0, totalHR: 0, totalGDP: 0 };
    }

    const totalStats = batterRecords.reduce((acc, record) => {
        const single = record.single || 0;
        const double = record.double || 0;
        const triple = record.triple || 0;
        const hr = record.hr || 0;
        const bb = record.bb || 0;
        const hbp = record.hbp || 0;
        const sf = record.sf || 0;
        const so = record.so || 0;
        
        const groundout = record.groundout || 0;
        const flyout = record.flyout || 0;
        const totalOutsFielded = groundout + flyout;
        
        acc.totalRBI += record.rbi || 0;
        acc.totalBB += bb;
        acc.totalSO += so;
        acc.totalHR += hr;
        acc.totalGDP += record.gdp || 0;
        acc.totalHBP += hbp;
        acc.totalSF += sf;
        
        const totalH = single + double + triple + hr;
        acc.totalH += totalH;

        const totalAB = totalH + so + totalOutsFielded; 
        acc.totalAB += totalAB;

        const totalPA = totalAB + bb + hbp + sf;
        acc.totalPA += totalPA; 

        const totalBases = single + (double * 2) + (triple * 3) + (hr * 4);
        acc.totalBases += totalBases;
        
        return acc;
    }, { 
        totalPA: 0, totalAB: 0, totalH: 0, totalBB: 0, totalBases: 0, totalRBI: 0, totalSO: 0, totalHR: 0, totalGDP: 0, totalHBP: 0, totalSF: 0
    });

    const battingAvg = totalStats.totalAB > 0 ? (totalStats.totalH / totalStats.totalAB).toFixed(3) : '0.000';

    const obpDenominator = totalStats.totalAB + totalStats.totalBB + totalStats.totalHBP + totalStats.totalSF;
    const obp = obpDenominator > 0 ? (totalStats.totalH + totalStats.totalBB + totalStats.totalHBP) / obpDenominator : 0;
        
    const slg = totalStats.totalAB > 0 ? totalStats.totalBases / totalStats.totalAB : 0;

    return {
        ...totalStats,
        battingAvg: battingAvg,
        obp: obp.toFixed(3),
        slg: slg.toFixed(3),
        ops: (obp + slg).toFixed(3),
    };
}

/**
 * 투수 통계를 계산하여 객체로 반환합니다.
 */
export function calculatePitcherStats(records) {
    const pitcherRecords = records.filter(r => r.gameType === 'Pitcher' || r.gameType === 'Both');
    
    if (pitcherRecords.length === 0) {
        return { totalIP: 0, totalER: 0, totalSO: 0, totalBB: 0, era: 0 };
    }

    const totalStats = pitcherRecords.reduce((acc, record) => {
        acc.totalER += (record.er || 0);
        acc.totalSO += (record.pitcherSO || 0);
        acc.totalBB += (record.pitcherBB || 0);
        
        const fullInnings = Math.floor(record.ip || 0);
        const partialInnings = ((record.ip || 0) * 10) % 10;
        acc.totalThirdInnings += (fullInnings * 3) + partialInnings;

        return acc;
    }, { totalER: 0, totalSO: 0, totalBB: 0, totalThirdInnings: 0 });

    const totalInnings = (totalStats.totalThirdInnings / 3);

    const era = totalInnings > 0 ? (totalStats.totalER * 9) / totalInnings : 0;

    return {
        ...totalStats,
        totalIP: totalInnings,
        era: era,
    };
}