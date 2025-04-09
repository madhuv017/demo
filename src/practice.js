import { array } from "prop-types"
import React from "react"
export class Oddandeven extends React.Component {
    state = { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], myarray: [] }
    handlenumber = (num) => {
        this.setState({
            myarray: this.state.arr.filter(arr => {
                 if(num === 'odd'){
                    return   arr % 2 !== 0
                }else if(num === 'even'){
                    return  arr % 2 === 0
                }
            }
            )
        },()=>console.log(this.state.myarray)
        )
        console.log(this.state.arr[0].toString(),'string')
    }
    render() {
        return (
            <>
                <h1>Odd number</h1>
                <button onClick={()=>this.handlenumber('odd')}>Odd number</button>
                <button onClick={()=>this.handlenumber('even')}>Even number</button>

            </>
        )
    }   
}
                                        // Program 2

import React, { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
function Products() {
    const {id} = useParams();
    console.log(id,'id')
    const [products, setProduct] = useState([
        { id: 1, product_name: "Laptop", quantity: 3, Price: 22200, product_type: 1 },
        { id: 2, product_name: "Table", quantity: 13, Price: 2220, product_type: 2 },
        { id: 3, product_name: "Mobile", quantity: 34, Price: 122200, product_type: 1 },
        { id: 4, product_name: "Pipe", quantity: 23, Price: 22200, product_type: 3 },
        { id: 5, product_name: "Helment", quantity: 54, Price: 1000, product_type: 3 },
        { id: 6, product_name: "Bench", quantity: 13, Price: 4500, product_type: 2 },
        { id: 7, product_name: "Fan", quantity: 45, Price: 500, product_type: 3 },
        { id: 8, product_name: "data cable", quantity: 2, Price: 209, product_type: 3 }
    ]);
    const [filterProduct,setFilterProducts]=useState([])

        useEffect(()=>{
        let filterData= products.filter((item)=>item.product_type == id)
        setFilterProducts(filterData)
        },[])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Type</th>
                        <th>No of items</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterProduct.map((product_item, index) => (
                            <tr key={index}>
                                <td>{product_item.id}</td>
                                <td>{product_item.product_name}</td>
                                <td>{product_item.quantity}</td>
                                <td>{product_item.Price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

                                                        //    Program 3
export default Products

import React from "react"
export class Addnum extends React.Component {
    state = { Addsum: [], num: '',totalCount:'' }
    handleClick = () => {
        console.log('1', this.state.num)
        this.setState({ Addnum: this.state.Addsum.push( Number(this.state.num)) })
        this.setState({ num: '' })
        console.log(this.state.Addsum)
    }
    handleTotalSum = () => {
     this.setState({totalCount: this.state.Addsum.reduce((acc, cur) => (
        acc + cur
      ),0)}) 
     console.log(this.state.totalCount,"daf")
    }
    render() {
        return (
            <>
                <input placeholder="Enter a number" value={this.state.num} onChange={(e) => this.setState({ num: e.target.value })} />
                <button onClick={() => this.handleClick()}>Enter</button>
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Addsum.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                            </tr>
                        ))}
                        <tr>
                            <p>{this.state.totalCount}</p>
                            <button onClick={() => this.handleTotalSum()}>Total Number</button>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}