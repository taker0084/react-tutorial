import React from "react";
import styled from "styled-components";

const HintContainer=styled.div`
    position: relative;
    display: inline-flex;
    mergin-left: 12px;
`
const HintInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #757575;
    width: 24px;
    height: 24px;
    cursor: pointer;
`
const PopupContainer = styled.div`
    position: absolute;
    left: 88%;
    bottom: 12px;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    width: 140px;
`
export class Hint extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ShowPopup: false
        }
        this.ref = React.createRef();
    }
    componentDidUpdate(){
        if(this.ref.current) this.ref.current.focus();
    }
    render(){
        const {ShowPopup} = this.state;
        return(
            <HintContainer>
                <HintInner onClick={()=>this.setState({ShowPopup:true})}>
                    ?
                </HintInner>
                {
                    ShowPopup &&
                    <PopupContainer ref={this.ref} onBlur={()=>this.setState({ShowPopup:false})} tabIndex={0}>
                        言語の名前です
                    </PopupContainer>
                }
            </HintContainer>
        )
    }
}