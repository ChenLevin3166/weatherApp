import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeForm from '../components/HomeForm';
import { changeCityWeather } from '../actions/cityWeatherAction';
import {addFavoriteCity} from '../actions/favoriteAction'


class Home extends Component {
   

    handlerCity = (city) => {
        this.props.changeCityWeather(city)
    }

    addToFavor=(city)=>{
        if(city===""){
            this.props.addFavoriteCity("Tel-Aviv")
        }
        else{
            this.props.addFavoriteCity(city)
        }
  
    }


render() {
    return (
        <div>
            <HomeForm currentCity={this.props.cityWeather} handlerCity={this.handlerCity} addToFavor={this.addToFavor} />
        </div>
    )
}
}


const mapStateToProps = state => {
    return {
        cityWeather: state.cityWeatherReducer.cityWeather,
    }
}

const mapDispatchToProps = disaptch => {
    return {
        changeCityWeather:(newCityWeather)=> {
            disaptch(changeCityWeather(newCityWeather))
        },
        addFavoriteCity:(cityToAdd)=> {
            disaptch(addFavoriteCity(cityToAdd))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);