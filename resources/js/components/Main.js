import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cards from './main/frontpage/Cards'
import Sections from './main/frontpage/Sections'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
export class Main extends Component {
    constructor(props) {
        super(props),
        this.state = {
            artists : [],
            playlists: [],
            gender : [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get('api/4artist').then(response => {
            this.setState({
                artists : response.data
            })
        })
        axios.get('api/playlist/').then(res => {
            this.setState({
                playlists : res.data
            })
        })
        axios.get('api/4gender/').then(res => {
            this.setState({
                gender : res.data,
            })
        })
        setTimeout( () => {
            this.setState({
                loaded: true
            })
        },1000)
    }
    render() {
        console.log(this.state.artists)
        const artists = this.state.artists.slice(0,4)
        const playlists = this.state.playlists.slice(0,4)
        const gender = this.state.gender.slice(0,4)
        console.log(playlists)
        return (
            <div style={{background: "#202020"}} className = "mainPage" id="songs">
                
                <div className="container mt-3" style={{display: this.state.loaded ? '' : 'none'}}>
                    <Sections name="artist" title="Artistas mais curtidos" array={artists} />
                    <Sections name="playlist" title="Playlists pra curtir" array={playlists} />
                    <Sections name="gender" title="Gêneros musicais" array={gender} />
                </div>
            </div>
        )
    }
}

export default Main
