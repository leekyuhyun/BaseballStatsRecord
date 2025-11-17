<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div class="container">
        <RouterLink class="navbar-brand fw-bold" to="/"
          >⚾ Kyulee Baseball Life Record</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/"
                >홈</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/games"
                >경기 목록</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/stats"
                >성적 요약</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/terms"
                >야구 용어</RouterLink
              >
            </li>
            <li class="nav-item ms-lg-3">
              <RouterLink
                class="nav-link btn btn-danger text-white fw-bold px-3"
                to="/record-input"
                >📝 기록 입력</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
// Note: Bootstrap JS (bundle)는 main.js에서 임포트되어야 토글 기능이 작동합니다.
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  color: #ffc107 !important; /* Warning color for emphasis */
}
.nav-link.active {
  border-bottom: 2px solid #ffc107;
}
</style>
