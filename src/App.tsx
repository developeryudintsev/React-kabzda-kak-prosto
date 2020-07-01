import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
// import OnOff from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
// import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
// import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";

function App() {
    return (
        <div>
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<SelfControlledAccordion titleValue={'Menu'}/>*/}
            {/*<SelfControlledAccordion titleValue={'Users'}/>*/}
            {/*<UnControlledRating value={0}/>*/}
            {/*<UnControlledRating value={1}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            <AppTitle title={'This is App component'}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <AppTitle title={'This is App component2'} />
        </div>
    );
}

type AppTitleType = {
    title: string;
}

function AppTitle(props: AppTitleType) {
    return (
        <div>{props.title}</div>
    )
}

export default App;
