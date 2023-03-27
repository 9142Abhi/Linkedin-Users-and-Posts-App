import {useState} from 'react';
const Signup=()=>{
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const [name,setName]= useState("");
    const [gender,setGender]= useState("");
    const [age,setAge]= useState("");
    const [city,setCity]= useState("");
    const [is_married,setMarried] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const payload={email,password};
    }

    return (
        <div>
            <h1>Signup Page</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} />
        <br />
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <label htmlFor=""> Married:
        <input type="checkbox" value={is_married} onChange={(e)=>setMarried(!is_married)}/>
        </label>
        <br />
        <input type="submit" />

       </form> 
       </div>
 )
}

export default Signup;