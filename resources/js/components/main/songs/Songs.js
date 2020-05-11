import React, { Component } from 'react'

export class Songs extends Component {
    constructor(props) {
        super(props)
        this.sortArray = this.sortArray.bind(this)
    }

    sortArray(arr, el) {

        return arr.sort(function(x,y){ return x == el ? -1 : y == el ? 1 : 0; });
    }
    render() {
        const songs = this.props.songs
        const artists = this.props.artists
        const array = [];
        return (
            <div className="container mt-2">
                {songs.map((song, index) => (
                    <div className="row align-items-center songs p-2" key={song.id} onClick={() => this.props.handleSound(this.props.array.slice(index))} >
                        <div className="col-1">
                            <i className="fas fa-music" style={{color :'rgba(255,255,255,0.5)'}}></i>
                        </div>
                        <div className="col-11">
                            <div className="container-fluid">
                                <div className="row">
                                    <span className="text-white font-weight-bold" style={{fontSize: '12pt'}}>{song.title}</span>
                                </div>
                                <div className="row">
                                    <span style={{color :'rgba(255,255,255,0.5)', fontSize :'10pt'}}>{artists.name} &bull; {song.title}</span>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}

export default Songs
