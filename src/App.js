import React, { useEffect } from 'react';
import logo1 from './logoq.svg';
import youtube from './youtube.svg';
import spotify from './spotify.svg';
import pentagram from './pentagram.svg';
import chevron from './chevronup.svg';
import './App.scss';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';


function App() {

    useEffect(() => {
        const logo = document.getElementById('logo');
        const container = document.getElementById('ButtonContainer');
        const spacer = document.getElementById('SpacerContainer');
        const moveInDown = new KeyframeEffect(
            logo, [
                { transform: `translateY(-100%)`, opacity: `0%` },
                { transform: 'translateY(0%)', opacity: `100%` }
            ], {duration: 2000, fill: 'forwards', easing: 'ease-in-out'}
        )

        const fadeIn = new KeyframeEffect(
            spacer, [
                { opacity: `0%` },
                { opacity: `100%` }
            ], {duration: 2000, fill: 'forwards', easing: 'ease-in-out'}
        )


        const moveInUp = new KeyframeEffect(
            container, [
                { transform: `translateY(150%)`, opacity: `0%` },
                { transform: 'translateY(0%)', opacity: `100%` }
            ], {duration: 2000, fill: 'forwards', easing: 'ease-in-out'}
        )

        const moveInDownAnim = new Animation(moveInDown, document.timeline);
        const fadeInAnim = new Animation(fadeIn, document.timeline);
        const moveInUpAnim = new Animation(moveInUp, document.timeline);
        moveInDownAnim.play();
        fadeInAnim.play();
        moveInUpAnim.play();
    }, [])



    useEffect(() => {
        let target = document.getElementById("logo");

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    document.querySelector('.SmallCircle').classList.remove('hideBtn');
                } else {

                    document.querySelector('.SmallCircle').classList.add('hideBtn');
                }

            })
        }

        let observer = new IntersectionObserver(callback);
        observer.observe(target);
        console.log(target);

    }, [])

    let btn = document.getElementsByClassName('BtnMain');
    console.log(btn.namedItem);


    return ( 
        <div className = "App" >
        <div className="SmallCircle" id='ScrollToTop' onClick={() => document.querySelector('.Content').scrollIntoView({behavior: 'smooth'}) }>
          <img src={chevron}/>
        </div>

        <header className = "App-header" >
        <div className = 'Content' > {
            /* <nav className='Navbar'> 
                      <button>
                        s
                      </button>
                      </nav> */
        }

        <img src={logo1} className="App-logo" alt="logo" id='logo'/>
        <div className='SpacerContainer' id='SpacerContainer' >
        <div className='Spacer'/>
        <img className='Pentagram'/> 
        { /* <div className='Spacer' id='endSpacer'/> */ }

        </div> 
        <nav className='ButtonContainer' id ='ButtonContainer' >
        <div className='BtnMain' alt="learn more about us" onClick={() => document.getElementById('AboutUs').scrollIntoView({ behavior: 'smooth' }) }>
        <h5> About </h5> 
        </div >
        <a href ='https://www.youtube.com/' target='_blank'> <div className='BtnMain' alt="listen on youtube"> <img className='Icon' src = {youtube}/></div> </a> 
        <a href = 'https://www.youtube.com/' target='_blank'> <div className='BtnMain' alt="listen on spotify"> <img className = 'Icon' src={spotify}/></div> </a>
        <div className ='BtnMain' alt="scroll to contact info" onClick = {() => document.getElementById('ContactUs').scrollIntoView({ behavior: 'smooth' }) }> <h5> Contact Us </h5></div>
        </nav>
        </div> 
        </header> 
        <div className ='PseudoFooter' id='PseudoFooter'></div> 
        <AboutUs/>
        <ContactUs/>
        </div>

    );
}

export default App;