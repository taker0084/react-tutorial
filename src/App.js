import { useContext,  useState } from 'react';
import styled from 'styled-components';                  //styled-cssによるcss表現
import { List } from './List';
import { Form } from './Form';
import { Header } from './Header';
import { ThemeContext } from './contexts/ThemeContext';

const Container = styled.div`
  height: 100%;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.backgroundColor};
`

function App ({ data }) {         //クラスコンポーネント
  const [Tab,setTab] = useState('list');
  const [langs,setlangs] = useState(data)
  const [theme] = useContext(ThemeContext);
  
  const addLang = (lang) =>{
    setTab('list');
    setlangs([...langs,lang]);
  }
  return (
    <Container theme = {theme}>
      <Header Tab = {Tab} setTab = {setTab}/>
      {
        Tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </Container>
  );
}

export default App;