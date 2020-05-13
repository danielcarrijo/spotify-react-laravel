import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({formErrors, ...rest}) => {

let valid = true;
Object.values(formErrors).forEach(val => { 
    val.length > 0 && (valid = false)
});

Object.values(rest).forEach(val => {
    val === null && (valid = false);
});
return valid; 
}

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: '',
            formErrors : {
                email: '',
                password: '',
                general: ''
            },
            loading : false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    

    handleSubmit(e) {
        e.preventDefault()
        const {email, password} = this.state
        if(formValid(this.state)) {
            const error = this.state.error
            this.setState({loading: true})
            axios.post('api/login', {email, password}).then(response => {
                let user = response.data.user

                Cookies.set('spotify.user', JSON.stringify(user)) 
                Cookies.set('spotify.jwt', response.data.token)
                if (Cookies.get('spotify.jwt') != null) {
                    // const { from } = this.props.location.state || {from: {pathname: '/'}}
                    // const { history } = this.props
                    // history.push(from.pathname)
                    this.setState({loading:false})
                    window.location.href = '/'
                }
            }).catch(err => {
                console.log(err)
                const formErrors = this.state.formErrors
                formErrors.general = "Email ou senha incorretos"
                this.setState({
                    formErrors
                })
            });
        }
    }
    handleChange(e) {
        e.preventDefault();
        const {name, value} = e.target
        const formErrors = this.state.formErrors
        if(formErrors.general !='') {
            formErrors.general = ''
        }
        switch(name) {
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "Escreva o email no padrão correto"
                break;
            case "password":
                formErrors.password = value.length < 6 ? "Senha muito curta" : ""
                break;
        }
        this.setState({ formErrors, [name]:value })
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div style={{color: 'white'}} className="mt-2">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-12">
                                        <label htmlFor="email" className="text-white">Email</label>
                                        <input 
                                            className="form-control"
                                            onChange = {this.handleChange}
                                            name = "email"
                                            type = "text"
                                            placeholder="Email"
                                        />
                                        <span>{formErrors.email}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                <label htmlFor="password">Senha</label>
                                        <input 
                                            className="form-control"
                                            onChange = {this.handleChange}
                                            name = "password"
                                            type = "password"
                                            placeholder="Senha"
                                        />
                                        <span>{formErrors.password}</span>
                                </div>
                            </div>
                            <span className="text-danger">{formErrors.general}</span><br />
                            <button type="submit" className="btn btn-success">Log in</button>
                        </form>
                    </div>
                </div>
                {this.state.loading ?
                <Loader
                        type="ThreeDots"
                        color="#40ff40"
                        height={100}
                        width={100}
                        timeout={10000} //10 secs
                    /> : ''}
            </div>
        )
    }
}

export default Login
