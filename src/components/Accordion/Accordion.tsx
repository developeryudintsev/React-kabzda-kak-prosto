import React from "react";

type AccordionType = {
    titleValue: string;
    collapsed: boolean;
}

function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed&&<AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string;
}

const AccordionTitle = function (props: AccordionTitleType) {
    return (
        <h3>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;

//=============================================
// import React from "react";
//
// type AccordionType = {
//     titleValue: string;
//     collapsed: boolean;
// }
//
// function Accordion(props: AccordionType) {
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//             {!props.collapsed &&<AccordionBody/>}
//         </div>
//     )
// }
//
// type AccordionTitleType = {
//     title: string;
// }
//
// const AccordionTitle = function (props: AccordionTitleType) {
//     return (
//         <h3>{props.title}</h3>
//     )
// }
//
// const AccordionBody = () => {
//     return (
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     )
// }
//
//
// export default Accordion;