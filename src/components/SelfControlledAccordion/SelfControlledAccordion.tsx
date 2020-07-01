import React, {useState} from "react";

type AccordionType = {
    titleValue: string;
}

function SelfControlledAccordion(props: AccordionType) {
    let [collapsed,setCollapsed]=useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/> <button onClick={()=>{setCollapsed(!collapsed)}}>OPEN/CLOSE</button>
            {collapsed &&<AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string;
}

const AccordionTitle = function (props: AccordionTitleType) {
    return (
        <div>
       <h3>{props.title}</h3>
        </div>
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


export default SelfControlledAccordion;