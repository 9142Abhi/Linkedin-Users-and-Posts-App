import {useState,useEffect} from 'react';
const Login=()=>{
const [email,setEmail]= useState("");
const [password,setPassword]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault();
    const payload={email,password};
}

    return (
        <div>
            <h1>Login Page</h1>
       <form action="" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
        
       </form> 
       </div>
    )
}
export default Login;