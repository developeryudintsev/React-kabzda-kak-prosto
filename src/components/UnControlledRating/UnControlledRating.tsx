import React, {useState} from "react";

type IRating = {
    value: number
}

export function UnControlledRating(props: IRating) {
    

    let [value, setValue] = useState(0);

    return (
        <div>
            <button onClick={() => setValue(0)}>0</button>
            <Star selected={value > 0}/><button onClick={() => setValue(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => setValue(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => setValue(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => setValue(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => setValue(5)}>5</button>
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

export default UnControlledRating;

//=============================
// import React from "react";
//
// type IRating = {
//     value: number
// }
//
// export function UnControlled(props: IRating) {
//     return (
//         <div>
//             <Star selected={props.value > 0}/><button>1</button>
//             <Star selected={props.value > 1}/><button>2</button>
//             <Star selected={props.value > 2}/><button>3</button>
//             <Star selected={props.value > 3}/><button>4</button>
//             <Star selected={props.value > 4}/><button>5</button>
//         </div>
//     )
// }
//
//
// function Star(props: any) {
//     if (props.selected === true) {
//         return (<span><s>STAR</s></span>)
//     } else {
//         return (
//             <span>STAR</span>
//         )
//     }
// }
// export default UnControlled;