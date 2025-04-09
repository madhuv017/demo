// // function App(props){
// //     const {Name,mobile,Email}=props
// //     return(
// //         <>
// //           <h1>props method</h1>
// //           <p>
// //             Name: {Name}
// //           </p>
// //           <p>Mobile: {mobile}</p>
// //           <p>Email:{Email}</p>
// //         </>
// //     )
// // }

import { useEffect, useState } from "react";

// import { use, useEffect, useRef, useState } from "react"

// import react = require("react");

// // function App2(){
// //     return(
// //         <>
// //           <h1>props information</h1>
// //           <App  Name="Madhu"  mobile="6369375235" Email="madhukumar733@gmail.com" />
// //         </>
// //     )
// // }
// // export default App2;

// // import React from "react"
// // class App extends React.Component{
// //     render(){
// //         const {id,book,author,mobile}=this.props
// //         return(
// //             <>
// //               <h1>props to Class Component</h1>
// //               <p>id:{id}</p>
// //               <p>book:{book}</p>
// //               <p>author:{author}</p>
// //               <p>mobile:{mobile}</p>
// //             </>
// //         )
// //     }
// // }

// // class App1 extends React.Component{
// //     render(){
// //         return(
// //             <>
// //               <h1>Props to class component</h1>
// //               <App id={1} book={"react"} author={"jhon"} mobile={6369375235} />
// //             </>
// //         )
// //     }
// // }
// // export default App1;

// // import propTypes from "prop-types"    
// // import React from "react"
// // class App extends React.Component{
// //     render(){
// //         const {name,city,contact,state}=propTypes
// //         return(
// //         <>
// //           <h1>Props types</h1>
// //           <p>name:{name}</p>
// //           <p>city: {city}</p>
// //           <p>contact: {contact}</p>
// //           <p>state:{state}</p>
// //         </>
// //     )

// // App.propTypes={
// //     name:propTypes.string,
// //     city:propTypes.string,
// //     contact:propTypes.number,
// //     state:propTypes.string
// // }
// // App.defaultProps={
// //     name:"Madhu",
// //     city:"Hosur",
// //     contact:6369375235,
// //     state:"Tamilnadu"
// //      }
// //   }
// // }
// // export default App;
                                              
//                                                     //  state and setstate
// import react from "react";
// export class App extends react.Component{
//     constructor(){
//         super()
//         this.state={
//             id:1,
//             name:"madhu",
//             book:"react js",
//             contact:6369375235,
//             Count:0
//         }
//     }
//     updateData=()=>{
//         this.setState({
//             id:2,
//             name:"santa",
//             book:"maths",
//             contact:9360311546
            
//         })
//     }
//     handleIncre=()=>{
//         this.setState({Count:
//             this.state.Count+1
//         })
//     }
//     handleDec=()=>{
//         this.setState({
//             Count:this.state.Count-1
//         })
//     }
//     handleReset=()=>{
//         this.setState({
//             Count: 0
//         })
//     }
//     render(){
//         return(
//             <>
//             <h1> State & SetState</h1>
//             <p>
//                 id:{this.state.id}
//             </p>
//             <p>name:{this.state.name}</p>
//             <p>book:{this.state.book}</p>
//             <p>contact:{this.state.contact}</p>
//             <button onClick={this.updateData}> click </button>
//             <h1>Count:{this.state.Count}</h1>
//             <button onClick={this.handleIncre}>INCREMENT</button>
//             <button onClick={this.handleDec}>DECREMENT</button>
//             <button onClick={this.handleReset}>RESET</button>
//             </>
//         )
//     }
// // }
// import React from "react"
// export class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             Data:""
//         }
//     }
//     handleInput=(i)=>{
//         this.setState({
//             Data:i.target.value
//         })
//     }
//     render(){
//         return(
//             <>
//             <input type="text" placeholder="Enter a data" onKeyUp={this.handleInput}></input>
//             <button>submit</button>
//             <br>
//             </br>
//             <span>{this.state.Data}</span>
//             </>
//         )
//     }
// // }

                                            
                                                                   //   Routers
// import "./App.css"
// import  { BrowserRouter as Routers,Routes,Route,Link } from "react-router-dom"
// import Home from "./home.js"
// import About from "./about.js"
// import Login from "./login.js"
// function App(){
    
//     return(
//         <div>
//             <Routers>
//              <ul>
//                 <li> 
//                     <Link to="/home">Home</Link>
//                 </li>
//                 <li>Contact</li>
//                 <li>Gallery</li>
//                 <li>
//                     <Link to="/l">Login</Link>
//                 </li>
//                 <li>
//                     <Link to="/d">About</Link>
//                 </li>
//             </ul>   
//             <Routes>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/d" element={<About/>}/>
//                 <Route path="/l" element={<Login/>}/>
//             </Routes>
//             </Routers>
//         </div>
//     )
// }
// export default App;
//                                                          Hooks methods
// import { UseState,UseEffect } from "react"
// function App(){
//     const [data,setData] = useState('Hii Hooks Methods..')
//     const UpdateData=()=>{
//         setData("Hii SetState method...!")
//     }
//     const [count,setCount] =useState(0)
//     const [value,setValue] =useState("")
//     // const updateInc=()=>{
//     //     setCount(count +2)
//     // }
    
