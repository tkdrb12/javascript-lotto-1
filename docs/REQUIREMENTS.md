## ✔ 기능 요구 사항

- 로또 구입 금액 입력
  - 로또 구입 금액이 1000원 미만일 때(1000원 단위가 아닐시 오류)
  - 입력 받은 데이터가 숫자가 아닐 때
- 금액 만큼 로또 발행
- 구입한 로또 번호 오름차순 정렬
- 구입한 로또 번호 출력
- 당첨 번호 입력
  - 입력한 당첨 번호가 1에서 45사이의 숫자가 아닐 때
  - 입력한 당첨 번호 개수가 6개가 아닐 때
- 보너스 번호 입력
  - 입력한 당첨 번호가 1에서 45사이의 숫자가 아닐 때
  - 입력한 당첨 번호 개수가 1개가 아닐 때
- 당첨 내역 계산
- 당첨 통계 출력
- 당첨 수익률 계산
- 당첨 수익률 출력
- 재시작 여부 입력
  - 입력한 문자가 y또는 n이 아닐 때 -> 소문자만 입력 가능하게
- 재시작 여부에 따른 프로그램 진행/종료

## ✔ 프로그래밍 요구사항

- 변수 선언시 const 만 사용
- 함수(또는 메서드)의 들여쓰기 depth는 1단계까지만 허용
- 함수의 매개변수는 2개 이하로 사용
- 함수에서 부수 효과를 분리하고, 가능한 순수 함수를 많이 활용
- 3개 이상의 인스턴스 변수를 가진 클래스를 쓰지 않음
- 모든 기능을 TDD로 구현하는 것을 시도하여, 테스트 할 수 있는 도메인 로직에 대해서는 모두 단위 테스트가 존재해야 함. (단, UI 로직은 제외)