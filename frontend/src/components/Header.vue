<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm border-bottom"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand text-dark fw-bold" to="/">
        <i class="bi bi-baseball me-2"></i> 내 야구 기록장
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/stats">
              내 성적 (세세한 기록)
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/games">
              경기 목록 (전체 요약)
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/glossary">
              야구 용어정리
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// router-link가 active 클래스를 .router-link-active로 자동 관리합니다.
</script>

<style scoped>
.router-link-active {
  font-weight: bold !important;
  color: var(--bs-primary) !important; /* 액티브 색상 변경 */
  border-bottom: 2px solid var(--bs-primary);
}
</style>
