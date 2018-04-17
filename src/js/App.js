import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './../views/home';
import Search from './../views/search';
import Profile from './../views/profile';
import NavBarr from './../utils/navbar';
import FootBar from './../utils/footer';
import Terms from './../views/terms';
import Policy from './../views/policy';
import Scheme from './../views/schemes';
import Initiatives from './../views/initiatives';


class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <NavBarr/>
                <div className="main-content container">
                    <div className="my-back"></div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/Terms" component={Terms}/>
                        <Route exact path="/policy" component={Policy}/>
                        <Route exact path="/schemes" component={Scheme}/>
                        <Route exact path="/initiatives" component={Initiatives}/>
                    </Switch>
                </div>
                <FootBar/>
                </div>
            </Router>
        );
    }
}

export default App;
