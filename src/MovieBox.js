import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3" data-testid="movie-card">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} alt="" data-tstid="movie-poster"/>
              <div className="card-body" data-testid="movie-card">
                    <h4 data-testid="movie-title">{title}</h4>
                    <h5 data-testid="vote-average">IMDb: {vote_average}</h5>
                    <h6 data-testid="movie-release-date">Release Date: {release_date}</h6>
                    <br></br>
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}} src={API_IMG+poster_path} alt="" />
                      <h3 data-testid="movie-title">{title}</h3>
                      <h4 data-testid="vote-average">IMDb: {vote_average}</h4>
                      <h5 data-testid="movie-release-date">Release Date: {release_date}</h5>
                      <br></br>
                      <h6 data-testid="overview">Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;