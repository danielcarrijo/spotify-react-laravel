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
            status : 'stopped',
            currentTime : 0,
            duration : null,
            loop : false
        }
    
        this.handlePause = this.handlePause.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.handleTiming = this.handleTiming.bind(this)
        this.handleLoop = this.handleLoop.bind(this)
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
                            console.log('to aqui')
                            const soundtrack = this.state.soundtrack
                            this.player.src = '/api/audio/'+soundtrack[0]
                            this.player.play()
                            soundtrack.shift()
                            this.setState({
                                soundtrack : soundtrack,
                                status: 'playing'
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
        if(prevProps.soundtrack != this.props.soundtrack)  {
            const soundtrack = this.props.soundtrack
            console.log(soundtrack)
            if(this.props.string) {
                sound = "/api/audio/"+this.props.soundtrack //se for uma música só
            }
            else {
                sound = "/api/audio/"+soundtrack[0] //se for uma playlist
                soundtrack.shift() //removo o elemento da lista
            }
            this.setState({soundtrack: soundtrack})
        }
            if(sound) {
              localStorage.setItem('song',sound)
              this.player.src = sound;
              this.player.play()
              this.setState({status : 'playing'})
            }        
    }

    handlePause(e) {
        this.player.pause()
        this.setState({
            status : 'stopped' 
        })
    }

    handlePlay(e) {
        if(this.props.soundtrack || localStorage.getItem('song')!=null) {
            this.player.play()
            this.setState({
                status : 'playing' 
            })
        }
    }

    handleTiming(e) {
        const {name, value} = e.target
        console.log(value)
        this.setState({
            currentTime : value
        })
        this.player.currentTime = value
    }
    handleLoop(e) {
        this.setState({
            loop: !this.state.loop
        })
        
    }
    render() {
        const currentTime = getTime(this.state.currentTime)
        const duration = getTime(this.state.duration) 
        return (
            <div className="container-fluid" style={player} id="player">
                <span>.</span>
                <div className="row">
                    <div className="col-3 d-none d-md-block">
                        <span className="text-white">fdfdf</span>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="row justify-content-center">
                        <i className="fas fa-step-backward" style={buttons}></i>
                        {this.state.status != 'playing' 
                                        ?
                        <i className="far fa-play-circle" style={buttons} onClick= {this.handlePlay}></i>
                                        :
                        <i className="far fa-pause-circle" style={buttons} onClick = {this.handlePause}></i>
                        }
                        <i className="fas fa-sync-alt" style={{color: this.state.loop ? 'green' : '#cecece', fontSize: '30pt', marginRight : '25px'}}  onClick={this.handleLoop}></i>
                    </div>
                    <div className="row justify-content-center mt-2" >
                        <div className="col-12">
                            <input type="range" style={{width : '100%'}} name="time" id="time" min="0" max={this.state.duration} value={this.state.currentTime} onChange={this.handleTiming} />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2" >
                        <div className="col-12">
                            <span className="text-white">{currentTime}/</span>
                            <span className="text-white">{duration}</span>
                        </div>
                    </div>
                    <audio id="as" ref={ref => this.player = ref} />
                    </div>
                    <div className="col-3 d-none d-md-block">
                        <span className="text-white">fdfdf</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player


const player = {
    background : '#282828',
    marginTop: ''
}

const buttons = {
    color: '#cecece',
    fontSize: '30pt',
    marginRight: '25px'
}