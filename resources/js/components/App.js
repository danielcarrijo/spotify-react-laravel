import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Leftbar from './Leftbar'
import Player from './Player';
import Main from './Main';
import Header from './Header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import Login from './auth/Login'
import axios from 'axios';

const user =  () => {
    if (Cookies.get('spotify.jwt') != null) {
        console.log('entrei')
        return true
    } else{
        return false
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        user() == true ? <Component {...props}/> : <Redirect to={{
            pathname : '/login',
            state: {from : props.location}
        }} />
    )}/>
) 

const LoginRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        user() == true ? <Redirect to='/' /> : <Component {...props}/>
    )}/>
) 
export class App extends Component {
    constructor() {
        super()
        this.state = {
            soundtrack : null,
        }
        this.handleSound = this.handleSound.bind(this)
    }
    componentDidMount() {
        console.log(Cookies.get('spotify.jwt'))
    }
    handleSound(item) {
        console.log('as')
        this.setState({
            soundtrack: item
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-6">
                            <Leftbar />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 col-6">
                            <Header />
                            <Switch>
                                <Route
                                    exact path='/'
                                    render={(props) => <Main {...props} handleSound={this.handleSound} />}
                                />
                                <LoginRoute path="/login" component={Login} />
                            </Switch>
                        </div>
                    </div>
                    <Player soundtrack = {this.state.soundtrack}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
