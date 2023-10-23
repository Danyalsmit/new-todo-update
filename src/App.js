// import React, { useState } from "react";
// import "./App.css";
// import { Add, Delete, updateValue } from "./redux/action/Action";
// import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGamepad,
//   faTrashCan,
//   faPenToSquare,
// } from "@fortawesome/free-solid-svg-icons";

// function App() {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();
//   const { list } = useSelector((state) => state.todoReducer);
//   // console.log("list", list);
//   // console.log("obj",obj)

//   return (
//     <>
//       <div className="mb-3">
//         <h1>Todo App</h1>

//         <div className="ceter">
//           <input
//             type="text"
//             className="form-control"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             id="exampleFormControlInput1"
//             placeholder="Enter your Name"
//           />
// {
//   editingId === null ? ( // Check if we are in editing mode
//     <FontAwesomeIcon
//       id="example"
//       onClick={handleAdd}
//       icon={faGamepad}
//       beatFade
//       size="lg"
//     />
//   ) : (
//     <FontAwesomeIcon
//       id="example"
//       onClick={handleUpdate}
//       icon={faPenToSquare}
//       beatFade
//       size="lg"
//     />

//   )

// }
// </div>

// {/* // //           <FontAwesomeIcon */}
// {/* // //             id="example"
// // //             onClick={() => {
// // //               if (input) { */}
// {/* // //                 dispatch(Add(input),setInput(""));

// // //               }
// // //             }}
// // //             icon={faGamepad}
// // //             beatFade
// // //             size="lg"
// // //           /> */}

//         {list.map((prop) => {
//           return (
//             <>
//               <div id="cen" className="mb-3">
//                 <div className="card" style={{ width: "18rem" }}>
//                   <ul className="list-group list-group-flush" key={prop.id}>
//                     <li className="list-group-item">{prop.data}</li>
//                   </ul>
//                 </div>
//                 <FontAwesomeIcon
//                   id="example"
//                   onClick={() => dispatch(Delete(prop))}
//                   icon={faTrashCan}
//                   beatFade
//                   size="lg"
//                 />
//                 <FontAwesomeIcon
//                   id="example"
//                   onClick={() => {
//                     const updatedValue = setInput(
//                       prop.data,
//                       prop.id
//                     );
//                     if (updatedValue !== null) {
//                       const obj = { ...prop, data: updatedValue };
//                       dispatch(updateValue(obj));
//                       console.log("obj",obj);

//                     }
//                   }}
//                   icon={faPenToSquare}
//                   beatFade
//                   size="lg"
//                 />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import { Add, Delete, updateValue } from "./redux/action/Action";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todoReducer);

  const handleAdd = () => {
    if (input) {
      dispatch(Add(input));
      setInput("");
    }
  };

  const handleUpdate = () => {
    if (input && editingId !== null) {
      const obj = { id: editingId, data: input };
      dispatch(updateValue(obj));
      setInput("");
      setEditingId(null);
    }
  };

  return (
    <>
      <div className="mb-3">
        <h1 className="col"> Todo App</h1>

        <div className="ceter">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Enter your Name"
            style={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
          />
          {editingId === null ? (
            <FontAwesomeIcon
              id="example"
              onClick={handleAdd}
              icon={faGamepad}
              beatFade
              size="lg"
            />
          ) : (
            <FontAwesomeIcon
              id="example"
              onClick={handleUpdate}
              icon={faPenToSquare}
              beatFade
              size="lg"
            />
          )}
        </div>
        {list.map((prop) => {
          return (
            <div id="cen" className="mb-3" key={prop.id}>
              <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{prop.data}</li>
                </ul>
              </div>
              <FontAwesomeIcon
                id="example"
                onClick={() => dispatch(Delete(prop))}
                icon={faTrashCan}
                beatFade
                size="lg"
              />
              <FontAwesomeIcon
                id="example"
                onClick={() => {
                  setInput(prop.data);
                  setEditingId(prop.id);
                }}
                icon={faPenToSquare}
                beatFade
                size="lg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
