import React from "react";
import { CountProvider } from "./Context";
import Count from "./Count";
import Component from './Component';


const Context = () => {

return(
        <CountProvider>
        <Component>
            <Count />
        </Component>
        </CountProvider>
    );
}

export default Context;