// import React from "react";
// import { useParams } from "react-router-dom";
// export const  Home=()=>{
//    const {id}=useParams()
//     console.log(id,'ids')
//         return(
//             <div>
//                 Hii this is home Page
//             </div>
//         )

import { useNavigate } from "react-router-dom";

    
// }
function Home(){
    const navigate=useNavigate()

    const LoginData=()=>{
        navigate('/login')
    }
    return(
        <>
           <p>Home Page</p>
           <h1>Hii This is Home Page..!</h1>
           <button onclick={LoginData}>Login page</button>
        </>
    )
}
export default Home;
