

 export const inc=(count)=> async (dispatch)=>{
    console.log(count,'count')
    dispatch({
        type:"INCREMENT",
        payload:count
    })
}

 export const dec=(count)=> async (dispatch)=>{
    dispatch({
        type:"DECREMENT"
    
    })
}

 export const reset =()=>async (dispatch) => {
    dispatch({
        type:"RESET"
    })
}