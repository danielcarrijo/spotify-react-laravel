import React, { Component } from 'react'
import axios from 'axios'
import Title from  './components/Title'
import Songs from  './../songs/Songs'
import Cookies from 'js-cookie'
import AddSong from './AddSong'
export class ShowPlaylist extends Component {
    constructor(props){
        super(props)
        this.state = {
            playlist : {
                
            }, user : {

            },
            songs: [],
            loaded: false
        }
        this.handleAddSong = this.handleAddSong.bind(this)
        this.handleDeleteSong = this.handleDeleteSong.bind(this)
    }
    componentDidMount() {
        const playlistId = this.props.match.params.id;
        axios.get(`/api/playlist/${playlistId}`).then(response => {
            console.log(response.data.songs)
            this.setState({
                playlist: response.data,
                user: response.data.user,
                songs: response.data.songs,
                loaded: true
            })
        }).catch(err => {
            console.log(err)
            window.location.href='/'
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id != this.props.match.params.id) {
            const playlistId = this.props.match.params.id;
            axios.get(`/api/playlist/${playlistId}`).then(response => {
                console.log(response.data.songs)
                this.setState({
                    playlist: response.data,
                    user: response.data.user,
                    songs: response.data.songs,
                    loaded: true
                })
            }).catch(err => {
                console.log(err)
                window.location.href='/'
            })
        }
    }

    handleAddSong(song) {
        const songs = this.state.songs
        songs.push(song)
        this.setState({
            songs: songs 
        }) 
    }
    handleDeleteSong(deletedSong) {
        const songs = this.state.songs
        songs.splice(songs.map(song => song.id).indexOf(deletedSong.id),1)
        this.setState({
            songs : songs
        })
    }
    render() {
        const { playlist, user } = this.state
        const songs = this.state.songs
        let result = songs.map(song => song.filename);
        return (
            <div style={{backgroundImage: 'linear-gradient(#505050, #000)'}}>
                <Title playlist = {playlist} user={user}/>
                <div style={{background: '#121212', height:'262px'}} id="songs">
                    <div className="container">
                        <div className="container mt-2">
                            <div className="row">
                                <div className="bg-white rounded-circle" width="10px">
                                    <i className="fas fa-play-circle text-success" style={{fontSize: '45pt'}} onClick={() => this.props.handleSound(result)}></i>
                                </div>
                                {Cookies.get('spotify.jwt')!=null && JSON.parse(Cookies.get('spotify.user')).id == user.id ? 
                                    <AddSong playlistsongs = {songs} playlistId = {playlist.id} handleAddSong={this.handleAddSong} handleDeleteSong={this.handleDeleteSong}/>
                                : ''}
                                
                            </div>
                        </div>
                        <Songs songs={this.state.songs} array = {result} handleSound = {this.props.handleSound}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPlaylist
