import React from 'react'
import pic2 from '../Assests/pic2.svg'
import RemoveIcon from '@material-ui/icons/Remove';

function About() {
    return (
        <div  id="About" >
            
            <div className="line">
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <h3 style={{ margin: "0 1rem" }}>About Me</h3>
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
            </div>



            <div className="About">
            <div className="a-left">
                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                </p>
            </div>
            <div className="a-right">
                <img className="img2" alt="" src={pic2} width="600px" height="500px" />
            </div>


        </div>


        </div>
    )
}

export default About
