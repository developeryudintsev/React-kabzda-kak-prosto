import React from "react";

type IRating = {
    value: number
}

export function Rating(props: IRating) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

function Star(props: any) {
    if (props.selected === true) {
        return (<span><s>STAR</s></span>)
    } else {
        return (
            <span>STAR</span>
        )
    }
}
