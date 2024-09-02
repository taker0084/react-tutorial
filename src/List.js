export const List = ({title}) => {   //親コンポーネントからの引数を受け取る
    return (                         //return内に子コンポーネントの中身を記述
        <div>
            <h4>{title}</h4>
            <div>リストです</div>
        </div>
    )
}