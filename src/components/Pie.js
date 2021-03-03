import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import './Pie.sass'

const calcCircumference = (element) => Math.round(2 * Math.PI * element.getAttribute("r"), 2)

function Pie({ value, name }) {

    const circleRef = useRef();

    useEffect(() => {
        circleRef.current.setAttribute("r", window.innerWidth > 780 ? "60" : "53")
        var circumference = calcCircumference(circleRef.current);

        gsap.fromTo(".Pie__svg", {
            duration: 1,
            opacity: 0,
            ease: "power2.inOut"
        }, {
            opacity: 1
        })
        gsap.fromTo(circleRef.current, {
            duration: 4,
            strokeDashoffset: circumference,
            strokeDasharray: `${circumference} ${circumference}`,
            ease: "power2.inOut"
        }, {
            strokeDashoffset: circumference - value/100*circumference
        })
    }, [value])

    return (
        <div className="Pie">
            {/* <div className="Pie__container">
                <div className="Pie__container-inner"></div>
            </div> */}
            <span className="Pie__name">{name}<br/>{value}%</span>
            <svg className="Pie__svg">
                <circle className="Pie__circle" ref={circleRef} stroke="url(#grad3)" cx="50%" cy="50%"></circle>
            </svg>
        </div>
    )
}

export default Pie
