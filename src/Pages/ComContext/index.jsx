import React from "react";
import { CountProvider } from "./Context";
import Count from "./Count";
import Component from './Component';


const Context = () => {

return(
    <React.StrictMode>
        <CountProvider>
        <Component>
            <Count />
        </Component>
        </CountProvider>
    </React.StrictMode>
    );
}

export default Context;