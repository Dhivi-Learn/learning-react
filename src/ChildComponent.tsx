import {memo, useEffect} from "react";

const ChildComponent: React.FC=memo(() => {

    const worker = new Worker("worker.js");

    useEffect(() => {
        console.log("Child Component mounted");
        callNormalMethod();

        callWebWorker();
    }, []);

    const callNormalMethod = ()=>{
       console.log("Normal Method called")
    }
    const callWebWorker = ()=>{
        worker.postMessage(10000000000);

        //receive data from worker;
        worker.onmessage = (event)=>{
            console.log("Result from worker",event.data)
        }
        //handle errors
        worker.onerror = (error)=>{
            console.error("Error from worker",error);
        }
    }
    console.log("Child Component rendered");

    return <h1>Child Component</h1>
})

export default ChildComponent