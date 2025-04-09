const count=0
function countReducer(state = count, action) {
    const { type, payload } = action
    console.log(payload)
    switch (type) {
        case "INCREMENT":
            return state = payload
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}
export default countReducer;

// const count=0
//  function redReducer(state=count,action){
//     const {type,payload}=action
//     switch(type){
//         case 'INCREMENT':
//            return state +1
//         case 'DECREMENT':
//             return state -1
//         case 'RESET':    
//     }
//  }