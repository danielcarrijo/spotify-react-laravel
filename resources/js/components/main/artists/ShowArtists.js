import React, { Component } from 'react'
import axios from 'axios'
import Title from  './components/Title'
import Songs from  './../songs/Songs'
export class ShowArtists extends Component {
    constructor(props){
        super(props)
        this.state = {
            artists: {},
            songs: []
        }
    }
    componentDidMount() {
        const artistsId = this.props.match.params.id;
        axios.get(`/api/artist/${artistsId}`).then(response => {
            // console.log(response.data)
            this.setState({
                artists: response.data,
                songs: response.data.songs,
            })
        })
    }
    render() {
        const { artists, user } = this.state
        const songs = this.state.songs
        let result = songs.map(song => song.filename);
        return (
            <div style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
                <Title artists = {artists} user={user}/>
                <div style={{background: '#121212', height:'300px'}} id="songs">
                    <div className="container">
                        <div className="container mt-2">
                            <div className="row">
                                <div className="bg-white rounded-circle" width="10px">
                                    <i className="fas fa-play-circle text-success" style={{fontSize: '45pt'}} onClick={() => this.props.handleSound(result)}></i>
                                </div>
                            </div>
                        </div>
                        <Songs songs={this.state.songs} array = {result} artists={artists} handleSound = {this.props.handleSound}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowArtists
