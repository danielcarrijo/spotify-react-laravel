import React, { Component } from 'react'
import Song from '../../main/songs/Song'
export class SearchSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }
    componentDidMount() {
        axios.get('/api/song').then(response => {
            this.setState({
                songs: response.data
            })
        })
    }
    render() {
        const { songs } = this.state
        let filteredSongs = (this.props.filteredSongs(songs))
        filteredSongs = filteredSongs.slice(0,3)
        return (
            <div>
                {filteredSongs.map((song, index) => (
                    <div className="row align-items-center songs p-2" key={song.id} onClick={() => this.props.handleSound(song)} >
                        <div className="col-1">
                            <i className="fas fa-music" style={{color :'rgba(255,255,255,0.5)'}}></i>
                        </div>
                        <div className="col-11">
                            <div className="container-fluid">
                                <Song song={song} />
                            </div>
                            
                        </div>
                    </div>
                ))}   
            </div>
        )
    }
}

export default SearchSong
