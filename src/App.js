import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter  as Router,Route, NavLink } from 'react-router-dom';
import Home from './containers/Home';
import Favorite from './containers/Favorite';
import { changeCityWeather } from './actions/cityWeatherAction';
import {addFavoriteCity} from './actions/favoriteAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand" >What's The Weather</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" style={{position:"relative", marginLeft:"900px"}}>
                <NavLink className="nav-link" exact to='/'>Home</NavLink>
                <NavLink className="nav-link" to='/favorites' style={{position:"relative", marginLeft:"40px"}}>Favorites</NavLink>
              </div>
            </div>
          </nav>
          <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorite} />
        </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
     cityWeather: state.cityWeatherReducer.cityWeather,
     cityFavor: state.favoriteReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCityWeather(newCityWeather) {
      dispatch(changeCityWeather(newCityWeather))
    },
    addFavoriteCity(addCity){
      dispatch(addFavoriteCity(addCity))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);