const initState = {
    cityWeather: 'Tel-Aviv'
}
const cityWeatherReducer = (state =initState , action) => {
    
    switch(action.type){
        case "Change_City_Weather":
            state = {...state, cityWeather: action.payload}
        break;
        default:
        break;
    }

    return state;
}

export default cityWeatherReducer;