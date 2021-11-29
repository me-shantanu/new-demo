import React from 'react'
import './home.css'
import {useState} from 'react';
function Home() {
    const [data,setData] = useState(null);
    const [show,setShow] = useState(false);
    function getData(val){
        setData(val.target.value)
        setShow(false)
    }
    return (
        <div className="home">
            <h2>Type and click on buttton to display</h2>
            <div className="home__input">
            <input className="inputbox" placeholder="type..." type="text" onChange={getData}/>
            <button className="buttonsub" onClick={()=> setShow(true)
            }>Show</button></div>
            {
                show?
                <h3>{data}</h3>
                :null
            }
            
        </div>
    )
}

export default Home
