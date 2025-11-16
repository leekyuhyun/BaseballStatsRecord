<template>
  <div class="card shadow-lg mb-5">
    <div class="card-header" :class="isEditMode ? 'bg-warning text-dark' : 'bg-success text-white'">
      <h4 class="mb-0">{{ isEditMode ? '✍️ 기록 수정' : '➕ 새 경기 기록 입력' }}</h4>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitRecord">
        
        <h5 class="mb-3 text-primary">경기 참여 형태</h5>
        <div class="btn-group w-100 mb-4" role="group">
            <input type="radio" class="btn-check" id="typeBatter" v-model="form.gameType" value="Batter">
            <label class="btn btn-outline-info btn-lg" for="typeBatter">타자만</label>
            
            <input type="radio" class="btn-check" id="typePitcher" v-model="form.gameType" value="Pitcher">
            <label class="btn btn-outline-info btn-lg" for="typePitcher">투수만</label>

            <input type="radio" class="btn-check" id="typeBoth" v-model="form.gameType" value="Both">
            <label class="btn btn-outline-info btn-lg" for="typeBoth">투수 & 타자</label>
        </div>

        <h5 class="mb-3 text-primary">기본 정보</h5>
        <div class="row g-3 mb-4">
          <div class="col-sm-6">
            <label for="gameDate" class="form-label">날짜</label>
            <input type="date" class="form-control form-control-lg" id="gameDate" v-model="form.date" required>
          </div>
          <div class="col-sm-6">
            <label for="opponent" class="form-label">상대 팀</label>
            <input type="text" class="form-control form-control-lg" id="opponent" v-model="form.opponent" placeholder="팀 이름 입력" required>
          </div>
          <div class="col-12">
            <label for="result" class="form-label">경기 결과</label>
            <select class="form-select form-select-lg" id="result" v-model="form.result" required>
              <option value="" disabled>선택</option>
              <option value="승">승리 (W)</option>
              <option value="패">패배 (L)</option>
              <option value="무">무승부 (D)</option>
            </select>
          </div>
        </div>

        <div v-if="form.gameType === 'Batter' || form.gameType === 'Both'">
            <h5 class="mb-3 text-primary">나의 타격 기록 (이벤트 수)</h5>
            
            <h6 class="text-secondary mt-3">안타 종류</h6>
            <div class="row g-3 mb-3">
                <div class="col-6"><label for="single" class="form-label">1루타 (1B)</label><input type="number" class="form-control text-center" id="single" v-model.number="form.single" min="0"></div>
                <div class="col-6"><label for="double" class="form-label">2루타 (2B)</label><input type="number" class="form-control text-center" id="double" v-model.number="form.double" min="0"></div>
                <div class="col-6"><label for="triple" class="form-label">3루타 (3B)</label><input type="number" class="form-control text-center" id="triple" v-model.number="form.triple" min="0"></div>
                <div class="col-6"><label for="hr" class="form-label">홈런 (HR)</label><input type="number" class="form-control text-center" id="hr" v-model.number="form.hr" min="0"></div>
            </div>

            <h6 class="text-secondary mt-3">기타 타석 이벤트</h6>
            <div class="row g-3 mb-4">
                <div class="col-4"><label for="rbi" class="form-label">타점 (RBI)</label><input type="number" class="form-control text-center" id="rbi" v-model.number="form.rbi" min="0"></div>
                <div class="col-4"><label for="bb" class="form-label">볼넷 (BB)</label><input type="number" class="form-control text-center" id="bb" v-model.number="form.bb" min="0"></div>
                <div class="col-4"><label for="hbp" class="form-label">사구 (HBP)</label><input type="number" class="form-control text-center" id="hbp" v-model.number="form.hbp" min="0"></div>
            </div>
            
            <h6 class="text-secondary mt-3">아웃 종류</h6>
            <div class="row g-3 mb-4">
                <div class="col-4"><label for="so" class="form-label">삼진 (SO)</label><input type="number" class="form-control text-center" id="so" v-model.number="form.so" min="0"></div>
                <div class="col-4"><label for="groundout" class="form-label">땅볼 아웃 (GO)</label><input type="number" class="form-control text-center" id="groundout" v-model.number="form.groundout" min="0"></div>
                <div class="col-4"><label for="flyout" class="form-label">뜬공 아웃 (FO)</label><input type="number" class="form-control text-center" id="flyout" v-model.number="form.flyout" min="0"></div>
                
                <div class="col-12"><label for="sf" class="form-label">희생 플라이 (SF)</label><input type="number" class="form-control text-center" id="sf" v-model.number="form.sf" min="0"></div>
                <div class="col-12"><label for="gdp" class="form-label">병살타 (GDP)</label><input type="number" class="form-control text-center" id="gdp" v-model.number="form.gdp" min="0"></div>
            </div>
        </div>

        <div v-if="form.gameType === 'Pitcher' || form.gameType === 'Both'">
            <h5 class="mb-3 text-primary">나의 투수 기록</h5>
            <div class="row g-3 mb-4">
                
                <div class="col-sm-6">
                    <label for="ip" class="form-label">이닝 수 (IP)</label>
                    <input type="number" class="form-control form-control-lg text-center" id="ip" v-model.number="form.ip" min="0" step="0.1" required>
                </div>
                <div class="col-sm-6">
                    <label for="er" class="form-label">자책점 (ER)</label>
                    <input type="number" class="form-control form-control-lg text-center" id="er" v-model.number="form.er" min="0">
                </div>
                
                <div class="col-sm-6">
                    <label for="pitcherSO" class="form-label">탈삼진 (K)</label>
                    <input type="number" class="form-control text-center" id="pitcherSO" v-model.number="form.pitcherSO" min="0">
                </div>
                <div class="col-sm-6">
                    <label for="pitcherBB" class="form-label">볼넷 (BB)</label><input type="number" class="form-control text-center" id="pitcherBB" v-model.number="form.pitcherBB" min="0">
                </div>
                
                <div class="col-12 mt-3">
                    <div class="form-check form-switch form-check-inline form-check-lg">
                        <input class="form-check-input" type="checkbox" role="switch" id="isCompleteGame" v-model="form.isCompleteGame">
                        <label class="form-check-label" for="isCompleteGame">완투 (CG) 기록</label>
                    </div>
                </div>

            </div>
        </div>

        <button 
          type="submit" 
          class="btn btn-lg w-100 mt-4 shadow-sm"
          :class="isEditMode ? 'btn-warning' : 'btn-success'"
          data-bs-dismiss="modal" 
        >
          <i class="bi bi-check-circle me-2"></i> {{ isEditMode ? '수정 내용 저장' : '기록 저장하기' }}
        </button>
        <button type="button" class="btn btn-outline-secondary w-100 mt-2" data-bs-dismiss="modal">
          취소
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps, computed } from 'vue';

const props = defineProps({
  recordToEdit: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['save', 'update']);

const defaultForm = {
  id: null,
  date: new Date().toISOString().substring(0, 10),
  opponent: '',
  result: '',
  gameType: 'Batter', 
  
  single: 0, double: 0, triple: 0, hr: 0, rbi: 0, 
  bb: 0, so: 0, hbp: 0, sf: 0, gdp: 0, 
  groundout: 0, flyout: 0,
  
  ip: 0, er: 0, pitcherSO: 0, pitcherBB: 0, isCompleteGame: false,
};

const form = ref({ ...defaultForm });
const isEditMode = computed(() => !!props.recordToEdit);

watch(() => props.recordToEdit, (newRecord) => {
    if (newRecord) {
        form.value = { ...defaultForm, ...newRecord };
    } else {
        form.value = { ...defaultForm };
        form.value.date = new Date().toISOString().substring(0, 10);
    }
}, { immediate: true });

const submitRecord = () => {
  if (isEditMode.value) {
    emit('update', { ...form.value });
  } else {
    emit('save', { ...form.value });
  }
};
</script>

<style scoped>
.btn-group .btn-lg {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
}
.form-control-lg {
    font-size: 1.25rem;
    height: calc(2.5rem + 1rem);
}
</style>