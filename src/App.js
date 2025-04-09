
// export function App(){
//   return(
//     <div>
//       <h1>hello good morning all...!</h1>
//       <input></input>
//       <br></br>
//       <hr></hr>
//       <input></input>
//         <center>
//           <input></input>
//           <hr></hr>
//         </center>
//     </div>
//   )
// }

import React from "react";
class App2 extends React.Component {
  state = {
    count: 0,
    myArray: [{
      id: 1,
      Name: 'Madhu',
      Age: 23,
      Working: 'TCS'
    }, {
      id: 2,
      Name: 'Amaresh',
      Age: 25,
      Working: 'NPT'
    }, {
      id: 3,
      Name: 'Mahe',
      Age: 23,
      Working: 'IT'
    }]
  };  

  handleincrement = (name) => {
    // alert(`My name is  ${name}`)
    this.setState({ count: this.state.count + 1 })
  }
  handledecrement = () => {
    // alert(`my age is`)
    this.setState({ count: this.state.count - 1 })
  }
  handledelete = (id) => {
    console.log(id);
    this.setState({myArray:this.state.myArray.filter((item)=>item.id != id)
    })
    
  }
  render() {
    return (
      <div>
        <h1> class Component </h1>
        <h1>{this.props.bike}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleincrement}>increment</button>
        <button onClick={this.handledecrement}>decrement</button>
        <table border='1'>
          <tr>
            <th>sl No</th>
            <th>Name</th>
            <th>age</th>
            <th>company</th>
            <th>delete</th>

          </tr>
          <tbody>
            {this.state.myArray.map((item, index) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Working}</td>
                <td>
                  <button onClick={()=>this.handledelete(item.id)}>delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}


// const AllComponent = {App,App1,App2}
// export default AllComponent

export default App2