import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import hero from "./data/hero.json"
import pdf from "../pdf/Resume.pdf"

const Home = () => {
    const typedRef=useRef(null)
    useEffect(()=>{

        const options={
            strings:[
                "Welcome to my Profile",
                "My name is Gurudevi",
                "I'm Fronted Wed Developer",
                "React Js Developer(React Navive)"
            ],
            typeSpeed:50,
            backSpeed:50,
            loop:true,
        }
        const typed=new Typed(typedRef.current,options);
        return ()=>{
            typed.destroy()
        }
    },[])

  return (
    <>
    <div className='container home' id='home'>
        <div className='left ' data-aos="fade-up-right" data-aos-duration="1000">
            <h1 ref={typedRef}>

            </h1>
            <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
        <div className='right'>
            <div className='img ' data-aos="fade-up-right" data-aos-duration="1000
            "><img src= {`/assets/${hero.imgSrc}`} alt="Hero" >
            </img></div>
        </div>
    </div>
      
    </>
  )
}

export default Home
