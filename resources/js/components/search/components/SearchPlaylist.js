import React, { Component } from 'react'
import axios from 'axios'
import { Link } from  'react-router-dom'
import Cards from './../../main/frontpage/Cards'
export class SearchPlaylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: []
        }
    }
    componentDidMount() {
        axios.get('/api/playlist').then(response => {
            this.setState({
                playlists: response.data
            })
        })
    }
    render() {
        const { playlists } = this.state
        let filteredPlaylists = (this.props.filteredPlaylists(playlists))
        filteredPlaylists = filteredPlaylists.slice(0,4)
        return (
                <div  className="container ">
                    <div className="row justify-content-center justify-content-md-start my-3">
                        <span className="text-white h3 ml-3 font-weight-bolder titulos">Playlists</span>
                    </div>
                    <div className="row mt-1 justify-content-center justify-content-md-start">
                        {filteredPlaylists.map( playlist => (
                            <div className="col-lg-3 col-sm-6 col-9" key={playlist.id}>
                                <Link to={`/playlist/${playlist.id}`} ><Cards element = {playlist} /></Link>
                            </div>
                        ))}
                    </div>
                </div>  
        )
    }
}

export default SearchPlaylist
