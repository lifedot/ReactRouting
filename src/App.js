import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Films from "./Components/Films";
import SingleFilm from "./Components/SingleFilm";
import People from "./Components/People";
import SinglePerson from './Components/SinglePerson';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />

                
                <Switch>
                    <Route path="/films/:filmid">
                        <SingleFilm />
                    </Route>
                    <Route path="/films">
                        <Films />
                    </Route>
                    <Route path="/characters/:characterid">
                        <SinglePerson />
                    </Route>
                    <Route path="/characters">
                        <People />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;