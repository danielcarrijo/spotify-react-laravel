
import CreateConfirmation from './CreateConfirmation'
import React, { Component } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

export class StandardLists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : ''                                                
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const { value } = e.target
        this.setState({
            title : value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        if(this.state.title!='') {
            const { title } = this.state
            axios.post('api/playlist', { title }, {headers : {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('spotify.jwt')}}).then(response => {
                window.location.href = "/playlist/"+response.data.id
            }).catch(err =>{
                Cookies.remove('spotify.jwt')
                Cookies.remove('spotify.user')
                window.location.href = "/login"
            })
        }
    }
    render() {
        return (
            <div className="container pt-2 py-4" style={{borderBottom : '0.5px solid #cecece'}}>
            <span style={title} className="ml-4 mb-1">PLAYLISTS</span>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <CreateConfirmation handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                    <div className="row ml-2 mt-2">
                        <div className="col-2">
                            <img src="/img/playlists/likes.png" className="" width="25px" />
                        </div>
                        <div className="col-9 ">
                            <span style={subtitle} className="text-white ml-lg-1 ml-xl-0">Minhas Curtidas</span>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
        )
    }
}

export default StandardLists



const title = {
    color: '#cecece',
    fontSize : '8pt'
}

const subtitle = {
    fontSize : '11pt',
    fontWeight : 'bolder', 
}

const square = {
    background: '#cecece',
    fontSize: '18pt',
    color: 'black',
    minHeight: '25px',
    minWidth: '25px',
    maxHeight: '25px',
    maxWidth: '25px'
}