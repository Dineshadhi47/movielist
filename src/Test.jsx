import React,{ Component, useState } from "react";
const Test = () => {

    const [num, setNum] = useState(0)

    const [name,setName] = useState("")


    const onBtClick = () => {
        const added = num +1 ;
        setNum(added)
    }



    return (
        <div>
            <div className="title" > The developer {num}</div>
            <button onClick={onBtClick} >Click Me</button>
        </div>
    )

}

export default Test;
