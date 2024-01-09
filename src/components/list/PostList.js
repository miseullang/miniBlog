// PostListItem의 상위 컴포넌트
import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    :not(:last-child){
        margin-bottom:16px;
    }
`;
// not(선택자) => 선택자가 아니면
// 태그의 선택자 추가

// 컴포넌트의 상위 매개변수로 posts,onClickItem
function PostList(props){
    // =>PostList컴포넌트의 props로 받은 posts 안에는 post객체를 넘겨받음
    // => posts의 배열값으로 인식 map함수를 활용해서
    // post 객체에 포함되는 PostListItem컴포넌트를 읽어옴
    const {posts,onClickItem}=props;
    return(
        <div>
        <Wrapper>
            {/* ↓ 뒷부분을 안 읽어와서 강제로 읽도록 만듦 */}
            {posts&&posts.map((post,index)=>{
                // => map함수를 사용하는 이유 :
                // 글의 개수만큼 PostListItem 컴포넌트를 만들기 위해 사용함
                return(
                    <PostListItem key={post.id} post={post} onClick={
                        ()=>{
                            onClickItem(post);
                        }
                    }></PostListItem>
                );
            })}
        </Wrapper>
        </div>
    );
}
export default PostList;