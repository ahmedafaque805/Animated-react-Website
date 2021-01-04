import React from 'react'
import '../App.css'
import pic1 from '../Assests/pic1.svg'
import useWebAnimations, { slideInLeft } from "@wellyshen/use-web-animations";

function Home() {

    const { keyframes, timing } = slideInLeft;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 500, // Delay 1s
            duration: timing.duration * 0.75, // Speed up the animation
        },
    });


    return (
        <div>
        <div className="App"  >
            <div className="h-left">
                <img className="img1" ref={ref} alt="" src={pic1} width="600px" height="500px" />
            </div>
            <div className="h-right">
                <h1 className="heading">Hey there Welcome</h1>
                <p className="para">My name is Afaque Ahmed I am Front-end developer. I love to create aesthetic UI
                   with user centric approach. Thanks for visiting my website have a look at my Portfolio
                   and if you have any querry you can contact me! </p>
            </div>


        </div>
          
        </div>
    )
}

export default Home