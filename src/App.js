import { useState } from 'react';
import { List } from './List'; //忘れない

function App() {
  const[description, setDiscription] = useState('クリック前の表示');    //descriptionは変更前、setDiscriptionは変更後　useStateの引数は初期値
  const changeDescription = () => {
    setDiscription('クリック後の表示です');
  }
  return (
    <div>
      {description}
      <List title = "取り扱い言語一覧"/>                        {/*親コンポーネント(App.js)から子コンポーネント(List.js)にprops(今回でいうtitle)を渡す*/}
      <button onClick={changeDescription}>クリック</button>
    </div>
  );
}

export default App;
