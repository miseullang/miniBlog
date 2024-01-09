import React from "react";
import { useNavigate } from "react-router-dom";
// 리액트에서 페이지간의 이동을 하기 위해 router dom 사용
// [페이지 이동 방법]
// 1. a태그
// - html에서의 기본 태그
// - import 할 필요 없이 사용함
// - 페이지 전체를 새로 불러오기 때문에 속도 저하 발생, 리액트에서는 잘 사용하지 않음
// - 리액트에서 외부 프로젝트와의 연결을 위해 사용함
// - a태그를 사용하면 useRef, useState 훅이라는 개념을 사용할 수 없음
// useRef, useState등에서 수정을 해둔 변수, 상태값을 유지할 수 없음
// 라우터 사용에 방해가 됨
// => 외부 프로젝트에만 주로 사용!

// 2. link
// react-router-dom에 포함된 기능
// - url에 영향을 주며 필요한 부분만 로드함
// - useRef, useState등을 유지하면서 속도 저하없이 화면의 전환 효과를 줄 수 있다
// - url도 필요한 부분만 건드려서 로드함
// - 클릭시 바로 이동하게 하기 위한 간단한 동작시 주로 사용함

// 3. useNavigate
// react-router-dom에 포함된 기능
// - url에 영향을 주며 필요한 부분만 로드함
// - useRef, useState등을 유지하면서 속도 저하없이 화면의 전환 효과를 줄 수 있다
// - url도 필요한 부분만 건드려서 로드함
// ** link와 차이점 **
// - 이동 후 추가적인 동작이 필요할 때 사용함
// - 특정 이벤트가 실행되었을 때 이동하거나, 추가적인 기능이 필요한 경우
// - 필요한 내용을 모두 채워야 이동을 하거나, 상세페이지열기를 위해서 상품의 정보를 추가로 로드할 때

// 클래스 컴포넌트에서는 '생명주기 함수' = 함수형 컴포넌트에서는 '훅'
// <클래스 컴포넌트의 생명주기 함수>
// => render함수
// - return 되는 html형식의 코드를 화면에 그려주는 함수
// - 화면 내용이 변경되어야 할 시점에 자동으로 호출
// constructor함수
// - 생명주기 함수에서 가장 먼저 실행되는 함수
// - 초기화 영역 작업
// - 최초 1회만 호출

// getDerrivedStateFromProps 함수
// - constructor함수에서 전달 받은 props를 state로 변경함
// - constructor함수 다음으로 호출
// - commponentDidMount함수
// - 작성된 함수들 중에 가장 마지막으로 실행
// - render함수가 코드를 화면에 그려준 후 실행됨

// shouldComponentUpdate함수
// - Component의 변경과정을 남기는 함수
// - 변경, props, state의 변경시 사용

// <함수형 컴포넌트의 훅>
// - 기존 존재하는 기능에 끼어들어서 같이 수행되는 형식 "꼽사리 끼는 함수"
// - 훅은 모든 함수명이 use로 시작함
// - 훅이 수행하는 기능에 따라 이름을 설정하게 되어 있음
// - useState는 함수형 컴포넌트에서 state를 사용하고 싶을 때 지정하는 훅

// <사용방법 예제>
// const [변수명,set함수명] = useState(초기값)
// function Counter(props){
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <p>총 {count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     )
// }

// => useEffect(이펙트함수, 의존성배열)
// - 사이드 이펙트 : 보통은 부작용(디버그)을 의미함
// - 개발자가 의도치 못한 코드가 실행되어 버그 발생시 나타나는 이펙트를 의미
// - 리액트에서 useEffect는 서버에서 데이터를 받아오거나 수동으로 Dom을 변경하는 것을 이펙트라고 정의함
// - 클래스 컴포넌트의 생명주기 함수들 중 commponentDidMount, componentDidUpdate, componentWillUnMount
// 세 개의 기능을 한번에 지정한 훅 명령
// - 의존성 배열은 생략 가능함
// - 이펙트가 의존하고 있는 배열값으로 배열 안에 변수 중 하나라도 변경이 되면 이펙트 함수가 실행됨
// - 생략시 컴포넌트가 업데이트 될 때마다 호출

// function Counter(props){
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         document.title=`총 ${count}번 클릭함`
//     })
//     // => 브라우저에서 제공한 API를 사용해서 document의 title을 업데이트함
//     // => document의 title은 브라우저에서 페이지를 열었을 때 창에 표시되는 문자열임(크롬 탭에 있는 제목)
//     return(
//         <div>
//             <p>총 {count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     )
// }



import styled from "styled-components";
import PostList from "../list/PostList";
// => 글 목록을 표시
import Button from "../ui/Button";
// => 글 작성 페이지로 이동
import data from '../../data.json';


const Wrapper = styled.div`
    padding:16px,
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Container = styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`

function MainPage(props){
    const navigate = useNavigate();
    return(
        <Wrapper>
            <Container>
                <Button title='글 작성하기' onClick={()=>{
                    navigate('/post-write');
                }}/>
                <PostList posts={data} onClickItem={(item)=>{
                    navigate(`/post/${item.id}`)
                }}/>
            </Container>
        </Wrapper>
    );
}

export default MainPage;