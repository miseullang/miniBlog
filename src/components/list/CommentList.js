// CommentListItem의 상위 컴포넌트
import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    :not(:last-child){
        margin-bottom:16px;
    }
`;


// 컴포넌트의 상위 매개변수로 comments
function CommentList(props){
    // =>PostList컴포넌트의 props로 받은 posts 안에는 post객체를 넘겨받음
    // => posts의 배열값으로 인식 map함수를 활용해서
    // post 객체에 포함되는 PostListItem컴포넌트를 읽어옴
    const {comments}=props;
    return(
        <Wrapper>
            {comments&&comments.map((comment,index)=>{
                return(
                    <CommentListItem key={comment.id} comment={comment} />
                )
            })}
        </Wrapper>
    );
}
export default CommentList;