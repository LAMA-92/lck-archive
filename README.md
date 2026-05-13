# 🏆 LCK Archive 2026: Data-Driven Analysis Platform

2026 LCK 스프링 시즌의 선수 퍼포먼스를 논리적이고 분석적으로 탐색하기 위한 React 기반 웹 시스템입니다. 단순한 커리어 나열이 아닌, **Oracle's Elixir**의 실제 경기 데이터를 기반으로 한 정량적 지표를 제공합니다.

---

## 1. 시스템 소개 (System Introduction)

본 프로젝트는 LCK 10개 팀의 최신 로스터와 선수별 세부 지표를 시각화하여 제공합니다. 사용자는 복잡한 데이터 속에서 핵심 지표를 직관적으로 파악할 수 있으며, 최적화된 리소스를 통해 쾌적한 UX를 경험할 수 있습니다.

### 📋 프로젝트 명세
- **Target Season**: 2026 LCK Spring (Rounds 1-2)
- **Philosophy**: "Realistic Perfectionism" — 불필요한 장식을 배제하고 데이터의 정확성과 시스템의 효율성에 집중합니다.
- **Tech Stack**:
    - **Frontend**: React (CRA), JavaScript (ES6+)
    - **Styling**: CSS3 (Flexbox/Grid, Keyframe Animations)
    - **Data**: CSV-based JSON Mapping

---

## 2. 주요 기능 (Key Features)

### 📊 데이터 기반 선수 분석 (Data-Driven Insights)
* **실시간 지표 매핑**: 2026 시즌 실제 기록(KDA, KP%, GD10, DPM)을 1:1 매핑하여 제공합니다.
* **특정 선수 하이라이트**: Diable 선수의 DPM 936 등 리그 최상위권 지표를 정밀하게 반영합니다.

### 🎨 인터랙티브 UI/UX (Interactive Interface)
* **팀 셀렉터**: LCK 10개 팀 로고(SVG)를 활용한 가로 정렬 배치 및 활성화 상태 시각화.
* **호버 프로필 시스템**: 선수 사진(WebP)에 마우스를 올리면 `Scale-up` 애니메이션과 함께 상세 지표 그리드가 하단에 노출됩니다.

### ⚡ 성능 최적화 (Resource Optimization)
* **포맷 최적화**: 로고는 무한 확대가 가능한 **SVG**를, 선수 사진은 고화질 저용량의 **WebP**를 사용하여 로딩 속도를 극대화했습니다.
* **컴포넌트 분리**: 데이터(`lckData.js`)와 로직(`App.js`)을 분리하여 유지보수성을 높였습니다.

---
