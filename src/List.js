import React from 'react';

const LANGUAGES = [      //言語の配列
    'JavaScript',
     'C++',
     'Ruby',
     'Java', 
     'PHP', 
     'Go'
    ];
export class List extends React.Component {   //親コンポーネントからの引数を受け取る
    render() {
        return (                         //return内に子コンポーネントの中身を記述
            <div>
                {
                    LANGUAGES.map((lang,index) => {                {/*mapメソッドで配列をhtmlに変換,keyは一意の値を指定、必ず明記*/}
                        return <div key={index}>{lang}</div>       
                    })
                }
            </div>
        )
    }
}