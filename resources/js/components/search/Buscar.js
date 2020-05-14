import React, { Component } from 'react'
import axios from 'axios'
import SearchPlaylist from './components/SearchPlaylist'
import SearchSong from './components/SearchSong'
import SearchArtist from './components/SearchArtist'
import SearchGender from './components/SearchGender'
export class Buscar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topSong : null,
            topArtist: null,
            topPlaylsit : null
        }
        this.handleSong = this.handleSong.bind(this)
        this.handleArtist = this.handleArtist.bind(this)
        this.handlePlaylist = this.handlePlaylist.bind(this)
    }    
    
    handleSong(song) {
        this.setState({
            topSong : song
        })
    }
    handleArtist(e) {
        
    }
    handlePlaylist(e) {
        
    }
    render() {
        const filteredResults = (array) =>  array.filter (item => {
            return item.title != undefined ? item.title.toLowerCase().startsWith(this.props.search.toLowerCase()) : item.name.toLowerCase().startsWith(this.props.search.toLowerCase())
        })
        return (
            <div style={{background: "#202020"}} className= "mainPage" id="songs">
                <div className="container">
                    <div className="row justify-content-center justify-content-md-start mt-2">
                        <div className="col-9 col-md-6 mt-2">
                            <div className="row justify-content-center justify-content-md-start my-3">
                                <span className="text-white h3 ml-3 font-weight-bolder titulos">Melhor resultado</span>
                            </div>
                            <div className="card rounded" style={{background : "#505050"}}>
                                <div className="card-body">
                                    <div className="row align-items-center" >
                                        <div className="col-4">
                                            <img src = "/img/none.PNG" width="145px"/>
                                        </div>
                                        <div className="col-12 col-md-6 ml-auto">
                                            Música tal
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 col-md-6 mt-2">
                            <div className="row justify-content-center justify-content-md-start my-3">
                                <span className="text-white h3 ml-3 font-weight-bolder titulos">Músicas</span>
                            </div>
                            <SearchSong filteredSongs = {filteredResults} handleSound = {this.props.handleSound}/>
                        </div>
                    </div>
                </div>
                <SearchArtist filteredArtists = {filteredResults} />
                <SearchPlaylist filteredPlaylists = {filteredResults} />
                {/* <SearchGender filteredGenders = {filteredResults} /> */}
            </div>
        )
    }
}

export default Buscar
