import React from "react";
import moon from './moon.png';
import sun from './light.png';

export default function Navbar(props){
  const modeSwitchStyle= {
    backgroundColor: props.mode==='light'?'#495057':'#adb5bd',
  }
  const textStyle = {
    color: props.mode==='light'?'#333':'#d5e4dc'
  }
      return (
        <nav className={`navbar navbar-expand-lg navbar-height bg-${props.mode==='light'?'success':'black'} `} >
        <div className="container-fluid">
          <a className="navbar-brand" style={textStyle} href="/"><b>{props.title}</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={textStyle} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" style={textStyle} aria-current="page" href="/">About</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" style={modeSwitchStyle}/>
            {/* <label className="form-check-label" style={textStyle} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark':'Light'}Mode</label> */}
            <label className="form-check-label" style={textStyle} htmlFor="flexSwitchCheckDefault">
              <img src={props.mode==='light'?moon:sun} style={{width:30,height:30}}alt="hii"/>
            </label>
          </div>
          </div>
        </div>
      </nav>
    );
}