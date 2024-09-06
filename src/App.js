import React from 'react';
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

class App extends React.Component {         //クラスコンポーネント
  static contextType = ThemeContext;
  constructor(props) {                      //コンストラクタ
    super(props);
    this.state = {
      Tab: 'list',
      langs: props.data
    };
  }
  
  addLang (lang) {
    this.setState({
      Tab: 'list',
      langs: [...this.state.langs, lang]
    });
  }
  //useEffect(()=>{                          ファンクションコンポーネントの場合
    //  console.log('App.js:useEffect');     いつ動くのかを確認できる
    //  getLanguages().then((langs)=>this.setState({langs}))
    //  fetchLangages();
  //},[langs])

  //const fetchLangages = async () => {
    //  const languages = await getLanguages();
    //  this.setState({langs: languages});
  //}
  render() {
    const {Tab,langs} = this.state;
    const [theme] = this.context;
    return (
      <Container theme = {theme}>
        <Header Tab = {Tab} setTab = {(select)=> this.setState({Tab: select})}/>
        {
          Tab === 'list' ? <List langs={langs}/> : <Form onAddLang={(lang)=>this.addLang(lang)}/>
        }
      </Container>
    );
  }
}

export default App;