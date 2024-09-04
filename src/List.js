import React from 'react';
import { LANGUAGES } from './const/languages';

//useEffect(()=>{
//  console.log('List.js:useEffect');     いつ動くのかを確認できる
//  return()=>{
//    console.log('List.js:useEffect.unmount');
//  }
//})
export class List extends React.Component {   //親コンポーネントからの引数を受け取る
    componentWillUnmount(){
        console.log('List.js:Unmount');
    }
    render() {
        const {langs} = this.props;
        return (                         //return内に子コンポーネントの中身を記述
            <div>
                {
                    langs.map((lang,index) => {                {/*mapメソッドで配列をhtmlに変換,keyは一意の値を指定、必ず明記*/}
                        return <div key={index}>{lang}</div>       
                    })
                }
            </div>
        )
    }
}