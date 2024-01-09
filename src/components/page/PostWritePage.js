import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";


const Wrapper = styled.div`
    padding:16px;
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Container = styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`

function PostWritePage(props){
    const navigate = useNavigate();
    const [title,setTitle]=useState(''); // 글의 제목을 위한 state
    const [content,setContent]=useState(''); // 글의 내용을 위한 state
    // => 실제로 사용하는 부분은 TextInput으로 동일하지만 제목, 내용은 각자 입력을 받아야 해서 2개의 useState 설정

    return(
        <Wrapper>
            <Container>
                <TextInput height={30} value={title} onChange={(event)=>{
                    setTitle(event.target.value);
                }}></TextInput>
                <TextInput height={500} value={content} onChange={(event)=>{
                    setContent(event.target.value);
                }}></TextInput>
                <Button title='글 작성하기' onClick={()=>{
                    navigate('/'); //원래 여기서 서버로 넘어가야 하지만, 우리는 서버 없으니까 메인으로 ㅇㅇ
                }}/>
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;