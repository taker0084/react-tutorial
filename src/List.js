import React from 'react';
import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';


const ListItem = styled.div`
    padding: 8px 16px;
    &:nth-child(n+2){
        border-top: 1px solid #D9DBDE;
    }
`;
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
            <TabBodyContainer title = "取り扱い言語リスト">
                {
                    langs.map((lang,index) => {                {/*mapメソッドで配列をhtmlに変換,keyは一意の値を指定、必ず明記*/}
                        return <ListItem key={index}>{lang}</ListItem>       
                    })
                }
            </TabBodyContainer>
        )
    }
}