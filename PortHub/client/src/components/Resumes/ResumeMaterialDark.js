import React from 'react';
import moment from 'moment';

export const ResumeMaterialDark = ({contact, experience, education, skills, portfolio, clicked }) => {
  	let skillSection = skills.map((skill) => {
          return (
        	`${skill.skill}</br>`
          )
        })
	skillSection = skillSection.join('');
  	let experienceSection = experience.map((experience) => {
			return (
              ` <div class="card card-body mb-2">
                    <p><b>${experience.employer}</b></br>
                    ${moment(experience.startDate).format('MM/YYYY')} - ${moment(experience.endDate).format('MM/YYYY')}              
                    <i>${experience.title}</i></br>
                    ${experience.duties}</br>
                    </p>
                </div>`)   
    })
    experienceSection = experienceSection.join('');
  	let educationSection = education.map((education) => {
        return 	(		
            `<div class="card card-body mb-2">
                <p>	<b>${education.major}</b><br/>
                    <i>${education.schoolName}</i><br/>
                    ${moment(education.startDate).format('MM/YYYY')} - ${moment(education.endDate).format('MM/YYYY')}
                </p>
            </div>`)
      })
	  educationSection = educationSection.join('');

	  const img = contact.profilePicture ? "<img src='" + contact.profilePicture + "' class='rounded-circle'></img>" : "";

	const html =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">   
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> 
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">    
    
        <title>${contact.firstName ? contact.firstName:""} ${contact.lastName ? contact.lastName:""} Resume</title>
    </head>
    
    <body>
        <div class="border border-dark">
            <div class="row" style="height:11.5in">
                <div class="col-lg-4 d-flex align-content-around flex-column h-100 " style="background:darkslategray">
                    <div class="image">
                        ${img}
                    </div>
                    <div class="my-auto">
                        <div class="contact text-muted">
                            <h4>Contact</h4>
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>  ${contact.email ? contact.email:""} </br>
                                <i class="fa fa-phone" aria-hidden="true"></i>  ${contact.phone ? contact.phone:""}</br>
                                <i class="fa fa-home" aria-hidden="true"></i>  ${contact ? contact.address:""}</br> 
                                <i class="fa fa-globe" aria-hidden="true"></i>  ${contact ? contact.site:""}</br>
                                <i class="fa fa-github" aria-hidden="true"></i>  ${contact ? contact.github:""}</br>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>  ${contact ? contact.linkedin:""}</br>
                            </p>
                        </div>
                        <div class="text-muted">
                            <h4>Skills</h4>
                            <p>${skillSection}</p>   
                        </div>
                    </div>
                </div>
                <div class="col-lg-8" style="background:gray">
                    <div class="text-left mt-4">
                        <h3>	${contact.firstName ? contact.firstName:""} ${contact.lastName ? contact.lastName:""}</h3>
                        <p>${contact.bio ? contact.bio: ""}</p>
                    </div>
                    <div>
                        <h4>Experience</h4>
                        <div> ${experienceSection}</div>
                    </div>
                    <div>
                        <h4>Education</h4>
                    <div>${educationSection}</div>
                </div>
            </div>
        </div>
    </body>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
        $( function() {
        $( ".slider" ).slider({
            range: "min",
            value: 10,
            min: 1,
            max: 10,
        });
        } );
    </script>
    </html>
            
    <style>
        body{
        height: 11in;
        width: 8.5in;
        margin: auto;
        }
    
    
        .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;   
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        }
    
        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%; 
            background: #4CAF50;
            cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #4CAF50;
            cursor: pointer;
        }
        img{
            height:100%;
            width:100%;
            line-height: 2em;
        }
        p{
            line-height:3em;
        }
    </style>`;

  return (
    <button className="btn btn-primary" onClick={() => clicked(html)}>Submit</button>
  )
}