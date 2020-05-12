import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cards from './main/frontpage/Cards'
import Sections from './main/frontpage/Sections'
import Cookies from 'js-cookie'
export class Main extends Component {
    constructor(props) {
        super(props),
        this.state = {
            artists : [],
            playlists: [],

        }
    }
    componentDidMount() {
        axios.get('api/artist').then(response => {
            this.setState({
                artists : response.data
            })
        })
        axios.get('api/playlist/').then(res => {
            this.setState({
                playlists : res.data
            })
        })
    }
    render() {
        const artists = this.state.artists.slice(0,4)
        const playlists = this.state.playlists.slice(0,4)
        console.log(playlists)
        return (
            <div style={{background: "#202020", height:'505px'}} id="songs">
                <div className="container mt-3" >
                    <Sections name="artist" title="Artistas mais curtidos" array={artists} />
                    <Sections name="playlist" title="Playlists pra curtir" array={playlists} />
                    
                </div>
            </div>
        )
    }
}

export default Main
