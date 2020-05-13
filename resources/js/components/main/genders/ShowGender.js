import React, { Component } from 'react'
import axios from 'axios'
import Title from  './components/Title'
import Songs from  './../songs/Songs'
import Loader from 'react-loader-spinner'
export class ShowGender extends Component {
    constructor(props){
        super(props)
        this.state = {
            gender: {},
            songs: []
        }
    }
    componentDidMount() {
        const genderId = this.props.match.params.id;
            axios.get(`/api/gender/${genderId}`).then(response => {
                // console.log(response.data)
                this.setState({
                    gender: response.data,
                    songs: response.data.songs
                })
            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id != this.props.match.params.id) {
            const genderId = this.props.match.params.id;
            axios.get(`/api/gender/${genderId}`).then(response => {
                // console.log(response.data)
                this.setState({
                    gender: response.data,
                    songs: response.data.songs
                })
            })
        }
    }
    render() {
        const { gender } = this.state
        console.log(gender)
        const songs = this.state.songs
        let result = songs.map(song => song.filename);
        return (
            <div> 
                <div>
                    <Title gender = {gender}/>
                    <div style={{background: '#121212', height:'260px'}} id="songs">
                        <div className="container">
                            <div className="container mt-2">
                                <div className="row">
                                    <div className="bg-white rounded-circle" width="10px">
                                        <i className="fas fa-play-circle text-success" style={{fontSize: '45pt'}} onClick={() => this.props.handleSound(songs.slice(0))}></i>
                                    </div>
                                </div>
                            </div>
                            <Songs songs={this.state.songs} array = {result} gender={gender} handleSound = {this.props.handleSound}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ShowGender
