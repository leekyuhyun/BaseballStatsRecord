<template>
    <div class="modal fade" id="gameFormModal" tabindex="-1" aria-labelledby="gameFormModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="gameFormModalLabel">
                {{ recordToEdit ? '기록 수정' : '새 기록 입력' }}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <GameForm />
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
// Modal 제목을 위해 useModal의 상태를 가져옵니다.
import { useModal } from '../composables/useModal';
import GameForm from './GameForm.vue';

const { recordToEdit } = useModal();
</script>