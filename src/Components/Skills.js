import React from 'react'
import '../App.css'
import RemoveIcon from '@material-ui/icons/Remove';
import adobe_xd from '../Assests/adobe-xd.png'
import adobe_i from '../Assests/adobe-i.png'
import adobe_p from '../Assests/adobe-p.png'
import figma from '../Assests/figma.png'

function Skills() {

    return (
        <div id="Skills">
            <div className="line">
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <h3 style={{ margin: "0 1rem" }}>Development Skills</h3>
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
            </div>

            <div className="Development-skills"  >
                <i class="fab fa-html5 skills html5" style={{ color: "#dd4b25", padding: "14px 23px " }}></i>
                <i class="fab fa-css3 skills css3" style={{ color: "#29a3d6" }}></i>
                <i class="fab fa-js-square skills js" style={{ color: "#f5d33c", padding:"14px 20px" }}></i>
                <i class="fab fa-react skills react" style={{ color: "#5ed3f3" }} ></i>
                <i class="fab fa-github skills github" style={{ color: "#302f2f" }}></i>
                <i class="fab fa-linux skills linux" style={{ color: "#f7b20c", padding:"14px 17px" }}></i>
                <i class="fab fa-docker skills docker" style={{ color: "#0997e5", padding: "14px 10px" }}></i>
                <i class="fas fa-dharmachakra skills Kuber" style={{ color: "#2f73db" }}></i>
                <i class="fab fa-bootstrap skills bootstrap" style={{ color: "#8210f5", padding:"14px 20px" }}></i>
                <i class="fab fa-npm skills npm" style={{ color: "#c53635", padding: "14px 10px" }}></i>
                <i class="fab fa-node skills nodejs" style={{ color: "#7fc728", padding: "14px 10px" }}></i>
                <i class="fab fa-rust skills rust" style={{ color: "#000000" }}></i>
            </div>

            <div className="line">
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <h3 style={{ margin: "0 1rem" }}>Designing Skills</h3>
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
            </div>


            <div className="Designing-skills">

                <img className="D-skills adobe-xd" src={adobe_xd} alt="" />
                <img className="D-skills adobe-p" src={adobe_p} alt="" />
                <img className="D-skills adobe-i" src={adobe_i} alt="" />
                <img className="D-skills figma" src={figma} alt="" style={{ padding: "14px 25px" }} />

            </div>
        </div>
    )
}

export default Skills
