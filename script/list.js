const listwrap = document.querySelector('.list_wrapper');

// 태그 이름 -> 클래스 이름 매핑
const tagClassMap = {
  'js입문' : 'tag1',
  '인터랙티브' : 'tag2',
  '반응형' : 'tag3'
};

// tabmnu.js와 연결되는 함수 | 매개변수를 통한 진행
function renderList(filterTag) {
  listwrap.innerHTML = ''; // 초기화

  // 태그 필터에 따른 기능
  const filtered = filterTag === '전체'
  ? doitData
  : doitData.filter(item => item.tag === filterTag);

  // data 내용에 따라 추가되는 리스트 생성
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'list'; // 클래스 이름 정의

    // 태그에 따른 추가 클래스
    const TagClassColor = tagClassMap[item.tag] || ''; // 없을 경우 공란

    div.innerHTML = `
      <picture class="pic"><img src="./images/${item.img}" alt="${item.name}"></picture>
      <span class="tag ${TagClassColor}">${item.tag}</span>
      <h3 class="name">${item.name}</h3>
      <p class="cont">${item.memo}</p>
      <a href="${item.link}" title="${item.name}" class="link" target="_blank">홈페이지 이동</a>
    `;
    listwrap.appendChild(div);
  });
}

// 초기 표시
renderList('전체');

// GPT 참고하여 작성