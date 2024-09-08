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
export const List = ({langs}) => {   //親コンポーネントからの引数を受け取る
    return (                         //return内に子コンポーネントの中身を記述
        <TabBodyContainer title = "取り扱い言語リスト"> {/*mapメソッドで配列をhtmlに変換,keyは一意の値を指定、必ず明記*/}
            {
                langs.map((lang,index) => {                
                    return <ListItem key={index}>{lang}</ListItem>       
                })
            }
        </TabBodyContainer>
    )
}