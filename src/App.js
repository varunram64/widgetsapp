import React, { useState } from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/Dropdown';
import Translate from './components/Translate';

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

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
    <div>
        <Translate />
    </div>
    );
};