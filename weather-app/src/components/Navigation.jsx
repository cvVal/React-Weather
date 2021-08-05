import React from "react";
import {Link, withRouter} from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Weather App
                    </Link>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${props.location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">
                                    Current Weather
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/fiveDayForecast" ? "active" : ""}`}>
                                <Link className="nav-link" to="/fiveDayForecast">
                                    5 Day Forecast
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);