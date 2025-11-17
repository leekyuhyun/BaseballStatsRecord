<template>
  <div class="card shadow-lg mb-5 border-0 rounded-3">
    <div
      class="card-header border-0"
      :class="isEditMode ? 'bg-warning text-dark' : 'bg-primary text-white'"
    >
      <h4 class="mb-0">
        {{ isEditMode ? "✍️ 기록 수정" : "➕ 새 경기 기록 입력" }}
      </h4>
    </div>
    <div class="card-body">
      <form @submit.prevent="submitRecord">
        <h5 class="mb-3 text-secondary border-bottom pb-1">경기 참여 형태</h5>
        <div class="btn-group w-100 mb-4" role="group">
          <input
            type="radio"
            class="btn-check"
            id="typeBatter"
            v-model="form.gameType"
            value="Batter"
          />
          <label class="btn btn-outline-secondary btn-lg" for="typeBatter"
            >타자만</label
          >

          <input
            type="radio"
            class="btn-check"
            id="typePitcher"
            v-model="form.gameType"
            value="Pitcher"
          />
          <label class="btn btn-outline-secondary btn-lg" for="typePitcher"
            >투수만</label
          >

          <input
            type="radio"
            class="btn-check"
            id="typeBoth"
            v-model="form.gameType"
            value="Both"
          />
          <label class="btn btn-outline-secondary btn-lg" for="typeBoth"
            >투수 & 타자</label
          >
        </div>

        <h5 class="mb-3 text-secondary border-bottom pb-1">기본 정보</h5>
        <div v-if="form.gameType === 'Batter' || form.gameType === 'Both'">
          <h5 class="mb-3 text-secondary border-bottom pb-1 mt-4">
            나의 타격 기록 (이벤트 수)
          </h5>
        </div>

        <div v-if="form.gameType === 'Pitcher' || form.gameType === 'Both'">
          <h5 class="mb-3 text-secondary border-bottom pb-1 mt-4">
            나의 투수 기록
          </h5>
        </div>

        <button
          type="submit"
          class="btn btn-lg w-100 mt-4 shadow"
          :class="isEditMode ? 'btn-warning' : 'btn-primary'"
        >
          <i class="bi bi-check-circle me-2"></i>
          {{ isEditMode ? "수정 내용 저장" : "기록 저장하기" }}
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary w-100 mt-2"
          @click="closeModal"
        >
          취소
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useModal } from "../composables/useModal";
import { useRecords } from "../composables/useRecords";

// useRecords에서 상태와 함수를 가져옵니다.
const { recordToEdit, handleSaveRecord, handleUpdateRecord } = useRecords();
const { closeModal } = useModal();

// local form state
const defaultForm = {
  id: null,
  date: new Date().toISOString().substring(0, 10),
  opponent: "",
  result: "",
  gameType: "Batter",
  single: 0,
  double: 0,
  triple: 0,
  hr: 0,
  rbi: 0,
  bb: 0,
  so: 0,
  hbp: 0,
  sf: 0,
  gdp: 0,
  groundout: 0,
  flyout: 0,
  ip: 0,
  er: 0,
  pitcherSO: 0,
  pitcherBB: 0,
  isCompleteGame: false,
};

const form = ref({ ...defaultForm });
const isEditMode = computed(() => !!recordToEdit.value);

// recordToEdit 상태를 직접 감시하여 폼 데이터 업데이트
watch(
  recordToEdit,
  (newRecord) => {
    if (newRecord) {
      form.value = { ...defaultForm, ...newRecord };
    } else {
      form.value = { ...defaultForm };
      form.value.date = new Date().toISOString().substring(0, 10);
    }
  },
  { immediate: true }
);

const submitRecord = () => {
  if (isEditMode.value) {
    handleUpdateRecord({ ...form.value });
  } else {
    handleSaveRecord({ ...form.value });
  }

  closeModal(); // 저장 완료 후 모달 닫기
};
</script>

<style scoped>
.btn-group .btn-lg {
  font-size: 1.1rem;
  padding: 0.7rem 1rem;
  border-radius: 8px;
}
.btn-check:checked + .btn-outline-secondary {
  background-color: var(--bs-primary);
  color: white;
  border-color: var(--bs-primary);
}
.form-control-lg {
  height: 3.5rem; /* 터치 영역 크게 유지 */
}
.card-header {
  border-bottom: 1px solid #eee;
}
</style>
