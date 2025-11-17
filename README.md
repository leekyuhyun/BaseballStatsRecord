# ⚾ Kyulee Baseball Record App

개인 사회인 야구 기록을 효율적으로 관리하고, 고급 세부 통계를 실시간으로 계산해주는 웹 애플리케이션입니다. **Vue 3, Pinia, Bootstrap**을 사용하여 현대적이고 반응성이 뛰어난 UI를 제공하며, Local Storage를 통해 데이터를 영구 저장합니다.

## 🚀 기술 스택 (Tech Stack)

![Vue](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFDA62?style=for-the-badge&logo=pinia&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ 주요 기능 (Features) - 핵심 요약

- **💾 데이터 관리 및 영속성:** Pinia Persisted State를 통해 브라우저 **Local Storage에 모든 기록이 영구 저장**됩니다. 또한, **포지션 및 투/타 방향** 등 상세 프로필 정보 관리가 가능합니다.
- **📝 기록 입력 자동화:** 타자/투수 기록 분리 입력과 함께, 타석 결과를 기반으로 **타석(PA) 및 타수(AB)가 자동 계산**되어 입력 편의성을 극대화했습니다.
- **📊 프로급 통계 분석:** AVG, OPS, ERA 등 기본 지표 외에 **ISO, K/9, K/BB** 등 **프로 수준의 세부 비율 지표**를 실시간으로 계산하여 제공합니다.
- **📱 직관적 시각화:**
  - **통계 종합표**는 **가로 스크롤**을 지원하는 고밀도 테이블로 모바일 가독성을 최적화했습니다.
  - **경기 상세 보기**는 원본 JSON 대신 **가운데 정렬된 표 형식**으로 정리되어 쉽게 확인 가능합니다.
  - **야구 용어 사전**을 내장하여 기록 이해를 돕습니다.

---

## 🎯 추후 개발 계획 (Future Plans)

이 애플리케이션은 **개인 기록 관리**를 넘어 **팀 단위**에서 활용될 수 있는 서비스로 발전할 예정입니다.

- **팀 단위 계정 및 선수 관리 시스템 도입:** 여러 선수의 기록을 한 번에 관리하고 집계할 수 있는 기능을 추가합니다.
- **백엔드 API 및 데이터베이스 연동:** Local Storage의 한계를 극복하고 대규모 데이터를 저장할 수 있도록 합니다.
