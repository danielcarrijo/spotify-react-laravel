import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Cookies from 'js-cookie'

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
      background : 'rgba(0,0,0,.8)'
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div className="row ml-2 mt-2" onClick={Cookies.get('spotify.jwt')!= null ? handleOpen : e => {window.location.href = '/login'}}>
            <div className="col-2">
                <div className=" d-flex justify-content-center" style={square}>
                    <span style={{marginTop: -8}}>+</span>
                </div>
            </div>
            <div className="col-9 ">
                <span style={subtitle} className="text-white ml-lg-1 ml-xl-0">Criar minha playlist</span>
            </div>
        </div>
        {Cookies.get('spotify.jwt')!= null ? 
        
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
                <h2 id="transition-modal-title" style={{color: 'white', fontWeight:'bolder', fontSize:'30pt'}}>Criar nova playlist</h2>
            </div>
            <div className="row p-4 justify-content-center" style={{background: '#282828', width: '100vw', marginLeft: -30}}>
                <div className="col-8">
                    <label htmlFor="playlist" style={{fontSize:'12pt', fontWeight: 'bolder'}}>Nome da playlist</label>
                    <br />
                    <input 
                        type="text"
                        style={{background: 'transparent', border: 'none',fontSize:'30pt', fontWeight: 'bolder', outline:'none',}}
                        name="playlist"
                        className="text-white"
                        placeholder="Nova Playlist"
                        onChange={props.handleChange}
                    />
                </div>
            </div>
            <div className="row justify-content-center mt-3">
              <button className="rounded-pill mr-5 py-2 px-3" style={{background: 'transparent', border: '1px solid white', fontWeight :"bolder", fontSize: '13pt', color:'white', outline:'none'}}onClick={handleClose} >Cancelar</button>
              <button className="rounded-pill btn btn-success py-2 px-3 " style={{fontWeight :"bolder", fontSize: '13pt'}} onClick={props.handleSubmit}>Continuar</button>
            </div>
            
          </div>
        </Fade>
      </Modal>
      :
      ''
    }
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