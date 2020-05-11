import React, { Component } from 'react'
import axios from 'axios'
import Title from  './components/Title'
import Songs from  './../songs/Songs'
export class ShowPlaylist extends Component {
    constructor(props){
        super(props)
        this.state = {
            playlist : {
                
            }, user : {

            },
            songs : [
                {
                    id: '1',
                    title :'A gente fez amor',
                    gender: 'Sertanejo',
                    artist : 'Gusttavo Lima',
                    filename: 'gusttavo_lima/a_gente_fez_amor.mp3'
                }, 
                {
                    id: '2',
                    title :'Milu',
                    gender: 'Sertanejo',
                    artist : 'Gusttavo Lima',
                    filename: 'gusttavo_lima/milu.mp3'
                },
                {
                    id: '3',
                    title :'Solteiro de Novo',
                    gender: 'Sertanejo',
                    artist : 'Wesley Safadão',
                    filename: 'wesley_safadão/solteiro_de_novo.mp3'
                },
                {
                    id: '4',
                    title :'Eu não iria',
                    gender: 'Sertanejo',
                    artist : 'Gusttavo Lima',
                    filename: 'gusttavo_lima/eu_não_iria.mp3'
                },
                {
                    id: '5',
                    title :'Se tem briga tem amor',
                    gender: 'Sertanejo',
                    artist : 'Gusttavo Limae',
                    filename: 'gusttavo_lima/se_tem_briga_tem_amor.mp3'
                }
            ]
        }
    }
    componentDidMount() {
        const playlistId = this.props.match.params.id;
        axios.get(`/api/playlist/${playlistId}`).then(response => {
            console.log(response.data)
            this.setState({
                playlist: response.data,
                user: response.data.user,
            })
        })
    }
    render() {
        const { playlist, user } = this.state
        const songs = this.state.songs
        let result = songs.map(song => song.filename);
        return (
            <div style={{backgroundImage: 'linear-gradient(#505050, #000)'}}>
                <Title playlist = {playlist} user={user}/>
                <div style={{background: '#121212', height:'300px'}} id="songs">
                    <div className="container">
                        <div className="container mt-2">
                            <div className="row">
                                <div className="bg-white rounded-circle" width="10px">
                                    <i className="fas fa-play-circle text-success" style={{fontSize: '45pt'}} onClick={() => this.props.handleSound(result)}></i>
                                </div>
                            </div>
                        </div>
                        <Songs songs={this.state.songs} array = {result} handleSound = {this.props.handleSound}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPlaylist
