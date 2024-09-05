import React from 'react';
import styled from 'styled-components';                  //styled-cssによるcss表現
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from './const/languages';
import { withLoading } from './hoc/withLoading';
import { Modal } from './components/modal';

const Header = styled.header`
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

class App extends React.Component {         //クラスコンポーネント
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
    
    return (
      <div>
        <Header>
          <HeaderUl>
            <HeaderLi focused={Tab === 'list'} onClick={()=>this.setState({Tab: 'list'})}>リスト</HeaderLi>
            <HeaderLi focused={Tab === 'form'} onClick={()=>this.setState({Tab: 'form'})}>フォーム</HeaderLi>
          </HeaderUl>
        </Header>
        {
          Tab === 'list' ? <List langs={langs}/> : <Form onAddLang={(lang)=>this.addLang(lang)}/>
        }
      </div>
    );
  }
}

export default withLoading(App,getLanguages);
