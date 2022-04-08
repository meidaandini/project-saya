import React from "react";
import { useCountContext } from "./Context";

const Component = ({ children }) => {
    const { toggle, handleTheme } = useCountContext()
    return (
        <>
            <div className="count-wrapper" style={{ background: (toggle ? '#f56161' : '#7fee5d') }}>{children}</div>
            <button className="btn" onClick={handleTheme}>Change Theme</button>
        </>
    );
};
export default Component;