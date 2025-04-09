import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function ProductType() {
    //Remove Dublicate Numbers
    const ary = [1, 2, 3, 2, 5, 5, 56, 4, 1]
    let a1 = ary.filter((item, index) => ary.indexOf(item) === index)
    console.log(a1, 'a1')
    console.log(ary.indexOf(1), 'indexOf');

    let a2 = ary.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur)
        }
        return acc
    }, [])
    console.log(a2,'acc')


    const bye=[9,8,6,8,2,3,4,1,2]
let b1=bye.reduce((acc,cur) => {
    if(!acc.includes(cur)) {
        acc.push(cur)
    }
    return acc
},[])
console.log(b1,'acc')

    // console.log(ary.reduce(), 'reduce method')

    // let filterArray = []
    // let removeDublicateNo=[]
    useEffect = () => {
        // ary.filter((acc,cur)=>{
        //     acc.include.item
        // },[])
    }


    //     ary.filter((item) => {
    //         if (!filterArray.reduce(item)) {
    //             filterArray.push(item)
    //         }else{
    //             removeDublicateNo.push(item)
    //         }
    //     },()=>console.log(filterArray,'filterary')
    //     )
    // },[])
    return (
        <>
            <h1>Numbers</h1>
        </>
    )
}
//     const [ProductType, setProductType] = useState([
//         { id: 1, product_type: 'Iron' },
//         { id: 2, product_type: 'Wood' },
//         { id: 3, product_type: 'Plastic' }
//     ])
//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Product Type</th>
//                         <th>Vist</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         ProductType.map((product_item, index) => (
//                             <tr>
//                                 <td>{product_item.id}</td>
//                                 <td>{product_item.product_type}</td>
//                                 <td><Link to={`/product/${product_item.id}`}>Vist Product</Link></td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }
export default ProductType