<template>
  <div class="game-list">
    <h3 v-if="!isSummaryView" class="mb-3">🗓️ 나의 전체 경기 기록 목록</h3>
    
    <div 
      v-for="game in games" 
      :key="game.id" 
      class="card mb-3 shadow-sm" 
    >
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <span class="badge rounded-pill me-2" :class="getGameResultClass(game.result)">
              {{ game.result }}
            </span>
            <h5 class="card-title d-inline-block mb-0">{{ game.date }}</h5>
            <p class="card-subtitle text-muted small mt-1 mb-0">{{ game.opponent }}전 ({{ game.gameType }})</p>
          </div>
          
          <div class="text-end d-flex flex-column align-items-end">
            <h4 class="mb-1 fw-bold">
                {{ game.rbi ? `${game.rbi} RBI` : (game.ip ? `${formatInnings(game.ip)} IP` : 'No Stat') }}
            </h4>
            <p class="small text-muted mb-2">{{ game.gameType }}</p>
            
            <div v-if="!isSummaryView" class="btn-group btn-group-sm" role="group">
              <button 
                type="button" 
                class="btn btn-outline-primary"
                @click="$emit('editGame', game.id)"
              >
                수정
              </button>
              <button 
                type="button" 
                class="btn btn-outline-danger"
                @click="confirmDelete(game.id)"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
        
        <hr class="my-2">
        <div class="d-flex justify-content-around small text-center">
            <div><span class="fw-bold">{{ game.hr || 0 }}</span><br>HR</div>
            <div><span class="fw-bold">{{ game.bb || 0 }}</span><br>BB</div>
            <div><span class="fw-bold">{{ game.so || 0 }}</span><br>SO</div>
            <div v-if="game.ip"><div><span class="fw-bold">{{ game.er || 0 }}</span><br>ER</div></div>
        </div>
      </div>
    </div>
    
    <div v-if="games.length === 0" class="alert alert-info text-center">
      아직 등록된 경기 기록이 없습니다.
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { formatInnings } from '../utils/statsCalculator';

const props = defineProps({
  games: {
    type: Array,
    required: true
  },
  isSummaryView: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['editGame', 'deleteGame']);

const getGameResultClass = (result) => {
  switch (result) {
    case '승': return 'bg-success';
    case '패': return 'bg-danger';
    case '무': return 'bg-warning text-dark';
    default: return 'bg-secondary';
  }
};

const confirmDelete = (gameId) => {
  if (confirm('정말로 이 경기 기록을 삭제하시겠습니까?')) {
    emit('deleteGame', gameId);
  }
};
</script>

<style scoped>
/* style은 App.vue에서 처리 */
</style>