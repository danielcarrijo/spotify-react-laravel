import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cards from './../../main/frontpage/Cards'
export class SearchArtist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        }
        
    }
    componentDidMount() {
        axios.get('/api/artist').then(response => {
            this.setState({
                artists: response.data
            })
        })
    }
    render() {
        const { artists } = this.state
        let filteredArtists = (this.props.filteredArtists(artists))
        filteredArtists = filteredArtists.slice(0,4)
        return (
            <div className="container">
                <div className="row justify-content-center justify-content-md-start my-3">
                    <span className="text-white h3 ml-3 font-weight-bolder titulos">Artistas</span>
                </div>
                <div className="row justify-content-center justify-content-md-start mt-1">
                    {filteredArtists.map( artist => (
                        <div className="col-lg-3 col-sm-6 col-9" key={artist.id}>
                            <Link to={`/artist/${artist.id}`} ><Cards element = {artist} /></Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default SearchArtist
