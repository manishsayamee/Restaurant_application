import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import Menu from './MenuComponents';
import {DISHES} from '../shared/dishes';
import Home from './HomeComponent';



class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onSelectedDish(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }


    render() {

        const HomePage=()=>{
            return(<Home/>)
        }
        return (
            
         <div>
            <Header/>
             <Switch>
                <Route path='/home' component={HomePage}/>
                <Route excat path='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
                <Redirect to ='/home'/>
            </Switch>
          <Footer />
          
          </div>
       

     
          
        );
    }
}

export default Main; 