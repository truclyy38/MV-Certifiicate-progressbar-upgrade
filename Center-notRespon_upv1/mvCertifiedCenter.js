import React from 'react';
import { useState, useEffect } from 'react';
import { data } from "./mvCertifiedData";

export const progresses = [
    { p: "01", head: "THE OFFICIAL MV AGUSTA CETIFICATION" },
    { p: "02", head: "DISCOVER THE BENEFIT" }
]
export function Progress({signal}){
    const [progress, setProgress] = useState(progresses[0]);
    let check=1;
    if(signal=="right") check=2;
    useEffect(()=>{if(signal=="right") setProgress(progresses[1])});
    return (
        <>
            <div className="certified-button-border">
                <div className="certified-button-border-change" id={"certified-button-border-change"+check}>

                </div>
            </div>
            <div className="certified-button-label">
                <p className="label-count">
                    {progress.p}
                </p>
                <p className="label-header">
                    {progress.head}
                </p>
            </div>
        </>
    );
}

export function MVCertifiedCenter() {
    const [object, setObject] = useState(data[0]);

    function changeBackground(){
        if(object==data[0]) {setObject(data[1]);}
        else {
            setObject(data[0]);
        } 
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            changeBackground()
        },5000);
        // animationChange();
    })

    function animationChange1(){
       let i=0;

       var a=document.getElementById("certified-button-border-change1");
       a.classList.add("certified-button-border-changed");
        if (i == 0) {
            document.getElementsByClassName("certified-button-label")[0].classList.add("certified-button-label-change");
            document.getElementsByClassName("certified-button-label")[1].classList.add("certified-button-label-reset");
            i = 1;
            var elem = document.getElementById("certified-button-border-change1");
            var width = 0;
            var id1 = setInterval(frame, 17-0);
            function frame() {
              if (width >= 100) {
                clearInterval(id1);
                a.classList.add("certified-button-border-reset");
                i = 0;
                animationChange2();
              } else {
                width+=0.1;
                elem.style.width = width + "%";
              }  
            }
          }
    }
    function animationChange2(){

        let i=0;
        var a=document.getElementById("certified-button-border-change1");
        var b=  document.getElementById("certified-button-border-change2");
       a.classList.add("label-full");

        document.getElementById("certified-button-border-change2").classList.add("certified-button-border-changed");
        if (i == 0) {
            document.getElementsByClassName("certified-button-label")[1].classList.add("certified-button-label-change");
            document.getElementsByClassName("certified-button-label")[0].classList.add("certified-button-label-reset");
            i = 1;
            var elem = document.getElementById("certified-button-border-change2");
            var width = 0;
            var id2 = setInterval(frame, 17-0);
            function frame() {
              if (width >= 100) {
                clearInterval(id2);
                i = 0;
              } else {
                width+=0.1;
                elem.style.width = width + "%";
              }
            }
          }
    }

    return (
        <>
            <div className="certified-contain-box">
                <h2 className="contain-box-title font1">
                PRE-OWNED PROGRAM
                </h2>
                <div className="certified-center-content">
                    <div className="certified-center-left">
                        <div className="center-left-title font1">
                            {object.title}
                        </div>
                        <p>
                            {object.para1}
                        </p>
                        <p>
                            {object.para2.map((para2_ct) => (
                                <> {para2_ct}   <br></br></>
                            ))}
                        </p>
                    </div>
                    <div className="certified-center-right">
                        <img src={"img/" + object.img} />
                    </div>
                </div>
                <div className="certified-center-button">
                    <div className="certified-center-button-left" onClick={animationChange1}>
                        <Progress signal="left"  />
                    </div>
                    <div className="certified-center-button-right" onClick={animationChange2}>
                        <Progress signal="right"/>
                    </div>
                </div>
            </div>
        </>
    );
}