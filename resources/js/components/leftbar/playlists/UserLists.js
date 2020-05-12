import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
export class UserLists extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            playlists : []
        }
    }
    componentDidMount() {
        if(Cookies.get('spotify.jwt') != null) {
            axios.get(`/api/playlist_user`, {headers : {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('spotify.jwt')}}).then(response => {
                this.setState({
                    playlists : response.data
                })
            })
        }
        
    }
    render() {
        const playlists = this.state.playlists
        return (
            <ul style={style} className="mt-3" id="playlistscroll">
                {playlists.map(playlist => (
                    <li key={playlist.id} style={li} className="nav-item">
                        <Link to={`/playlist/${playlist.id}`} style={li}>{playlist.title}</Link>
                    </li>
                ))}
                
            </ul>
        )
    }
}

export default UserLists

const style = {
    background: 'black',
    overflowY: 'scroll',
    marginTop : '0px',
    listStyle : 'none'
}

const li = {
    color: '#cecece'
}
