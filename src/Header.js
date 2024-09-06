import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding:24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`;
const HeaderUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`;
const HeaderButton = styled(Button)`
    padding: 0;
    mergin-bottom: 4px;
`

export class Header extends React.Component{
    static contextType = ThemeContext;
    render(){
        const {Tab,setTab} = this.props;
        const [,toggleTheme] = this.context;
        return(
            <Container>
                <HeaderUl>
                    <HeaderLi focused={Tab === 'list'} onClick={()=>setTab('list')}>リスト</HeaderLi>
                    <HeaderLi focused={Tab === 'form'} onClick={()=>setTab('form')}>フォーム</HeaderLi>
                </HeaderUl>
                <HeaderButton onClick={toggleTheme}>テーマ変更</HeaderButton>
            </Container>
        )
    }
}