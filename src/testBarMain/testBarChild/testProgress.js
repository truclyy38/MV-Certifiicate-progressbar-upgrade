import React, { useState, useEffect } from 'react';

export const progresses = [
    { p: "01", head1: "STARTING", head2: "YOUR PROJECT" },
    { p: "02", head1: "DEFINITION ", head2:"AND DISCUSSION " },
    { p: "03", head1: "CONSTRUCTION ", head2:"STAGE" }
]

export function Progress({ signal }) {
    const [progress, setProgress] = useState(progresses[0]);
    var check = 1;
    if (signal == "2") check = 2; else if(signal=="3") check=3;



    useEffect(() => { 
        if (signal == "2") setProgress(progresses[1]) ;
        else if(signal =="3") setProgress(progresses[2]) ;
    }
    );
    

    return (
        <>
            <div className="certified-button-border">
                <div className="certified-button-border-change" id={"certified-button-border-change" + check}>

                </div>
            </div>
            <div className="certified-button-label">
                <p className="label-count">
                    {progress.p}
                </p>
                <p className="label-header">
                    {progress.head1} <br></br>  {progress.head2}
                </p>
            </div>
        </>
    );
}