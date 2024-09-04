import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 64px 0;
`;

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
            <Container>
                {
                    langs.map((lang,index) => {                {/*mapメソッドで配列をhtmlに変換,keyは一意の値を指定、必ず明記*/}
                        return <ListItem key={index}>{lang}</ListItem>       
                    })
                }
            </Container>
        )
    }
}