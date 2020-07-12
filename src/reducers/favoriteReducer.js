
const favoriteReducer = (state =[] , action) => {
    
    switch(action.type){
        case "Add_Favorite":
            state = [...state,  action.payload]
        break;
        default:
        break;
    }

    return state;
}

export default favoriteReducer;