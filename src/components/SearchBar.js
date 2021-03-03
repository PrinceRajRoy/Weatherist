import gsap from 'gsap';
import React, { forwardRef, useContext, useRef, useState } from 'react'
import { WeatherContext } from '../context/WeatherContext';
import './SearchBar.sass'

const SearchBar = forwardRef((props, ref) => {

    const [location, setLocation] = useState('Tinsukia');
    const containerRef = useRef();
    const { fetchData, location: loc } = useContext(WeatherContext)

    const handleSubmit = () => {
        if (location !== loc) 
            fetchData(location)
            gsap.to(containerRef.current, {
                top: "20px",
                right: window.innerWidth > 780 ? "20px" : "unset",
                left: window.innerWidth > 780 ? "unset" : "50%",
                transform: window.innerWidth > 780 ? "translate3d(0%, 0%, 0)" : "translate3d(-50%, 0%, 0)"
            })
        
    }

    return (
        <div className="SearchBar" ref={containerRef}>
            <input className="SearchBar__input round" ref={ref} value={location} onChange={(e) => setLocation(e.target.value)} />
            <button className="SearchBar__btn round" onClick={() => handleSubmit()}>Search</button>
        </div>
    )
})

export default SearchBar
