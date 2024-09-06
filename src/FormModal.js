import React from "react"
import styled from "styled-components"
import {Modal} from "./components/modal"
import Button from "./components/Button"
import { ThemeContext, THEMES } from "./contexts/ThemeContext"

const Container = styled.div`
    width : 240px;
    border-radius: 10px;
    padding: 24px 36px;
    color: ${({theme}) => theme.color};
    background-color: ${({theme})=> theme.backgroundColor};
    border : ${({theme}) => theme===THEMES.dark ? '2px solid white': 'none'};
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    mergin-top: 24px;
`
export class FormModal extends React.Component {
    static contextType = ThemeContext;
    render(){
        const{cancel,confirm} = this.props;
        const [theme] = this.context;
        return(
            <Modal>
                <Container theme = {theme}>
                    <div>本当に作成しますか?</div>
                    <ButtonWrapper>
                        <Button onClick={cancel}>Cancel</Button>
                        <Button onClick={confirm}>OK</Button>
                    </ButtonWrapper>
                </Container>
            </Modal>
        )
    }
}