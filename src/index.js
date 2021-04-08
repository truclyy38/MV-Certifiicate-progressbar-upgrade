import React from 'react';
import ReactDOM from 'react-dom';
import { MVCertifiedCenter } from './mvCertifiedCenter';
import {data} from "./mvCertifiedData";
import { TestMiniBar } from './testBarMain/testMiniBar';

const CertifiedMain =()=>{
    return(
        <div className="contain-box">
        <TestMiniBar/>
        </div>
    );
}

ReactDOM.render(
    <CertifiedMain />,
    document.getElementById('root')
)