import { useState, useEffect } from 'react'
import { Herosection } from '../Herosection/hero-section'
import { Header } from '../../header/theme/theme'
import { Footer } from '../footer/footer';
import { Projects } from '../projects/projects';
import { Skills } from '../skillsset/skills';

export let Mainpage=()=>{
    const[darkmode,setdark]=useState(false);
    const[color,setcolor]=useState("beige");
    const[textcolor,settextcolor]=useState("#333");

    useEffect(() => {
        // Set theme class on root element
        document.documentElement.setAttribute('data-theme', darkmode ? 'dark' : 'light');
    }, [darkmode]);

    return(
        <div className={darkmode ? 'dark' : 'light'}>
            <Header 
                setcolor={setcolor} 
                color={color} 
                setdark={setdark} 
                dark={darkmode} 
                settextcolor={settextcolor} 
                textcolor={textcolor} 
            />
            <Herosection 
                color={color} 
                textcolor={textcolor}
            />
            <Projects 
                color={color} 
                textcolor={textcolor}
            />
            <Skills 
                color={color} 
                textcolor={textcolor}
            />
            <Footer />
        </div>
    )
}