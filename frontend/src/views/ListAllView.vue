<template>
    <GameList 
        :games="allRecords" 
        :is-summary-view="false"
        @edit-game="openEditModal" 
        @delete-game="handleDeleteGame" 
    />
</template>

<script setup>
// Composables Imports
import { useRecords } from '../composables/useRecords';
import { useModal } from '../composables/useModal';

// Components Imports
import GameList from '../components/GameList.vue';

// Records Hook
const { allRecords, handleDeleteGame } = useRecords();
const { openEditModal } = useModal();
</script>