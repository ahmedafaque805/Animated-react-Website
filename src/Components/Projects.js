import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import '../App.css'
import Expense from '../Assests/Expense-traker.png'
import Covid from '../Assests/covid.png'
import Shoe from '../Assests/shoe.png'
import RemoveIcon from '@material-ui/icons/Remove';

function Projects() {
    return (
        <div id="Projects">

            <div className="line">
                <RemoveIcon className="R-line" style={{ fontSize: 40 }} />
                <RemoveIcon className="R-line" style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <h3 style={{ margin: "0 1rem" }}>Projects</h3>
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon className="R-line" style={{ fontSize: 40 }} />
                <RemoveIcon className="R-line" style={{ fontSize: 40 }} />
            </div>


            <Card className="M-card">
                <CardContent className="M-card-c">

                    <Card className="i-card" >
                        <CardContent className="i-card-c">
                            <h3 style={{ backgroundColor: "transparent", justifyContent: "center", display: "flex", fontWeight: "bolder", color: "#343a40" }} >Expense Tracker App</h3>
                            <img className="P-img" src={Expense} alt="" />
                            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "transparent" }}>
                                <a href="http://expense-tracker-project-afaque.surge.sh/" type="button" class="btn btn-dark btn1">Live</a>
                                <a href="https://github.com/ahmedafaque805/Expense-Tracker-Project" type="button" class="btn btn-dark btn1">Github</a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="i-card" >
                        <CardContent className="i-card-c">
                            <h3 style={{ backgroundColor: "transparent", justifyContent: "center", display: "flex", fontWeight: "bolder", color: "#343a40" }} >
                                Covid-19 Tracker App</h3>
                            <img className="P-img" src={Covid} alt="" />
                            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "transparent" }}>
                                <a href="https://covid-19-tracker-afaque.web.app/" type="button" class="btn btn-dark btn1">Live</a>
                                <a href="https://github.com/ahmedafaque805/Covid-19-Tracker" type="button" class="btn btn-dark btn1">Github</a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="i-card" >
                        <CardContent className="i-card-c">
                            <h3 style={{ backgroundColor: "transparent", justifyContent: "center", display: "flex", fontWeight: "bolder", color: "#343a40" }} >
                                Adida Shoes App</h3>
                            <img className="P-img" src={Shoe} alt="" />
                            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "transparent" }}>
                                <a href="https://shoes-app-afaque.web.app/" type="button" class="btn btn-dark btn1">Live</a>
                                <a href="https://github.com/ahmedafaque805/Shoes-App" type="button" class="btn btn-dark btn1">Github</a>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}

export default Projects
