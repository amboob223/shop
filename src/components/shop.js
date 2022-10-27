import React from 'react';

import Card from "./Card";
import { data } from "./cardData"
// import { useState } from "react";

// this is the component that will hold all the cards and most likeley make the request we nned to get the up to date info

function Shop() {

    //now we add state to scroll throgugh using a button or we can put all on the screen and let the person chopose from there
    // const [idx, setIdx] = useState(0)
    const idx = 0;
    // const next = () => {
    //     if (idx < data.length - 1) {
    //         setIdx(idx + 1)
    //     }
    // }

    // function last() {
    //     if (idx > 0) {
    //         setIdx(idx - 1)
    //     }
    // }



    return (<div className='mis'>

        <Card
            img={data[idx].img}
            name={data[idx].Name}
            price={data[idx].Price}
            Description={data[idx].Description}
        />,
        <Card
            img={data[idx + 1].img}
            name={data[idx + 1].Name}
            price={data[idx + 1].Price}
            Description={data[idx + 1].Description}
        />,
        <Card
            img={data[idx + 2].img}
            name={data[idx + 2].Name}
            price={data[idx + 2].Price}
            Description={data[idx + 2].Description}
        />
        {/* 
        <button onClick={next}>next</button>
        <button onClick={last}>last</button> */}

    </div>
    )
}

export default Shop