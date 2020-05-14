import axios from 'axios'
import Cookies from 'js-cookie'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Menu extends Component {
    
     render() {
        return (
            <div>
            <Link to="/" className={`nav-link text-white ${this.props.class == '/' ? 'active' : ''}`}>
            <div className="row ml-2"  style={{color: 'white'}}>
                    <div className="col-2">
                        <i style={li} className="fas fa-home "></i>
                    </div>
                    <div className="col-10">
                        <span style={title}>Início</span>
                    </div>
            </div>
            </Link>
            <Link to="/buscar" className={`nav-link text-white ${this.props.class == '/buscar' ? 'active' : ''}`}>
            <div className="row ml-2" style={{color: 'white'}}>
                    <div className="col-2">
                        <i  style={li} className="fas fa-search "></i>
                    </div>
                    <div className="col-10">
                        <span style={title}>Buscar</span>
                    </div>
            </div>
            </Link>
            <a href="#" className={`nav-link text-white ${this.props.class == 'inicio' ? 'active' : ''}`}>
                <div className="row ml-2" style={{color: 'white'}}>
                        <div className="col-2">
                            <i  style   ={li} className="fas fa-book "></i>
                        </div>
                        <div className="col-10">
                            <span style={title}>Sua biblioteca</span>
                        </div>
                </div>
            </a>
        </div>
        )
    }
}

export default Menu



const li = {
    fontSize: '14pt'
}

const title = {
    fontSize : '11pt',
    fontWeight : 'bolder'
}