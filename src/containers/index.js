import React from 'react'
import { createHashHistory } from "history";
import RouteList from './routers';
const history = createHashHistory();
const Container = () =>{
    return (
        <div>
            <RouteList history={history} />
        </div>
    )
}

export default Container    
