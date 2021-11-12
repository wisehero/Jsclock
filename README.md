# Javascript Clock
바닐라 자바스크립트를 사용하여 현재 시간을 알려줌과 동시에 To-do list 기능을 구현 했습니다.
css는 구현되어 있지 않습니다.

이 프로젝트는 아래의 동영상 강의를 보고 참고하여 제작했습니다.
[YouTube](https://www.youtube.com/watch?v=wUHncG3VwPw&list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)

---

## About .js File

### bg.js

/images 폴더에 있는 여러 개의 사진 중 랜덤으로 하나를 뽑아 background로 지정하는 파일

### clock.js

Date 모듈을 사용하여 시, 분, 초를 가져와서 24시간 형식에 맞도록 표현했습니다. 삼항 연산자를 여러 개로 연결하는 것이 조건식을 여러 개 넣는 것보다 깔끔하다고 판단하여 삼항 연산자로 표현했습니다.

### greeting.js

폼, 상수, event.preventDefault(), classList, LocalStroage등을 
활용하여 사용자로부터 받은 입력과 입력 정보 보관 여부를 처리하는 파일

### todo.js

Array에 To-do를 저장, 삭제하는 로직을 구현한 파일

### whether.js

openwhethermap API를 활용하여 사용자의 위치 정보와 날씨 정보를 
화면에 표시해주는 파일.

---
## What I learned

- 이벤트 등록 및 처리, 콜백 함수의 동작 방식
- Local Storage에 대한 이해
- 외부 라이브러리 사용 경험
