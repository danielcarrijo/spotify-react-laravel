import React, { Component } from 'react'
import axios from 'axios'

export class Teste extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs : [],
            search : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        axios.get('api/song').then(response => {
            this.setState({
                songs: response.data
            })
        })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }
    render() {
        const { songs } = this.state
        const filteredSongs = songs.filter(song => {
            return song.title.toLowerCase().includes( this.state.search.toLowerCase())
        })
        console.log(this.filterSongs)
        return (
            <div>
                <input 
                    type="text"
                    name="search"
                    onChange = {this.handleChange}
                    placeholder = "Escreva a música que queira adicionar"
                    className="form-control"
                />
                <span className="text-white">{this.state.search}</span>
                <div>
                    <ul>
                    {filteredSongs.map(song => (
                        <li className= "text-white" key={song.id}>{song.title}</li>
                    ))}
                    </ul>  
                </div>
            </div>
        )
    }
}

export default Teste
