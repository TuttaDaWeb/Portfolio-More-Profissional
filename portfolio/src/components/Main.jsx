import BackgroundVideo from './../assets/backgound.mp4'
import NavBar from './NavBar'
import Typed from 'typed.js'
import {useEffect, useRef} from 'react'
import './Main.css'

function Main(){

    const desc = "Hello, My Name is Arthur, and I'm 18 Years Old and I'd love to adventure in Freelancing World, I'm Learning about React, HTML, CSS, JS and I intend to study React Native I've been coding since I was 10 Years Old, so This is My Portfolio, I hope you love it and all my works"
    const ref = useRef(null)

    useEffect(()=>{
        const typed = new Typed(ref.current, {
            strings: ["Front-End", "Programmer", "React"],
            backDelay: 400,
            typeSpeed: 150,
            backSpeed: 130,
            loop: true
        })

        return ()=>{
            typed.destroy()
        }
    })

    return(
        <>
            <div className="container">
                <video src={BackgroundVideo} muted loop autoPlay playsInline className='back_video'/>
                <NavBar />
                <div className="content">
                    <h1>Arthur <span ref={ref}></span></h1>

                    <p>{desc}</p>
                    <button href="#">See all my Works</button>
                </div>
            </div>
        </>
    )
}

export default Main;