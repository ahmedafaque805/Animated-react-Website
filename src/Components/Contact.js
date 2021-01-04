import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import '../App.css'
import { CardContent, Card } from '@material-ui/core';

function Contact() {
    return (
        <div id="Contact">

            <div className="line">
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <h3 style={{ margin: "0 1rem" }}>Contact Me</h3>
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
                <RemoveIcon style={{ fontSize: 40 }} />
            </div>

            <div className="C-app">

                <div className="C-left">
                    <h1 className="C-head">Wanna</h1>
                    <h1 className="C-head">Get in</h1>
                    <h1 className="C-head">Touch</h1>
                </div>

                <div className="C-right">
                    <Card className="C-card">
                        <CardContent className="C-card-c">
                            <input className="text" placeholder="Name" />
                            <input className="text" placeholder="Email" />
                            <textarea className="text-a" rows="4" placeholder="Message" />
                            <button className="C-button">Send</button>
                        </CardContent>
                    </Card>
                </div>

            </div>

        </div>
    )
}

export default Contact
