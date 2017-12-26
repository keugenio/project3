import React from 'react';
import Aux from '../../../HOCs/Aux'
import './WelcomeMessage.css';

const WelcomeMessage = ({user, logout}) => {
// To DO- Redirect on click to user dashboard
  return (
    <div className='welcomeContainer'>
      <p className='welcomeText'> Welcome, {user.login} </p>
      <li className="nav-item dropdown"> 
        <a className="nav-link dropdown-toggle" id="navBarDropdown" href='#' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={user.avatar_url} alt='user' />
        </a>
        <div className="dropdown-menu pull-left" style={{left:'-126%'}}>
          <a className="dropdown-item" href='#' onClick={logout}>Logout</a>
        </div>
      </li>
    </div>
  )
}

export default WelcomeMessage;