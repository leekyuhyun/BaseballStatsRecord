<template>
  <div
    class="modal fade"
    id="profileEditModal"
    tabindex="-1"
    aria-labelledby="profileEditModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="profileEditModalLabel">✍️ 프로필 수정</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="saveProfile">
          <div class="modal-body">
            <div class="mb-3">
              <label for="playerName" class="form-label">이름</label>
              <input
                type="text"
                class="form-control"
                id="playerName"
                v-model="editProfile.name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="playerNumber" class="form-label">등번호</label>
              <input
                type="text"
                class="form-control"
                id="playerNumber"
                v-model="editProfile.number"
              />
            </div>
            <div class="mb-3">
              <label for="playerTeam" class="form-label">소속 팀</label>
              <input
                type="text"
                class="form-control"
                id="playerTeam"
                v-model="editProfile.team"
              />
            </div>

            <hr class="my-4" />

            <div class="row g-3">
              <div class="col-md-4">
                <label for="position" class="form-label">포지션 (POS)</label>
                <select
                  class="form-select"
                  id="position"
                  v-model="editProfile.position"
                >
                  <option value="P">P (투수)</option>
                  <option value="C">C (포수)</option>
                  <option value="1B">1B (1루수)</option>
                  <option value="2B">2B (2루수)</option>
                  <option value="3B">3B (3루수)</option>
                  <option value="SS">SS (유격수)</option>
                  <option value="LF">LF (좌익수)</option>
                  <option value="CF">CF (중견수)</option>
                  <option value="RF">RF (우익수)</option>
                  <option value="DH">DH (지명타자)</option>
                  <option value="UTL">UTL (유틸리티)</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="throwingHand" class="form-label"
                  >던지는 손 (Throw)</label
                >
                <select
                  class="form-select"
                  id="throwingHand"
                  v-model="editProfile.throwingHand"
                >
                  <option value="R">R (우투)</option>
                  <option value="L">L (좌투)</option>
                  <option value="S">S (양투)</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="battingSide" class="form-label"
                  >치는 방향 (Bat)</label
                >
                <select
                  class="form-select"
                  id="battingSide"
                  v-model="editProfile.battingSide"
                >
                  <option value="R">R (우타)</option>
                  <option value="L">L (좌타)</option>
                  <option value="S">S (양타)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              닫기
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRecordsStore } from "../../stores/records";

const recordsStore = useRecordsStore();

// Pinia 상태를 복사하여 모달 내에서 수정할 로컬 상태
const editProfile = reactive({
  name: recordsStore.profile.name,
  number: recordsStore.profile.number,
  team: recordsStore.profile.team,
  // 👈 새 필드 초기화
  position: recordsStore.profile.position,
  throwingHand: recordsStore.profile.throwingHand,
  battingSide: recordsStore.profile.battingSide,
});

// Pinia 상태가 변경될 때마다 로컬 상태를 동기화
watch(
  () => recordsStore.profile,
  (newProfile) => {
    editProfile.name = newProfile.name;
    editProfile.number = newProfile.number;
    editProfile.team = newProfile.team;
    // 👈 새 필드 동기화
    editProfile.position = newProfile.position;
    editProfile.throwingHand = newProfile.throwingHand;
    editProfile.battingSide = newProfile.battingSide;
  },
  { deep: true, immediate: true }
);

const saveProfile = () => {
  // Pinia Action 호출하여 프로필 업데이트
  recordsStore.setProfile({
    name: editProfile.name,
    number: editProfile.number,
    team: editProfile.team,
    // 👈 새 필드 저장
    position: editProfile.position,
    throwingHand: editProfile.throwingHand,
    battingSide: editProfile.battingSide,
  });
};
</script>
