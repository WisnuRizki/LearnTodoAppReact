import React from 'react';
import './Daftar.css';

function Daftar({listTodo,onDel}){
    return(
        <div>
            <div >
                <ul>

                    {listTodo.map(list => {
                        return <div  className="daftar">
                            <li>{list}</li>
                            <button className="buttonDel" onClick={onDel.bind(this,list)}>X</button>
                        </div>
                    })}
                   
                </ul>
                
            </div>
            
        </div>
    );
    
    
    
    
}

export default Daftar;