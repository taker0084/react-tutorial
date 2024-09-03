import React from 'react';
import { List } from './List';
import { Form } from './Form';

class App extends React.Component {         //クラスコンポーネント
  constructor(props) {                      //コンストラクタ
    super(props);
    this.state = {
        Tab: 'list'
    };
  }
  
  render() {
    const {Tab} = this.state;
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
          Tab === 'list' ? <List /> : <Form />
        }
      </div>
    );
  }
}

export default App;
