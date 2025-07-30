import React, { useState } from "react";
import "./todo.css";
import  cheklist from "./../assets/checklist_9086471-removebg-preview.png";
import   pencil from "./../assets/download__2_-removebg-preview.png";
import   cloud from "./../assets/purple-kawaii-cloud-sticker-preview-removebg-preview.png";
import  heart from "./../assets/love-dating_15865555-removebg-preview.png";
import cutipencil from "./../assets/pencil_15764164-removebg-preview.png";

export default function Todo() {
  const [inputdata, setinputdata] = useState("");
  const [tasks, settasks] = useState([]);
  const [editedid, seteditedid] = useState(null)

  console.log("this is inputdata", inputdata);

  const handleadd = () => {
    if (inputdata.trim() === "") return;

    if (editedid !== null) {
      // Edit mode: update the task
      const updatedTasks = tasks.map((task, i) =>
        i === editedid ? inputdata : task
      );
      settasks(updatedTasks);
      seteditedid(null); // Reset
    } else {
      // Add mode: push new task
      settasks([...tasks, inputdata]);
    }
    setinputdata(""); // Clear input
  }


  const handledelete = (i)=>{
    console.log("index of deltete item", i);
    const remvoeitme = tasks.filter((task,index) => i !== index)
    console.log(remvoeitme);
    settasks(remvoeitme)
    
  }


  const handleedit = (i)=>{
    console.log("this is edited index" , i);
    
   setinputdata(tasks[i]); // Load selected task into input
    seteditedid(i); // Set edit index
    
    
    
  }

  return (
    <div className="main flex justify-center items-center h-[100vh]">
      <div className="container relative items-center flex justify-center  ">
      <img className="h-[15%] top-5 left-5 absolute w-[15%]" src={cheklist} alt="no" />
      <img className="h-[13%] top-5 right-5 absolute w-[13%]" src={pencil} alt="no" />
      <img className="h-[15%] bottom-5 right-5 absolute w-[20%]" src={cloud} alt="no" />

      {/* <img className="h-[15%] bottom-5 left-5 absolute w-[20%]" src={cutipencil} alt="no" /> */}
      <img className="h-[15%] bottom-2 left-2 absolute w-[20%]" src={heart} alt="no" />
        <div className="maintodobox px-20 " >
          <h1 className="text-center font-medium mt-6 mb-8  text-3xl">
            📝 Todo List
          </h1>
          <div className="inputbox  flex justify-center gap-6 items-center ">
            <input
              onChange={(e) => setinputdata(e.target.value)}
              className="rounded-lg border-2 px-4 py-4 w-[80%] shadow-2xl focus:border-pink-200 outline-none   border-pink-300"
              type="text"
              value={inputdata}
              placeholder="tasks"
            />
            <button
              onClick={() => handleadd()}
              className=" px-7 py-4 rounded-lg font-medium shadow-2xl bg-purple-300"
                // style={{ backgroundColor: "rgb(241, 210, 237)" }}  
            >
               {editedid !== null ? "Update" : "Add"}
            </button>
          </div>

          <div className="tasks">
            {tasks.length > 0
              ? tasks?.map((task,i) => {
                  return (
                    <>
                      <div className="singletask m-auto mt-10  rounded-lg py-4  border-2 shadow-2xl border-purple-300 flex items-center justify-center flex-row gap-30  ">
                        <div className="taskname">
                          <h1>{task}</h1>

                        </div>
                        <div className="btnrap flex gap-4 ">
                          <button onClick={()=>handleedit(i)} className="bg-pink-300 font-medium px-4 py-2 rounded-lg">
                            Edit
                          </button>
                          <button onClick={()=>handledelete(i)} className="bg-purple-300 font-medium px-4 py-2 rounded-lg">
                            Delete
                          </button>
                          {/* <button  className="bg-orange-300 font-medium px-4 py-2 rounded-lg">
                            Done
                          </button> */}
                        </div>
                      </div>
                    </>
                  );
                })
              : (<><h1 className="text-center text-shadow-purple-300 mt-20  font-medium">📝Do Somethig✍️</h1></>)}
          </div>
        </div>
      </div>
    </div>
  );
}