//     const updateDec=()=>{
//         setCount(count -3)
//     }
//     const updateReset=()=>{
//           setCount(0)
//     }
//     const updateInput=(e)=>{
//         setValue(e.target.value)
//     }
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count +10)
//         },1500)
//     },[])

//     return(
//         <>
//            <h1>Hooks Methods.</h1>
//            <h2>{data}</h2>
//            <button onClick={UpdateData}>Update</button>
//            <h1>BUTTON:{count}</h1>
//            {/* <button onClick={updateInc}>INCREMENT</button> */}
//            <button onClick={updateDec}>DECREMENT</button>
//            <button onClick={updateReset}>RESET</button>
//            <br></br>
//            <br></br>
//            <input type="text" onKeyUp={updateInput}></input>
//            <button>submit</button>
//            <br></br>
//            <span>{value}</span>
//         </>
//     )
// }
// export default App;

//                                                             //   Firebase use to signup,signin,signout
// import { useRef,useState } from "react";
// import { signUp } from "./fire.js";
// import { usePage,signIn,signOut } from "./fire.js";
// function App(){
//    const currentUser=usePage()
//    const [loading,setLoading]=useState(false)
//    const emailRef=useRef()
//    const passwordRef=useRef()
//    async function mysignUp(){
//       setLoading(true)
//       await signUp(emailRef.current.value,passwordRef.current.value)
//       setLoading(false)
//    }
//    async function mysignIn(){
//       try{
//          setLoading(true)
//          await signIn(emailRef.current.value,passwordRef.current.value)
//       }
//       catch{
//          alert("Please create your Account..!")
//       }
//    }

//    async function mysignOut(){
//        setLoading(true)
//        await signOut()   
//    }
//     return(
//         <>
//            <center>
//             <h1>
//                Currentuser:{currentUser}
//             </h1>
//             <h1>Firebase_React Page</h1>
//            <label>Email : </label>
//            <input type="text" ref={emailRef}></input>
//            <br></br><br></br>cd
//            <label>Password : </label>
//            <input type="password" ref={passwordRef}></input>
//            <br></br><br></br>
//            <button onClick={mysignUp}>SignUp</button>      
//            <button onClick={mysignIn}>SignIn</button>
//            <button onClick={mysignOut}>SignOut</button>
//            </center>
//         </>
//     )
// }
// export default App;

                                                         // Using to redux
// import React, { useState } from "react";
  
// import { inc,dec,reset } from "./Action";
// import { useDispatch,useSelector } from "react-redux";     

// function App(){
//    const dispatch = useDispatch()
//    const  count = useSelector((state)=>state);

//    const [countNo,setCountNo]=useState(0)
//    console.log(count);
   

   
//    return(
//       <>
//         <h1>React-redux</h1>
//         <h2>Count:{count}</h2>
//         <button onClick={()=>{
//          const updateCount= countNo +1;
//          setCountNo(updateCount);
//          dispatch(inc(countNo))
//         }}>INCREMENT</button>
//         <button onClick={()=>{
//          const updateCount= countNo -1;
//          setCountNo(updateCount);
//          dispatch(dec(countNo))
//         }}>DECREMENT</button>
//         <button onClick={()=>{
//          setCountNo(0);
//          dispatch(reset(countNo))
//         }}>RESET</button>
//       </>
//    )
// }          
// export default App;       

// function App(){
//    return(
//       <>
//         <h1>Create to React-Redux</h1>
//         <h2></h2>
//       </>
//    )
// }
// export default App;

                                       // Json placeholder Object

                                       // https://jsonplaceholder.typicode.com/posts

import { UseEffect, UseState } from "react";
import "./App.css"
function App(){
   useEffect(()=>{

      const [data,setData]=useState("")

      fetch("https://jsonplaceholder.typicode.com/posts")

      .then((res)=>{
           return res.json()
      })
      .then((response)=>{
          console.log(response);
          setData(response)
          
      })
      .catch((error)=>{
          console.log(error);
          
      })
      })
   return(
      <>
         <h1>Create to Json  object...! </h1>
         <h2>Fetch the Data From Backend surver..!</h2>
         <table>
            <thead>
               <tr>
                  <th>userId</th>
                  <th>id</th>
                  <th>title</th>
                  <th>body</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item)=>{
                  <tr>
                     <td>{item.userId}</td>
                     <td>{item.id}</td>
                     <td>{item.title}</td>
                     <td>{item.body}</td>
                  </tr>
               })}
            </tbody>
         </table>
      </>
   )
}
export default App;