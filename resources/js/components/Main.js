import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{background: "#202020"}}>
                <ul>
                    <li onClick={() => this.props.handleSound("gusttavo_lima/milu.mp3")} className="text-white"> 
                       Milu

                    </li>
                    <li onClick={() => this.props.handleSound("gusttavo_lima/a_gente_fez_amor.mp3")}className="text-white"> 
                        A gente fez amor

                    </li>
                    <li onClick={() => this.props.handleSound("wesley_safadão/solteiro_de_novo.mp3")} className="text-white">                       
                        Solteiro de novo

                    </li>
                </ul>
            </div>
        )
    }
}

export default Main
