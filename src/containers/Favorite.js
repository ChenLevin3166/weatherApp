import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityList from '../currentCity.json';
import { addFavoriteCity } from '../actions/favoriteAction';
// import { Link } from 'react-router-dom';




class Favorite extends Component {

    render() {
        return (
            <div className="row" >
                {this.props.cityFavor.map((item) => {
                    return <div className="card" className="col-2" style={{position: "relative",top:"50px",left:"75px", display: "inline", width: "20px", height: "100px",border: "3px solid #34DDE9" }} >
                    <div className="card-body">
                <h5 className="card-title">{item}</h5>
                      <p className="card-text"></p>
                      {/* <a href="/" className="btn btn-primary">Back to home</a> */}
                    </div>
                  </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cityFavor: state.favoriteReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFavoriteCity(addCity) {
            dispatch(addFavoriteCity(addCity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);