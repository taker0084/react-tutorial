import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const Container = styled.div`
  padding: 12px 64px ;
`;

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 3px;
  border: solid 1px black;
  padding: 4px 8px;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

const FormButton = styled(Button)`
  width: 120px;
`
export class Form extends React.Component {
    constructor(props){         //テキスト(登録する言語)を管理するstate
        super(props);
        this.state = {
            text: ''
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        this.props.onAddLang(this.state.text);   //親コンポーネントの関数を呼び出す
    }
    render() {
        const {text} = this.state;
        return (
            
            <Container>
                <h4>新しい言語の追加</h4>
                <form onSubmit={(e)=>this.submitForm(e)}>
                    <div>
                        <Label>言語</Label>
                        <Input type="text" value={text} onChange={(e) => this.setState({text: e.target.value})}/>
                    </div>
                    <ButtonContainer>   
                        <FormButton>追加</FormButton>      
                    </ButtonContainer>
                </form>
            </Container>
    )
    }
}