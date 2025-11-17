<template>
  <h2 class="mb-4">🗓️ 전체 경기 목록 요약</h2>
  <GameList
    :games="allRecords"
    :is-summary-view="false"
    @edit-game="openEditModal"
    @delete-game="handleDeleteGame"
  />
</template>

<script setup>
import { useRecords } from "../composables/useRecords";
import { useModal } from "../composables/useModal";
import GameList from "../components/GameList.vue";

const { allRecords, handleDeleteGame } = useRecords();
const { openEditModal } = useModal();
</script>
