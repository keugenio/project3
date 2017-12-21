import React from 'react';
import Keys from '../../../keys/keys';
import axios from 'axios';
import './AuthLoader.css';
import { Redirect } from 'react-router';

const AuthLoader = () => {
  let accessToken = localStorage.getItem('accessToken')
                    ? localStorage.getItem('accessToken') : '';
  const getAuthCode = () => {
    accessToken === 'ification_code' ? localStorage.clear() : '';
    return window.location.href.match(/[&\?]code=([\w\/\-]+)/) ? window.location.href.match(/[&\?]code=([\w\/\-]+)/)[1] 
    : '';
  }

  const authenticateUser = () => {
    return axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?&client_id=' 
      + Keys.clientId + '&client_secret=' + Keys.clientSecret + '&code=' + getAuthCode())
      .then(response => {
        console.log('finished authenticating')
        accessToken = response.data.slice(13, response.data.indexOf('&'));
        localStorage.setItem('accessToken', accessToken);
        return response.data.indexOf('error')>=0 ? false :
        true
      })
      .catch(error => {
        console.log(error.response);
      })
  }
    authenticateUser()

    if (authenticateUser()) {
      return <Redirect to={'/'} />
    }
    
  return (
  <div className='loadContainer'>
    <div className="ld ld-bounce">
      <img src="https://rawgit.com/ItsOkayItsOfficial/project3/app/assets/images/porthub_icon.png" alt='porthub' className='loadImg'/>
    </div>
  </div>
  )
}

export default AuthLoader;