//PostListItem : 글의 제목영역(제목만 표시함)
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:calc(100% - 35px);
    padding: 16px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:1px solid gray;
    border-radius:5px;
    cursor:pointer;
    background:yellow;
    :hover{
        background:lightgray;
    }
`
// => div 태그에 추가 선택자 사용
const TitleText = styled.p`
    font-size:20px;
    font-weight:500;
`;

// 컴포넌트의 상위 매개변수로 post,onClick
function PostListItem(props){
    const {post,onClick}=props;
    return(
        <Wrapper onClick={onClick}>
            <TitleText>
                {post.title}
                {/* =>props로 받은 객체 들어있는 title 문자열을 표시함 */}
            </TitleText>
        </Wrapper>
    );
}
export default PostListItem;