<template>
  <h2 class="mb-4">📊 내 성적: 세세한 기록 분석</h2>
  <RecordSummary :records="allRecords" />
</template>

<script setup>
import { useRecords } from "../composables/useRecords";
import RecordSummary from "../components/RecordSummary.vue";

const { allRecords } = useRecords();
</script>
