import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const LoadDiv = styled.div`
    height: 100%;
    padding :36px;
    color: ${({theme}) => theme.color};
    background-color: ${({theme})=> theme.backgroundColor};
`
export const withLoading = (WrappedComponent,fetchData)=> {               //higher-order component あまりわからない
    return()=>{
        const [data,setdata] = useState(null);
        const[theme] = useContext(ThemeContext);
        useEffect(()=>{
            fetch();
        },[])
        const fetch = async() =>{
            const data = await fetchData();
            setdata(data);
        }
        const Loading = (
            <LoadDiv theme={theme}>ロード中...</LoadDiv>
        )
        return data ? <WrappedComponent data = {data}/> : Loading;
    }
}