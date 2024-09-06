import styled from "styled-components";
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const LoadDiv = styled.div`
    height: 100%;
    padding :36px;
    color: ${({theme}) => theme.color};
    background-color: ${({theme})=> theme.backgroundColor};
`
export const withLoading = (WrappedComponent,fetchData)=> {               //higher-order component あまりわからない
    class HOC extends React.Component{
        static contextType = ThemeContext;
        constructor(props){
            super(props);
            this.state={data:null}
        }
        componentDidMount(){
            this.fetch();
        }
        async fetch(){
            const data = await fetchData();                               //データが来るまで待つ(1000ms)
            this.setState({data});
        }
        render(){
            const {data} = this.state;
            const [theme] = this.context;
            const Loading = (
                <LoadDiv theme={theme}>ロード中...</LoadDiv>
            )
            return data ? <WrappedComponent data = {data}/> : Loading;
        }
    }
    return HOC;
}