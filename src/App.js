import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { LANGUAGES } from './const/languages';

class App extends React.Component {         //クラスコンポーネント
  constructor(props) {                      //コンストラクタ
    super(props);
    this.state = {
      Tab: 'list',
      langs: LANGUAGES
    };
  }
  addLang = (lang) => {
    this.setState({
      Tab: 'list',
      langs: [...this.state.langs, lang]
    });
  }
  render() {
    const {Tab,langs} = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={()=>this.setState({Tab: 'list'})}>リスト</li>
            <li onClick={()=>this.setState({Tab: 'form'})}>フォーム</li>
          </ul>
        </header>
        <hr />
        {
          Tab === 'list' ? <List langs={langs}/> : <Form onAddLang={(lang)=>this.addLang(lang)}/>
        }
      </div>
    );
  }
}

export default App;
