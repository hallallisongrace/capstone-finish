import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./burger.css"
import { Link } from 'react-router-dom';

const Burger = () => {

  
return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid bg-light">
      <a className="navbar-brand" to="#">Cincy Travels</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-center navbar-nav-scroll" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 bg-light">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" to="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/add">Add Attractions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/attractions">View Attractions</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Seasons
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><a className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/spring">Spring</a></li>
              <li><a className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/summer">Summer</a></li>
              <li><a className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/fall">Autumn</a></li>
              <li><a className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/winter">Winter</a></li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Destinations
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" to="https://wandercincinnati.com/2019/12/01/over-the-rhine-cincinnati/">Over the Rhine</a></li>
              <li><a className="dropdown-item" to="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/">Smale Riverfront Park</a></li>
              <li><a className="dropdown-item" to="https://www.downtowncincinnati.com/">Downtown</a></li>
              <li><a className="dropdown-item" to="https://www.meetnky.com/">Covington/Northern Kentucky</a></li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Experiences
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" to="https://www.citybeat.com/arts-culture">Culture</a></li>
              <li><a className="dropdown-item" to="https://www.tripadvisor.com/Attractions-g5503747-Activities-c61-The_Cincinnati_Region.html">Outdoors</a></li>
              <li><a className="dropdown-item" to="https://photos.citybeat.com/25-essential-foods-every-cincinnati-visitor-should-try/?slide=1&admin-ajaxwew">Food</a></li>
              <li><a className="dropdown-item" to="https://anniewearsit.com/cincinnati-official-travel-guide/">Luxury</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success bg-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>
)
}
export default Burger

