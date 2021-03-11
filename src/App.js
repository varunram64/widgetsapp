import React, { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Route from './components/Route';

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework."
    },
    {
        title: "Why use React?",
        content: "React is favourite JS library among students."
    },
    {
        title: "How do you use React?",
        content: "We use react by creating components."
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "Shade of Blue",
        value: "blue"
    }
];

// Not recommended
// const showAccordion = () => {
//     if(window.location.pathname === '/'){
//         return <Accordion items={items} />
//     }
// };

// Not recommended
// const showList = () => {
//     if(window.location.pathname === '/list'){
//         return <Search />
//     }
// };

// Not recommended
// const showDropDown = (selected, setSelected) => {
//     if(window.location.pathname === '/dropdown'){
//         return <Dropdown options={options} 
//         selected={selected} 
//         onSelectedChange={setSelected}
//         label="Select a color"  />
//     }
// };

// Not recommended
// const showTranslate = () => {
//     if(window.location.pathname === '/translate'){
//         return <Translate />
//     }
// };

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
    <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown options={options} 
            selected={selected} 
            onSelectedChange={setSelected}
            label="Select a color" />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>
    );
};