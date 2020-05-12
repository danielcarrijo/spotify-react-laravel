import React, { Component } from 'react'

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

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            email: '', 
            password: '',
            confirm_password: '',
            formErrors : {
                name: '',
                email: '',
                password: '',
                confirm_password :'',
                general: ''
            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        const formErrors = this.state.formErrors
        if(formErrors.general !='') {
            formErrors.general = ''
        }
        switch(name) {
            case "name" :
                formErrors.name = (/\S/.test(value)) ? value.length < 255 ?  "" : "Escolha um nome menor" : "Escreva um nome maior"
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "Escreva o email no padrão correto"
                break;
            case "password":
                formErrors.password = value.length < 6 ? "Senha muito curta" : ""
                break;
            case "confirm_password":
                formErrors.confirm_password = value != this.state.password ? "Senhas não iguais" : ""
                break;
        }
        this.setState({ formErrors, [name]:value })
        
    }
    handleSubmit(e) {
        e.preventDefault()
        const {name, email, password, confirm_password} = this.state
        if(formValid(this.state)) {
            axios.post('api/register', {name,email, password}).then(response => {
                    const { from } =  {from: {pathname: '/'}}
                    const { history } = this.props
                    history.push(from.pathname)
            })
        }else {
            const formErrors = this.state.formErrors
            const { name, email, password, confirm_password} = this.state
            formErrors.name = name.length == 0 ? "Escreva algo" : ""
            formErrors.email = email.length == 0 ? "Escreva algo" : ""
            formErrors.password = password.length == 0 ? "Escreva algo" : ""
            formErrors.confirm_password = confirm_password.length == 0 ? "Escreva algo" : ""
        }
    }
    render() {
        const formErrors = this.state.formErrors
        return (
            <div style={{color: 'white'}} className="mt-2">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-12">
                                        <label htmlFor="name" className="text-white">Name</label>
                                        <input 
                                            className="form-control"
                                            onChange = {this.handleChange}
                                            name = "name"
                                            type = "text"
                                            placeholder="Seu nome"
                                        />
                                        <span>{formErrors.name}</span>
                                </div>
                            </div>
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
                                        />
                                        <span>{formErrors.password}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                <label htmlFor="confirm_password">Confirmar senha</label>
                                        <input 
                                            className="form-control"
                                            onChange = {this.handleChange}
                                            name = "confirm_password"
                                            type = "password"
                                        />
                                        <span>{formErrors.confirm_password}</span>
                                </div>
                            </div>
                            <span className="text-danger">{formErrors.general}</span><br />
                            <button type="submit" className="btn btn-success">Log in</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Register
