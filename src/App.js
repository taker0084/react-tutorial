import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages,LANGUAGES } from './const/languages';

class App extends React.Component {         //クラスコンポーネント
  constructor(props) {                      //コンストラクタ
    super(props);
    this.state = {
      Tab: 'list',
      langs: []
    };
  }
  componentDidMount(){
    console.log('App.js:componentDidMount');
    this.fetchLangages();
  }
  async fetchLangages() {
    const langs = await getLanguages();
    this.setState({langs});
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
