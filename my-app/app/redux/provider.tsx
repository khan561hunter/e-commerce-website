"use client";
import React from "react";

import { Provider } from "react-redux";

import store from "../redux/store";

interface ProviderProps{
    children : React.ReactNode;
}

const Prvider : React.FC<ProviderProps> = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
}

export default Prvider;