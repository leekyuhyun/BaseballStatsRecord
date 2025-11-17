# ⚾ Kyulee Baseball Record App

개인 사회인 야구 기록을 효율적으로 관리하고, 고급 세부 통계를 실시간으로 계산해주는 웹 애플리케이션입니다. **Vue 3, Pinia, Bootstrap**을 사용하여 현대적이고 반응성이 뛰어난 UI를 제공하며, Local Storage를 통해 데이터를 영구 저장합니다.

## 🚀 기술 스택 (Tech Stack)

![Vue](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFDA62?style=for-the-badge&logo=pinia&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ 주요 기능 (Features)

- **데이터 영속성 (Persistence):** Pinia Persisted State를 사용하여 모든 경기 기록과 프로필 정보가 브라우저 Local Storage에 저장되어 데이터가 유지됩니다. (Vercel 등 배포 환경에 최적화)
- **프로필 관리:** 이름, 등번호 외에 **포지션, 던지는 손, 치는 방향 (예: 우투좌타)** 등 상세 프로필 정보를 수정할 수 있습니다.
- **상세 기록 입력:**
  - 타자/투수 기록을 분리하여 입력합니다.
  - 타석 결과를 입력하면 **타석(PA)** 및 **타수(AB)**가 자동으로 계산됩니다.
- **고급 통계 분석:** AVG, OBP, SLG, OPS, ERA, WHIP 외에도 다음과 같은 **프로 수준의 세부 비율 지표**를 실시간으로 제공합니다:
  - **타자:** **ISO** (순수 장타율)
  - **투수:** **K/9** (9이닝당 삼진), **BB/9** (9이닝당 볼넷), **K/BB** (삼진/볼넷 비율)
- **통계 시각화:** 세부 성적 요약 뷰에서 모든 지표를 **작은 글씨 (`fs-7`) 및 가로 스크롤**(`table-responsive`)이 가능한 테이블로 깔끔하게 정리하여 표시합니다.
- **경기 상세 보기:** 목록에서 특정 경기를 선택하면 **JSON 대신**, 해당 경기에 입력된 타자/투수 성적을 **가운데 정렬된 표 형식**으로 보여줍니다.
- **야구 용어 사전:** 타자, 투수, 수비 관련 주요 용어 및 계산식을 정리하여 제공합니다.
