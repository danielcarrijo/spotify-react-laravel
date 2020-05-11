import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cards from './main/frontpage/Cards'

export class Main extends Component {
    constructor(props) {
        super(props),
        this.state = {
            artists : []
        }
    }
    componentDidMount() {
        axios.get('api/artist').then(response => {
            this.setState({
                artists : response.data
            })
        })
    }
    render() {
        const artists = this.state.artists.slice(0,4)
        return (
            <div style={{background: "#202020", height:'550px'}} id="songs">
                <div className="container mt-3" >
                    <div className="row d-flex justify-content-center">
                        <span className="text-white h3 ml-3 font-weight-bolder titulos">Artistas mais curtidos</span>
                    </div>
                    <div className="row mt-1 justify-content-center">
                        {/* <span className="text-white">Artistas mais curtidos</span> */}
                        {artists.map(artist => (
                            <div className="col-lg-3 col-sm-6 col-9" key={artist.id}>
                                <Link to={`/artist/${artist.id}`} ><Cards element = {artist} /></Link>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
