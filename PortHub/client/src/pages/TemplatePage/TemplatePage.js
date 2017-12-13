import React from "react";
import   './TemplatePage.css';
import Template from './Template';
import Resumes from './Resumes.json'
import {Col} from '../../components/Grid'


const TemplatePage = ({ type, children }) => {
if (type === 'resume'){
  return(
    <div>
    <h1> create your {type} </h1>
    <Col size='lg-12' className="d-flex flex-row flex-wrap justify-content-center">
      {Resumes.map((resume) => {
        return <Template key={resume.img} img={resume.img}/>
        })
      }
    </Col>
  </div>
  )
} else {
  return(
    <p> create your site </p>
  )
}
}
export default TemplatePage;