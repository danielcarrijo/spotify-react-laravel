import React, { Component } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
export class AlltheSongs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            loaded: false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        axios.get('/api/song').then(response => {
            this.setState({
                songs: response.data,
                loaded : true
            })
        })
    }
    
    handleAdd (id) {
        console.log(id)
        console.log(this.props.playlistId)
        axios.get(`/api/playlist_add/${this.props.playlistId}/${id}`, {headers : {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('spotify.jwt')}}).then(response => {
            this.props.handleAddSong(response.data)
            this.props.close()
            
        })
    }
    handleDelete(id) {
        console.log(id)
        console.log(this.props.playlistId)
        axios.get(`/api/playlist_delete/${this.props.playlistId}/${id}`, {headers : {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('spotify.jwt')}}).then(response => {
            this.props.handleDeleteSong(response.data)
            this.props.close()
        })
    }
    render() {
        const { songs } = this.state
        let filteredSongs = songs.filter (song => {
            return song.title.toLowerCase().includes(this.props.search.toLowerCase())
        }) //filtra as músicas através do search
        filteredSongs = filteredSongs.length > 5 ? filteredSongs.slice(0,5) : filteredSongs
        console.log(songs)
        console.log(filteredSongs)
        return (
            <div className="container">
                {!this.state.loaded ? 
                <div className="row justify-content-center align-items-center text-white">
                   <Loader
                        type="ThreeDots"
                        color="#40ff40"
                        height={100}
                        width={100}
                        timeout={10000} //3 secs
                
                    />
                </div> 
                : 
                filteredSongs.map(song => (
                    <div className="row justify-content-center align-items-center" key={song.id}  onClick={() => this.props.playlistsongs.map(playlistsong => playlistsong.id).includes(song.id) ? this.handleDelete(song.id) : this.handleAdd(song.id)}>
                        <div className="col-1">
                            <i className="fas fa-music" style={{color :'rgba(255,255,255,0.5)'}}></i>
                        </div>
                        <div className="col-10">
                            <div className="container-fluid">
                            <div className="row">
                                <span className="text-white font-weight-bold" style={{fontSize: '12pt'}}>{song.title}</span>
                            </div>
                            <div className="row">
                                <span style={{color :'rgba(255,255,255,0.5)', fontSize :'10pt'}}>
                                    {song.artists.map((artist,index) => (
                                        <span key={index}>{artist.name}{index==song.artists.length - 1 ? ' ' : ', '}</span>
                                    ))} 
                                    &bull; {song.title}</span>
                            </div>
                            </div>
                            
                        </div>
                        <div className="col-1">
                            {this.props.playlistsongs.map(playlistsong => playlistsong.id).includes(song.id) ? <i className="fas fa-minus-circle text-danger"></i> : <i className="fas fa-plus-circle text-success"></i>}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default AlltheSongs
