import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Cookies from 'js-cookie'
import AlltheSongs from './components/AlltheSongs';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor:'transparent',
    width: '100vw',
    border : 'none',
    outline: 'none',
    padding: theme.spacing(2, 4, 3),
  },
  backDrop : {
      background : 'rgba(0,0,0,.9)'
  }
}));

export default function AddSong(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(1)
    setOpen(false);
  };
  const [search, setSearch] = useState('')



  return (
    <div className="ml-auto">
        <div className="bg-white rounded-circle " width="10px" onClick={handleOpen}>
            <i className="fas fa-plus-circle text-success" style={{fontSize: '45pt'}}></i>
        </div>
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
          classes: {
              root: classes.backDrop
          } 
        }}
      >
        <Fade in={open}>
          <div className={`container-fluid ${classes.paper}`}>
          <div className="row justify-content-center">
              <span className="text-white h1 mb-5"  onClick={handleClose}>X</span>
            </div>
            <div className="row justify-content-center">
                <h2 id="transition-modal-title" style={{color: 'white', fontWeight:'bolder', fontSize:'30pt'}}>Adicionar música</h2>
            </div>
            <div className="row p-4 justify-content-center" style={{background: '#282828', width: '100vw', marginLeft: -30}}>
                <div className="col-8">
                    <label htmlFor="playlist" style={{fontSize:'12pt', fontWeight: 'bolder'}}> Nome da música</label>
                    <br />
                    <input 
                        type="text"
                        style={{background: 'transparent', border: 'none',fontSize:'30pt', fontWeight: 'bolder', outline:'none',}}
                        name="search"
                        className="text-white"
                        placeholder="Nome a música"
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="row justify-content-center align-items-start mt-5" style={{height: '300px'}}>
                    <AlltheSongs search={search} playlistsongs={props.playlistsongs} playlistId = {props.playlistId} close={handleClose} handleAddSong = {props.handleAddSong} handleDeleteSong={props.handleDeleteSong}/>
                
            </div>

            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}




const button = {
    border : 'none'
}
const subtitle = {
    fontSize : '11pt',
    fontWeight : 'bolder', 
}

const square = {
    background: '#cecece',
    fontSize: '18pt',
    color: 'black',
    minHeight: '25px',
    minWidth: '25px',
    maxHeight: '25px',
    maxWidth: '25px'
}