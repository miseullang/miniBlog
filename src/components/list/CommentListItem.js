import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:calc(100% - 35px);
    padding: 8px 16px;
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
const ContentText = styled.p`
    font-size:16px;
    white-space:pre-wrap;
`;
// white-space:pre-wrap;
// => 원본 텍스트를 그대로 표현
// => 줄바꿈 인식

// 컴포넌트의 상위 매개변수로 comment
function CommentListItem(props){
    const {comment}=props;
    // => 사용자가 작성한 댓글 내용이 보이는 영역
    // => 글을 클릭할 필요가 없어서 클릭 뺌
    return(
        <Wrapper>
            <ContentText>
                {comment.content}
                {/* =>props로 받은 객체 들어있는 title 문자열을 표시함 */}
            </ContentText>
        </Wrapper>
    );
}
export default CommentListItem;