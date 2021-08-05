import Weather from "../components/Weather";
import Forecast from "../components/Forecast";
import UsePosition from "../hooks/usePosition";
import Navigation from '../components/Navigation';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
    const position = UsePosition()
    return (
        <div className="App">
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={() =>
                        <Weather latitude={position.lat} longitude={position.lon}/>
                    }/>
                    <Route path="/fiveDayForecast" exact component={() =>
                        <Forecast latitude={position.lat} longitude={position.lon}/>
                    }/>
                </Switch>
            </Router>
        </div>
    );
}