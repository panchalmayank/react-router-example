import React ,{Component} from 'react';
import {Switch , Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from "./contact";

class Main extends Component{
    render(){
        return(
            <div>
                <h2>Hello</h2>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        );
    }
}
export default Main;