import React from 'react';

function Daftar({listTodo,onDel}){
    return <ul>
        {listTodo.map((item,i) => {
            return <li key={item}>
                {item}
                <a onClick={onDel.bind(this,item)}>[k]</a>
            </li>
        })}
    </ul>;
}

export default Daftar;