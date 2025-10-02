const tab = document.querySelector('.tabmnu');
const tabbtn = document.querySelectorAll('.tabmnu > .tabbtn');

// 각 탭 메뉴 클릭시
tabbtn.forEach(btn => {
  btn.addEventListener('click', () => {
    // console.log('Check Tab'); -> 하나씩 클릭여부 확인 완료

    // 이전(기존) 탭에 적용 클래스 삭제, 클릭한 탭에 클래스 적용
    tabbtn.forEach(tb => tb.classList.remove('tabact')); // 제거X
    btn.classList.add('tabact');

    // 렌더링
    const tagText = btn.textContent.trim();
    // textContent : script 및 style 요소 포함 모든 요소 콘텐츠 가져옴. [출처: mdn]
    // trim() : 원래 문자열 양쪽 끝의 공백 제거하여 새 문자열 반환  [출처: mdn]
    renderList(tagText); // list.js와 연결하여 실행
  });
});

// 포트폴리오 홈페이지 JS 파일 참고 수정 (클래스 삭제)
// 렌더링 하기(js 분리 작성) : GPT 참고