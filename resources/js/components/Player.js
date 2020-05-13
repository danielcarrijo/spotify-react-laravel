import React, { Component } from 'react'

const getTime = (time)  => {
    if(!isNaN(time)) {
      return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
  }
export class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soundtrack : null,
            played: [],
            status : 'stopped',
            currentTime : 0,
            duration : 0,
            loop : false, 
            title : null,
            volume: "100"
        }
    
        this.handlePause = this.handlePause.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.handleTiming = this.handleTiming.bind(this)
        this.handleLoop = this.handleLoop.bind(this)
        this.handleRestart = this.handleRestart.bind(this)
        this.handleForward = this.handleForward.bind(this)
        this.handleBackward = this.handleBackward.bind(this)
        this.handleVolume = this.handleVolume.bind(this)
    }
    componentDidMount() {
            this.player.addEventListener("timeupdate", e => {
                localStorage.setItem('duration',e.target.duration)
                if(e.target.currentTime == e.target.duration) {
                    if(this.state.loop){
                        this.player.currentTime = 0
                        this.player.play()  
                    }else {
                        if(!this.props.string && this.state.soundtrack.length > 0) {
                            const soundtrack = this.state.soundtrack
                            const played = this.state.played
                            this.player.src = '/api/audio/'+soundtrack[0].filename
                            this.player.play()
                            let title = soundtrack[0].title
                            played.push(soundtrack[0])
                            soundtrack.shift()
                            this.setState({
                                soundtrack : soundtrack,
                                played: played,
                                status: 'playing',
                                title : title
                            })
                        }
                        else {
                            this.setState({
                                status : 'stopped'
                            })
                        }
                    }
                }
                this.setState({
                  currentTime: e.target.currentTime,
                  duration: e.target.duration
                });
            });
        
        if(localStorage.getItem('song')!=null) {
            let sound = localStorage.getItem('song')
            this.player.src = sound
            this.setState({
                duration: localStorage.getItem('duration')
              });
        }
      }
    
      componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => {});
      }    
    componentDidUpdate(prevProps, prevState) {
        let sound = null
        let title = null
        const played = this.state.played
        if(prevProps.soundtrack != this.props.soundtrack)  {
            const soundtrack = this.props.soundtrack
            if(this.props.string) {
                sound = "/api/audio/"+this.props.soundtrack.filename //se for uma música só
                title = this.props.soundtrack.title
            }
            else {
                sound = "/api/audio/"+soundtrack[0].filename //se for uma playlist
                title = soundtrack[0].title
                played.push(soundtrack[0])
                soundtrack.shift() //removo o elemento da lista
            }
            this.setState({soundtrack: soundtrack, played: played, title: title})
        }
            if(sound!=null) {
              localStorage.setItem('song',sound)
              this.player.src = sound;
              this.player.play()
              this.setState({status : 'playing'})
            }        
    }

    handlePause(e) {
        e.preventDefault()
        this.player.pause()
        this.setState({
            status : 'stopped' 
        })
    }

    handlePlay(e) {
        e.preventDefault()
        if(this.props.soundtrack || localStorage.getItem('song')!=null) {
            this.player.play()
            this.setState({
                status : 'playing' 
            })
        }
    }

    handleTiming(e) {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            currentTime : value
        })
        this.player.currentTime = value
    }
    handleLoop(e) {
        e.preventDefault()
        this.setState({
            loop: !this.state.loop
        })
        
    }
    handleRestart(e) {
        e.preventDefault()
        this.player.currentTime = 0
    }

    handleForward(e) {
        e.preventDefault()
        const soundtrack = this.state.soundtrack
        const played = this.state.played
        if(soundtrack!=null && soundtrack.length > 0 ) {
            this.player.src = '/api/audio/'+soundtrack[0].filename
            this.player.play()
            let title = soundtrack[0].title
            played.push(soundtrack[0])
            soundtrack.shift()
            this.setState({
                soundtrack : soundtrack,
                played: played,
                status: 'playing',
                title : title
            })
        }  
    }

    handleBackward(e) {
        e.preventDefault()
        const soundtrack = this.state.soundtrack
        const played = this.state.played
        if(soundtrack!=null && played!=null && played.length > 1) {
            soundtrack.unshift(played.pop())
            let len = played.length - 1
            this.player.src = '/api/audio/'+played[len].filename
            this.player.play()
            let title = played[len].title
            this.setState({
                soundtrack : soundtrack,
                played: played,
                status: 'playing',
                title : title
            })
        }
        
    }

    handleVolume(e) {
        e.preventDefault()
        const { value } = e.target
        this.player.volume = (parseInt(value)/100)
        this.setState({
            volume: value
        })
    }
    render() {
        const currentTime = getTime(this.state.currentTime)
        const duration = getTime(this.state.duration) 
        let slide  = parseInt((this.state.currentTime/this.state.duration)*100)+1
        const { soundtrack, title, played } = this.state
        if(title!=null) {
            localStorage.setItem('title',title)
        }
        return (
            <div className="container-fluid" style={player} id="player">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-3 d-none d-md-block">
                        <div className="container">
                            <div className="row text-white justify-content-start align-items-center">
                                <div className="col-7">
                                    <img src="/img/none.PNG" width="100px" />
                                </div>
                                <div className="col-5">
                                    <span className="text-white font-weight-bold">{localStorage.getItem('title')} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="row mt-3 justify-content-center">
                        <i className="fas fa-backward" style={buttons} onClick={this.handleBackward}></i>
                        <i className="fas fa-step-backward" style={buttons} onClick={this.handleRestart}></i>
                        

                        {this.state.status != 'playing' 
                                        ?
                        <i className="far fa-play-circle" style={{fontSize: '30pt', marginRight:'25px', color: '#cecece'}} onClick= {this.handlePlay}></i>
                                        :
                        <i className="far fa-pause-circle" style={{fontSize: '30pt', marginRight:'25px', color: '#cecece'}} onClick = {this.handlePause}></i>
                        }
                        <i className="fas fa-forward" style={buttons} onClick={this.handleForward}></i>
                        <i className="fas fa-sync-alt" style={{color: this.state.loop ? 'rgb(117,252,117)' : '#cecece', fontSize: '20pt', marginRight : '25px', marginTop: '7px'}}  onClick={this.handleLoop}></i>
                    </div>
                    <div className="row justify-content-center mt-2" >
                        <div className="col-10">
                            <div className="slideContainer">
                                <input type="range" style={{width : '100%', background: 'linear-gradient(90deg, rgb(117,252,117) '+slide+'%, rgb(214,214,214) '+slide+'%)'}} className="slider" name="time" id="time" min="0" max={this.state.duration} value={this.state.currentTime} onChange={this.handleTiming} />
                            </div>
                        </div>
                        <div className="col-2">
                            <span className="text-white">{currentTime}/</span>
                            <span className="text-white">{duration}</span>
                        </div>
                    </div>
                    <audio id="as" ref={ref => this.player = ref} />
                    </div>
                    <div className="col-12 col-md-3 ">
                            <div className="slideContainer d-flex justify-content-center">
                                <i className="fas fa-volume-up mr-2"></i>
                                <input type="range" style={{width : '50%', background: 'linear-gradient(90deg, rgb(117,252,117) '+this.state.volume+'%, rgb(214,214,214) '+this.state.volume+'%)'}} className="slider mt-1" name="volume" id="volume" min="0" max="100" value={this.state.volume} onChange={this.handleVolume} />
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player


const player = {
    background : '#404040',
    marginTop: ''
}

const buttons = {
    color: '#cecece',
    fontSize: '20pt',
    marginRight: '25px',
    marginTop: '7px'
}
