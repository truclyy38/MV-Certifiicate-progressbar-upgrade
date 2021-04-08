import React, { useState, useEffect } from 'react';
import { testdata } from "./testminibarData";
import { Progress } from "./testBarChild/testProgress"


export function TestMiniBar (){   
    const [object, setObject] = useState(testdata[0]); // save information and pic 
    var interval1,intervalid, intervalmax; // this to set three kind of interval: first, center and final
    var barwidth;// this variable use to set the width of bar running from0-> 100

    // set Click event 
    function setClickEvent(id, maxid){
        //* BUG: can not reduce 3 below code into one function
        document.getElementById("boxprocess1").addEventListener("click", function(){
            // reset intervals occuring
            clearInterval(intervalid);
            clearInterval(interval1);
            clearInterval(intervalmax);

            // animation running when u click
            addClickanimation(1,maxid);
            animationchange(id,maxid);
          
        });

        document.getElementById("boxprocess2").addEventListener("click", function(){
            // reset intervals
            clearInterval(intervalid);
            clearInterval(interval1);
            clearInterval(intervalmax);

            addClickanimation(2,maxid);
            animationchange(2,maxid);
           
        });
        document.getElementById("boxprocess3").addEventListener("click", function(){
            // reset intervals
            clearInterval(intervalid);
            clearInterval(interval1);
            clearInterval(intervalmax);

            addClickanimation(3,maxid);
            animationchange(3,maxid);           
        });
    }

    // the function use to set the progress before present full black and the progress after present reset

    function addClickanimation(id, maxid){
        var a,b; 
        document.getElementById("certified-button-border-change"+id).classList.add("certified-button-border-changed");

         for(b=id-1;b>=1; b--){   
            document.getElementsByClassName("certified-button-label")[b-1].classList.add("certified-button-label-change");
            document.getElementById("certified-button-border-change"+b).style.width = 100 + "%";  
            // document.getElementsByClassName("certified-button-border-change")[b-1].classList.add("certified-button-border-full");
        } 
        for(a=id;a<maxid; a++){
            // remove the color of label progress
            document.getElementsByClassName("certified-button-label")[a].classList.remove("certified-button-label-change");
            document.getElementsByClassName("certified-button-border-change")[a].classList.remove("certified-button-border-changed");
        }
    }
   
    function animationchange(id, maxid){       
        // =======================================================================================================================//   
       if(id==1){
           addClickanimation(id,maxid);
        changeintoBackground(id);
        //  defaultid=1: progress bar 1 change, others reset
            //* need to minimize code, first change it into jquery
            //  * dont' use setTimeout, use slick to change the default information
            // change the information into default
            if (object != testdata[0]) { setObject(testdata[0]); }

            // initial the length of progress black bar
            barwidth = 0;
            document.getElementById("certified-button-border-change1").style.width = 0 + "%";  

            // change the color of label progress
            document.getElementsByClassName("certified-button-label")[0].classList.add("certified-button-label-change");

            //  add the black color of the bar
            document.getElementById("certified-button-border-change"+id).classList.add("certified-button-border-changed");
           
            // setInterval for changing with by time
            interval1 = setInterval(frame, 50 - 0);
            function frame() {
                if (barwidth > 100) {
                    barwidth=0;
                    clearInterval(interval1);
                    animationchange(id+1,maxid);
                }
                else {
                    barwidth++;
                    document.getElementById("certified-button-border-change"+id).style.width = barwidth + "%";
                }
            }
            // end add natural process code           
          }

        else if(id==maxid){
                        // check the final id --> no reset anything, but done all progress
            changeintoBackground(id);
            if (object != testdata[maxid-1]) { setObject(testdata[maxid-1]); }


            barwidth = 0;
            document.getElementById("certified-button-border-change"+id).style.width = 0 + "%";  

            // change the color of label progress
            document.getElementsByClassName("certified-button-label")[maxid-1].classList.add("certified-button-label-change");

            //  add the black color of the bar
            document.getElementById("certified-button-border-change"+id).classList.add("certified-button-border-changed");

            // setInterval for changing with by time
            intervalmax = setInterval(frame, 50 - 0);
            function frame() {
                if (barwidth > 100) {
                    id=1;
                    barwidth=0;
                    clearInterval(intervalmax);
                    animationchange(id,maxid);
                }
                else {
                    barwidth++;
                    document.getElementById("certified-button-border-change"+id).style.width = barwidth + "%";
                }
            }
            return;
        }

        else{
            changeintoBackground(id);
            document.getElementById("certified-button-border-change"+id).style.width = 0 + "%";  
             if (object != testdata[id-1]) { setObject(testdata[id-1]); }
            // natural progress (id -1 increase to id)
                  //1. change the color of label progress
            document.getElementsByClassName("certified-button-label")[id-1].classList.add("certified-button-label-change");
                  //2.  add the black color of the bar
            document.getElementsByClassName("certified-button-border-change")[id-1].classList.add("certified-button-border-changed");
                    // 3. progressrun
                    intervalid = setInterval(frame, 50 - 0);
                    function frame() {
                        if (barwidth > 100) {
                            barwidth=0;
                            clearInterval(intervalid);
                           if(id<maxid) animationchange(++id,maxid);
                        }
                        else {
                            barwidth++;
                            document.getElementById("certified-button-border-change"+id).style.width = barwidth + "%";
                        }
                    }
        }
    }

    function changeintoBackground(id) {
       if(id==1) setObject(testdata[0]);
       if(id==2) setObject(testdata[1]);
       if(id==3) setObject(testdata[2]);
    }

    useEffect(() => {
        setClickEvent(1,3);
        setTimeout(()=> {

            animationchange(1,document.getElementsByClassName("certified-center-button-child").length);
        },0);
        // setTimeout(() => {
        //     changeBackground()
        // }, 5000);
    }, [])

     return (
    <>
        <div className="certified-contain-box">
            <h2 className="contain-box-title font1">
                PRE-OWNED PROGRAM
            </h2>
            {/* change the information */}
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
            {/* three progress running, after updated, tou can add more progress that you want */}
            <div className="certified-center-button">
                <div className="certified-center-button-child" id="boxprocess1">
                    <Progress signal="1" />
                </div>
                <div className="certified-center-button-child" id="boxprocess2">
                    <Progress signal="2" />
                </div>
                <div className="certified-center-button-child" id="boxprocess3">
                    <Progress signal="3" />
                </div>
                {/* <div className="certified-center-button-child" id="boxprocess3">
                    <Progress signal="3" />
                </div> */}
            </div>
        </div>
    </>
);
}
