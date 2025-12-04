import React from 'react'
import Axios from 'axios'
const User = () => {
    let getUserHandler=()=>{
        console.log("Test case 123");
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{console.log(resp.data)})
        .catch((err)=>{console.log(err.name)})
        
    }
  return (
    <div>
        <h3>User components</h3>
        <button onClick={getUserHandler}>Get USers</button>
      
    </div>
  )
}

export default User
