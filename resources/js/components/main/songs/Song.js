import React, { Component } from 'react'
import axios from 'axios'

export class Song extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { song } = this.props
        return (
            <div>
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
        )
    }
}

export default Song
