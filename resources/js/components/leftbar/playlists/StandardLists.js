
import CreateConfirmation from './CreateConfirmation'
import React, { Component } from 'react'

export class StandardLists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist : ''                                                
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { value } = e.target
        this.setState({
            playlist : value
        })
    }
    render() {
        return (
            <div className="container pt-2 py-4" style={{borderBottom : '0.5px solid #cecece'}}>
            <span style={title} className="ml-4 mb-1">PLAYLISTS</span>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <div className="row ml-2 mt-2" >
                        <div className="col-2">
                            <div className=" d-flex justify-content-center" style={square}>
                                <span style={{marginTop: -8}}>+</span>
                            </div>
                        </div>
                        <div className="col-9 ">
                            <span style={subtitle} className="text-white ml-lg-1 ml-xl-0">Criar minha playlist</span>
                        </div>
                        <CreateConfirmation handleChange={this.handleChange}/>
                    </div>
                    <div className="row ml-2 mt-2">
                        <div className="col-2">
                            <img src="img/playlists/likes.png" className="" width="25px" />
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