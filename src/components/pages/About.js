import React from 'react'

function About() {
  return (
  	
    //About
    <React.Fragment>
      <h1 style = {about}>About</h1>
      <div style={about_style}>
      <p>I am a Machine-Learning Enthusiast. I love to play around with Neural-Networks,
      train models and finetune them. I also have a passion of building websites and writing 
      Mahine Learning articles on Medium.</p>

     <p>  When I am not coding, I am either playing football or watching Physics videos on Youtube.</p>
      </div>
    </React.Fragment>
    
  )
}

//paragraph
const about_style =
{
	fontFamily: 'Goudy Old Style',
  fontSize: '24px',
	color: 'black', 

}

//About
const about= 
{fontFamily: "Gill Sans",
color: 'darkblue',
textDecoration: 'underline'
}


export default About;