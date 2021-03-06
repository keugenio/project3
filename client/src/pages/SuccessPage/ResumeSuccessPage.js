import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';

class ResumeSuccessScreen extends Component {
  state = {
     html : localStorage.getItem('html')
  }
componentWillMount(){
  this.setState({html:window.localStorage.getItem("html")});
}

  render(){
    console.log('rerender')
      return (
      <div className='successWrapper'>
        <h1 style={{margin: '10px'}}>Success!</h1> 
        <div className='row v-100 '>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center' style={{borderLeft:'0', borderStyle:'solid', borderTop:'0', borderBottom:'0'}}>
              <h4>Access your brand new resume as a PDF:</h4>
              <a href="/temp/resume.pdf" download="your-resume.pdf" className="btn btn-primary" target="blank">download</a>
          </div>
          <div className='col-lg-6 p-3'>
            <h4>Publish your Resume Page to GitHub Pages</h4>
              <ul>
                <li>Host your resume on GitHub to get a free, fully functional 1 page web site. </li>
                <li>Customize your site further and add those changes to GitHub to see your site change in real time.</li>
                <li>What we'll do:
                    <ol>
                        <li><small>Create a GitHub repository named yourAccountName.github.io. (if you don't already have one) </small></li>
                        <li><small>Insert your new portfolio into the repository. </small></li>
                        <li><small>?????</small></li>
                        <li><small>And that's it, your resume will be up and running for future employers to marvel over.</small></li>
                    </ol>
                </li>
                <li> Don't have a Github account? Create one <a href='https://github.com/' rel="noopener noreferrer" target='_blank'> here </a></li>
              </ul>
            <div className='row justify-content-center mt-3'>
              <Link to={'/siteLoader'}><button style={{margin: 'auto'}} className='btn btn-success'> Publish to GitHub </button></Link>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default ResumeSuccessScreen;