import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className='md:ml-5 text-xl'
                style={{ textDecoration: match ? "underline "  : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            
        </div>
    );
};

export default CustomLink;