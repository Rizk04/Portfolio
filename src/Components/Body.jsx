import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";

function Body(){
    const fade1 = useSpring({ config:{duration:1300, easing: easings.easeInOutCubic} , from: {opacity: 0, transform: "translateX(-100%)"},opacity: 1 , transform: "translateX(0%)" })
    const fade2 = useSpring({ config:{duration:1400, easing: easings.easeInOutCubic} , from: {opacity: 0, transform: "translateX(-100%)"},opacity: 1 , transform: "translateX(0%)" })
    const fade3 = useSpring({ config:{duration:1500, easing: easings.easeInOutCubic} , from: {opacity: 0, transform: "translateX(-100%)"},opacity: 1 , transform: "translateX(0%)" })
    return(
        <animated.div className="flex flex-col mt-32 ml-48 mb-16">
        
        <animated.div style={fade1}>
        <p className="text-6xl pb-3"> Hello there visitor! </p>   
        </animated.div>
        <animated.div style={fade3}>
        <p className="text-7xl px-48 "> Allow me to introduce myself. </p>      
        </animated.div>

        
        </animated.div>
    )
}

export default Body;