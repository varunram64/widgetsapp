import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    // useEffect(() => {
    //     console.log("Only initialize first time");
    // }, []);

    // useEffect(() => {
    //     console.log("Initialize first time and also at rerender");
    // });

    //Initialize first time and also at rerender when text changes
    useEffect(() => {
        // One way of calling async functions
        // (async () => {
        //     if(term) {
        //         const { data } = await axios('https://en.wikipedia.org/w/api.php', {
        //             params: {
        //                 action: "query",
        //                 list:"search",
        //                 origin: "*",
        //                 srsearch:{term},
        //                 format:"json" 
        //             }
        //         });

        //         setResults(data.query.search);
        //     }
        // })();

        const search = async () => {
            const { data } = await axios('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list:"search",
                    origin: "*",
                    srsearch:{term},
                    format:"json" 
                }
            });

            setResults(data.query.search);
        };

        if(term && !results){
            search();
        }
        else{
            const timeoutid = setTimeout(() => {
                if(term){
                    search();
                }
            }, 1000);
            
            return () => {
                clearTimeout(timeoutid)
            };
        }
    }, [term]);

    const renderedresults = results.map((item) => {
        return (
            <div key={item.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                    target="_blank">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    {/* Never us this piece of code */}
                    <div className="body" dangerouslySetInnerHTML={{ __html: item.snippet }}>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term}
                    onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedresults}
            </div>
        </div>
    );
};

export default Search;