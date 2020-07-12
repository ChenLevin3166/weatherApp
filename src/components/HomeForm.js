import React, { Component } from 'react';
import '../index.css';

import CityList from '../currentCity.json';
import fiveDayList from '../fiveDayWeather.json';

class HomeForm extends Component {
    constructor(props) {
        super();

        this.state = {
            nameOfCity: '',
            isInFavorie: 'Add to favorite',
            flag: 0,
            //The index of city that user search for current weather, Tel-Aviv is default
            indexCityList: 0,
            //The index of city that user search for five days weather, Tel-Aviv is default
            indexfiveDayList: 0
        }
    }

    handlerChangeCity = (e) => {
        // this.props.autoComplete(e.target.value);
        this.setState({ nameOfCity: e.target.value });

    }

    search = () => {
        try {
            // Variable that check if found city in CityList
            let check = false;
            for (let i = 0; i < CityList.length; i++) {
                if (CityList[i].city === this.state.nameOfCity) {
                    this.setState({ indexCityList: i });
                    for (let j = 0; j < fiveDayList.length; j++) {
                        if (fiveDayList[j].city === this.state.nameOfCity) {
                            this.setState({ indexfiveDayList: j });
                            break;
                        }
                    }
                    check = true;
                    break;
                }
            }
            if (!check) {
                throw "No data found for the city you searched for"
            }
        }
        catch (err) {
            alert(err);
        }
        this.props.handlerCity(this.state.nameOfCity);
    }
    cityFavorite = () => {
        if (this.state.flag === 0) {
            this.setState({ isInFavorie: 'Remove from favorite ' });
            this.setState({ flag: 1 });
            this.props.addToFavor(this.state.nameOfCity);
        }
        else {
            this.setState({ isInFavorie: 'Add to favorite' });
            this.setState({ flag: 0 });
        }

    }

    render() {
        return (
            <div className="container" style={{ position: "relative", top: "60px" }}>
                <div className="input-group md-form form-sm form-2 pl-0" style={{ position: "relative", width: "300px", marginRight: "auto", marginLeft: "auto" }}>
                    <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search city" aria-label="Search" onChange={this.handlerChangeCity} />
                    <div className="input-group-append">
                        <button id="searchButton" onClick={this.search}>
                            <span className="input-group-text red lighten-3" id="basic-text1" ><i className="fas fa-search text-grey"
                                aria-hidden="true"> </i></span>
                        </button>
                    </div>
                </div>
                <div style={{ position: "relative", top: "30px", width: "900px", height: "400px", border: "3px solid blue", marginRight: "auto", marginLeft: "auto" }}>
                    <button style={{ position: "relative", left: "700px", top: "20px" }} onClick={this.cityFavorite}>{this.state.isInFavorie} <i className="fa fa-star" aria-hidden="true"></i></button>
                    <div style={{ position: "relative", left: "50px", textAlign: "center", width: "100px", top: "-10px" }}>
                        {this.props.currentCity}
                        <br></br>
                        {`${CityList[this.state.indexCityList].Temperature.Metric.Value}° C`}
                    </div>
                  <h2 style={{position: "relative",top:"50px", textAlign:"center"}}>{CityList[this.state.indexCityList].WeatherText}</h2> 
                    <div className="row">
                    {fiveDayList[this.state.indexfiveDayList].DailyForecasts.map((item) => {

                        let c = (item.Temperature.Minimum.Value - 32) * (5 / 9);

                        return <div className="card border-info mb-3" className="col-2" style={{ position: "relative",top:"110px",left:"75px", display: "inline", width: "20px", height: "100px",border: "3px solid #34DDE9" }}>
                            <div className="card-body text-info" >
                                <h5 className="card-title" style={{textAlign:"center"}}>{item.DayWeek}</h5>
                                <p className="card-text" style={{textAlign:"center"}}>{`${parseInt(c)}° C`}</p>
                            </div>
                        </div>
                    })}
</div>

                </div>


            </div>
        )
    }
}



export default HomeForm;