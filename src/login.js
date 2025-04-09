// import React from "react";
// import { Link } from "react-router-dom";
// // import { Link } from "react-router-dom";
// export class Login extends React.Component{
//     render(){
//         return(
//             <div>
//                <p> Hii this is login Page</p>
//                <Link to={`/home/${1}`}>Click to Home</Link>
//             </div>
//         )
//     }

import { useNavigate } from "react-router-dom";

// }
function Login(){
    const navigate=useNavigate()

    const HomeData=()=>{
        navigate('/home')
    }
    return(
        <>
        <p>login Pagee</p>
        <h1>This is Login Page</h1>
        <label>Name</label>
        <input></input>
        <br></br>
        <label>Password</label>
        <input type="password"></input>
        <br></br>
        <button>Login page</button>
        <button onClick={HomeData}>Home Page</button>

        
        </>
    )
}
export default Login;