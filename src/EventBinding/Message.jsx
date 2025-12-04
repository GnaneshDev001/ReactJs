import { useState } from "react"

let Message=()=>{
    // let [msg,setMsg]=useState('hello')
    // let gmHandler=()=>{
    //     setMsg("Good morining")
    // }
    // let gaHandler=()=>{
    //     setMsg("Good Afternoon")
    // }
    // let gnHandler=()=>{
    //     setMsg("Good Evening")
    //Binding
    let [state,setState]=useState('Hello')
    let updateHandler=(msg)=>{
        setState(msg)
    }

    
    return <div>
        <h1>Msg Component</h1>
        {/* <h3>Mesaage:{msg}</h3>
        <button onClick={gmHandler}>Gm</button>
        <button onClick={gaHandler}>Ga</button>
        <button onClick={gnHandler}>Gn</button> */}
        <h3>Message:{state}</h3>
        <button onClick={updateHandler.bind(null,"Good Morning")}>Gm</button>
        <button onClick={updateHandler.bind(null,"Good Afternoon")}>Ga</button>
        <button onClick={updateHandler.bind(null,"Good Evening")}>Ge</button>
    </div>
}
export default Message