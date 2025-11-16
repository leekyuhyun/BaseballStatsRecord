// src/composables/useModal.js

import { onMounted } from 'vue';
import { Modal } from 'bootstrap';
import { useRecords } from './useRecords';

export function useModal() {
    // Modal 제어에 필요한 함수를 useRecords에서 가져옴
    const { prepareEditMode, prepareNewRecordMode, recordToEdit } = useRecords();
    
    let gameFormModal = null;
    const modalId = 'gameFormModal';

    // Modal 인스턴스 초기화 (App.vue에서 Modal 구조가 렌더링 된 후)
    onMounted(() => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            // Bootstrap Modal 인스턴스를 Vue 생명주기에 맞춰 초기화
            gameFormModal = new Modal(modalElement); 
        }
    });

    const closeModal = () => {
        if (gameFormModal) {
            gameFormModal.hide();
        }
    };

    const openEditModal = (gameId) => {
        prepareEditMode(gameId);
        if (gameFormModal) {
            gameFormModal.show();
        }
    };
    
    const openNewRecordModal = () => {
        prepareNewRecordMode();
        if (gameFormModal) {
            gameFormModal.show();
        }
    };

    return {
        closeModal,
        openEditModal,
        openNewRecordModal,
        // GameFormModal에서 Modal 제목을 위해 recordToEdit 상태를 노출
        recordToEdit, 
    };
}