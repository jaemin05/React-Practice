import React from "react"; //리액트 컴포넌트를 만들 땐 불러와줘야 한다.

function Hello({name, color, isSpecial}) {
   return <div style={{color}}>
    { isSpecial && <p>자기소개</p>}
    안녕하십니까 {name}
    </div>
}

//기본값 설정하기
Hello.defaultProps = {
    name : '알 수 없음',
    color : 'black'
}

export default Hello; //Hello 라는 컴포넌트를 내보내겠다는 의미입니다.