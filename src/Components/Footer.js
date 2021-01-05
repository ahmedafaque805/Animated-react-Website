import React from 'react'
import '../App.css'

function Footer() {
    return (
        <div>
        
            <footer>
                <div className="F-social">
                <a href="https://www.facebook.com/afaqueahmed.05" class="fab fa-facebook facebook social" />
                <a href="https://www.instagram.com/afaque___ahmed" class="fab fa-instagram instagram social" />
                <a href="https://github.com/ahmedafaque805" class="fab fa-github F-github social" />
                <a href="https://www.facebook.com/afaqueahmed.05" class="fab fa-twitter twitter social"/>
                <a href="https://www.linkedin.com/in/afaque-ahmed-b628601a1" class="fab fa-linkedin-in linkedin social"/>
                <a href="https://stackoverflow.com/users/14726261/afaque-ahmed" class="fab fa-stack-overflow stack social" style={{padding:"6px 9px"}}/>
                </div>


                <div className="copyright">
                 <h5 className="F-head">Designed And Develop by Afaque Ahmed</h5>
                </div>
            </footer>
        </div>
    )
}

export default Footer
