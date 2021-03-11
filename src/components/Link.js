import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }

        e.preventDefault();
        window.history.pushState({}, "", href);

        const NavEvent = new PopStateEvent("popstate");
        window.dispatchEvent(NavEvent);
    };

    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    );
};

export default Link;