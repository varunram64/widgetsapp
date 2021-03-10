import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APIURL = "https://translation.googleapis.com/language/translate/v2";
const translatekey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState("");
    const [deBouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timertextId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timertextId);
        }; 
    }, [text]);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            const doTranslation = async () => {
                const { data } = await axios.post(APIURL, {}, {
                    params: {
                        q: deBouncedText,
                        target: language.value,
                        key: translatekey
                    }
                });
    
                setTranslated(data.data.translations[0].translatedText);
            };
            
            doTranslation();
        }, 1000);
        
        return () => {
            clearTimeout(timerId);
        };
    }, [language, deBouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;