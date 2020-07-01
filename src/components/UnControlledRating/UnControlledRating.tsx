import React, {useState} from "react";

export function UnControlledRating() {

    let [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value>1}/>
            <button onClick={()=>setValue(1)}>1</button>
            <Star selected={value>2} />
            <button onClick={()=>setValue(2)}>2</button>
            <Star selected={value>3}/>
            <button onClick={()=>setValue(3)}>3</button>
            <Star selected={value>4}/>
            <button onClick={()=>setValue(4)}>4</button>
            <Star selected={value>5}/>
            <button onClick={()=>setValue(5)}>5</button>
        </div>
    )
}

function Star(props: any) {
    return props.selected ? (<span><s>STAR</s></span>): (<span>STAR</span>)
    // if (props.selected === true) {
    //     return (<span><s>STAR</s></span>)
    // } else {
    //     return (
    //         <span>STAR</span>
    //     )
    // }
}

export default UnControlledRating;
