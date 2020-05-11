import React, { Component } from 'react'
import axios from 'axios'

export class Song extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: {

            },
            artists: []
        }
    }
    componentDidMount() {
        axios.get(`/api/song/${this.props.song.id}`).then(response => {
            this.setState({
                song: response.data,
                artists : response.data.artists
            })
        })
    }
    render() {
        const { song, artists } = this.state
        return (
            <div>
                <div className="row">
                    <span className="text-white font-weight-bold" style={{fontSize: '12pt'}}>{song.title}</span>
                </div>
                <div className="row">
                    <span style={{color :'rgba(255,255,255,0.5)', fontSize :'10pt'}}>
                        {artists.map((artist,index) => (
                            <span key={index}>{artist.name}{index==artists.length - 1 ? ' ' : ', '}</span>
                        ))} 
                        &bull; {song.title}</span>
                </div>
            </div>
        )
    }
}

export default Song
