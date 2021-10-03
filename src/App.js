import './App.css';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
function App() {
	const container = useRef(null)
	const venueCard1 = useRef(null)
	const scrollArea= useRef(null)
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			rendered: 'svg',
			loop: false,
			autoplay: false,
			animationData: require('./sunset.json')
		})
		lottie.setSpeed(0.5);
		//lottie.setDirection(-1);
	}, [])
	const handlePlayButton = (()=>{
		lottie.play();
	})
	const handlePauseButton = (()=>{
		lottie.pause();
	})
	const handleTabClicks = (()=>{
		scrollArea.current.scrollTo({
			top: venueCard1.current.scrollHeight * 2,
			behavior: 'smooth'
		})
	})
	const handleScrollEvent = ((event)=>{
		console.log(venueCard1.current.scrollHeight)
		let scrollPositionPercentage = (event.target.scrollTop / 310) * 100;
		scrollPositionPercentage = Math.ceil(scrollPositionPercentage);
		lottie.goToAndStop(scrollPositionPercentage, true)
	})
    return ( 
    	<div className="App">
        <div className="container" ref={container}></div>
        <div>
	        <button onClick={handlePlayButton}>Play Lottie</button> 
	        <button onClick={handlePauseButton}>Pause Lottie</button>
	        <button onClick={handleTabClicks}>Casino</button>
	        <div className="scrollArea" ref={scrollArea} onScroll={handleScrollEvent}>
	        	<div className="venueCard" ref={venueCard1}></div>
	        	<div className="venueCard" ref={venueCard1}></div>
	        	<div className="venueCard" ref={venueCard1}>hello</div>
	        	<div className="venueCard" ref={venueCard1}></div>
	        	<div className="venueCard" ref={venueCard1}></div>
	        	<div className="venueCard" ref={venueCard1}></div>
	        	<div className="venueCard" ref={venueCard1}></div>
	        </div>
    	</div>
        </div>
    );
}

export default App;