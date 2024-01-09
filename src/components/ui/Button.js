import React from "react";
import styled from "styled-components";

// const 삽입태그형식명(변수)=styled.태그명`
// css 속성명 : 속성값;
// color:${변수명};
// color:${변수명=>조건?참:거짓};
// color:${a=>dark? "black":"yellow"};
// `;

// const Title=styled.h1`
// font-size:40px;
// color:#ccc;
// text-align:center;
// `

// const But = styled.button`
// color:${props=>props.dark?"yellow":"dark"};
// background:${props=>props.dark?"black":"yellow"};
// `
// ;
// => button 태그에 스타일 지정하기

const But = styled.button`
padding:8px 16px;
font-size:17px;
border:1px solid gray
border-radius:8px;
cursor:pointer;
`

function Button(props){
    // 하위 컴포넌트
    // => 상위 컴포넌트의 props값을 할당 받아서 사용할 때의 정의 방법
    // const {props 변수명 삽입, props 변수명 삽입}=props;
    const {title,onClick}=props;

    return(
        // <div>
        //     {/* <Title>"먀"</Title> */}
        //     <But>기본</But>
        //     <But dark>변경</But>
        // </div>
        <div>
            <But onClick={onClick}>{title||"button"}</But>
            {/* => But 컴포넌트에서 props로 title이 버튼의 내용으로 표시되게 함
            => onClick은 But의 onClick에 넣어 이벤트를 상위 컴포넌트에서 받을 수 있도록 함
            => 표기법 중 (조건부 렌더링) => 조건에 따라서 보여지는 화면이 다를 때 표기하는 방법
            => 회원과 비회원의 화면 차이일 때 조건부 렌더링 많이 사용함

            function User(props){
                return <h1>회원입니다.</h1>
            }
            function Guest(props){
                return <h1>비회원입니다.</h1>
            }
            function PageV(props){
                const isLogin = props.isLogin;
                if(isLogin){
                    return <User/>
                }
                return <Guest/>
            }

            => 이렇게 쓰면 기니까 인라인 조건 표기법 사용
            인라인 조건 표기법
            1. 인라인 if
            {title 논리연산자(&&, ||) 결과값}
            && 참, 참 => 참값
            || 거짓, 거짓 => 거짓값
            => if가 실제로 삽입되는 것은 아님
            => 결과가 정해져 있는 논리연산에서 굳이 불필요한 연산을 하지 않도록 하기 위해 사용
            => true && ex => ex
            - 조건문이 참이면 ex가 결과값
            => false && ex => false
            - 조건문이 거짓이면 false가 결과값
            ||(or 연산자)
            => 항상 참일 때 사용함


            2. 인라인 if-else
            => {조건문?참:거짓}
            => 삼항연산자 표기로 작성

            */}
            
        </div>
    );
}
export default Button;