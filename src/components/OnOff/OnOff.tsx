import React, {useState} from "react";


function OnOff() {

    let [on,setOn]=useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: "inline-block",
        margin: '2px',
        padding: '2px',
        backgroundColor: on? 'green': 'white'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '2px',
        padding: '2px',
        backgroundColor:!on ? 'red': 'white'

    };
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: '10px',
        borderRadius: '5px',
        border: "1px solid black",
        marginLeft: '10px',
        backgroundColor:on ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(!on)}>on</div>
            <div style={offStyle} onClick={()=>setOn(!on)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;



//==========================================
// import React, {useState} from "react";
//
//
// function OnOff() {
//     let [on, setOn] = useState(false)
//
//     const onStyle = {
//         width: '30px',
//         height: '20px',
//         border: "1px solid black",
//         display: "inline-block",
//         margin: '2px',
//         padding: '2px',
//         backgroundColor: on ? 'green' : 'white'
//     };
//     const offStyle = {
//         width: '30px',
//         height: '20px',
//         border: "1px solid black",
//         display: "inline-block",
//         marginLeft: '2px',
//         padding: '2px',
//         backgroundColor: on ? 'white' : 'red'
//     };
//     const indicatorStyle = {
//         display: "inline-block",
//         width: "10px",
//         height: '10px',
//         borderRadius: '5px',
//         border: "1px solid black",
//         marginLeft: '10px',
//         backgroundColor: on ? 'green' : 'red'
//     };
//
//     return (
//         <div>
//             <div style={onStyle} onClick={() => {setOn(true)}}>on</div>
//             <div style={offStyle} onClick={() => {setOn(false)}}>off</div>
//             <div style={indicatorStyle}></div>
//         </div>
//     )
// }
//
//
//
// export default OnOff;