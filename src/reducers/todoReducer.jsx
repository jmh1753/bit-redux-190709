/* const todos = (state = {list : []}, action) => {
    switch(action.type){
        case 'ADD_TODO' : 
            break;
        case 'TOGGLE_TODO':
            const toggleList = state.list.map(
                (todo, index)=>{
                    index === action.index ? {...todo, completed:!todo.completed} : todo
                }
            )  
            state = Object.assign({}, state, {list:toggleList})  
            break;
        default : 
                return state
    }
} */
const todos = (state = {list:[]} , action ) => {

    console.log(action)

    //if action의 타입이 xxx라면.. 
        switch(action.type){
    
            case 'ADD_TODO':
    
                const newList = [...state.list, {text: action.text, completed: false}]
    
                state = Object.assign({}, state, {list: newList})
    
                break
            case 'TOGGLE_TODO':
            
                const toggleList = 
                    state.list.map((todo, index) => 
                        index === action.index ? {...todo, completed: !todo.completed}: todo )
    
                state = Object.assign({}, state, {list: toggleList})

                console.log(state)
    
                break;
    
            default:
    
                return state
    
        }
        //잘못되어도 기존 상태 유지 
        return state
    }
    
    export default todos
