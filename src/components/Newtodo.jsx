import React, { useState } from "react";
import cheklist from "./../assets/checklist_9086471-removebg-preview.png";
import pencil from "./../assets/download__2_-removebg-preview.png";
import cloud from "./../assets/purple-kawaii-cloud-sticker-preview-removebg-preview.png";
import heart from "./../assets/love-dating_15865555-removebg-preview.png";

export default function Newtodo() {
  const [inputdata, setinputdata] = useState("");
  const [tasks, settasks] = useState([]);
  const [editedid, seteditedid] = useState(null);

  const handleadd = () => {
    if (inputdata.trim() === "") return;
    if (editedid !== null) {
      const updatedTasks = tasks.map((task, i) =>
        i === editedid ? inputdata : task
      );
      settasks(updatedTasks);
      seteditedid(null);
    } else {
      settasks([...tasks, inputdata]);
    }
    setinputdata("");
  };

  const handledelete = (i) => {
    const remvoeitme = tasks.filter((task, index) => i !== index);
    settasks(remvoeitme);
  };

  const handleedit = (i) => {
    setinputdata(tasks[i]);
    seteditedid(i);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-no-repeat px-4 py-8 relative" style={{ backgroundImage: "url('./../assets/15680938_5610411.jpg')" }}>
      <div className="relative bg-white bg-opacity-70 shadow-2xl rounded-xl w-full max-w-3xl p-6 md:p-10">
        <img className="h-16 w-16 absolute top-4 left-4" src={cheklist} alt="checklist" />
        <img className="h-14 w-14 absolute top-4 right-4" src={pencil} alt="pencil" />
        <img className="h-20 w-20 absolute bottom-4 right-4" src={cloud} alt="cloud" />
        <img className="h-20 w-20 absolute bottom-2 left-2" src={heart} alt="heart" />

        <h1 className="text-center font-bold text-2xl md:text-3xl mb-6">📝 Todo List</h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-8">
          <input
            onChange={(e) => setinputdata(e.target.value)}
            value={inputdata}
            type="text"
            placeholder="Enter a task..."
            className="w-full sm:w-3/4 px-4 py-3 rounded-lg border-2 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 shadow-md"
          />
          <button
            onClick={handleadd}
            className="w-full sm:w-auto px-6 py-3 bg-purple-300 hover:bg-purple-400 font-semibold rounded-lg shadow-md transition duration-200"
          >
            {editedid !== null ? "Update" : "Add"}
          </button>
        </div>

        <div className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-90 border-2 border-purple-300 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md"
              >
                <h2 className="text-lg font-medium">{task}</h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleedit(i)}
                    className="px-4 py-2 bg-pink-300 hover:bg-pink-400 rounded-lg font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handledelete(i)}
                    className="px-4 py-2 bg-purple-300 hover:bg-purple-400 rounded-lg font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-center mt-8 text-purple-500 font-medium">📝 Do something ✍️</h2>
          )}
        </div>
      </div>
    </div>
  );
}
