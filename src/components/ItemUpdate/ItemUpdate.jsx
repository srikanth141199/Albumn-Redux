// import { useDispatch } from "react-redux"
// import { updateItem } from "../redux/Reducers/AlbumnReducer";
// import { useRef } from "react";

// export default function ItemUpdate({ id, title, closeModal }) {
//     console.log("Inside Item Update");

//     const userIdRef = useRef();
//     const titleRef = useRef();

//     const dispatch = useDispatch();
//     const handleSubmit = () => {
//         const userId = userIdRef.current.value;
//         const title = titleRef.current.value;
//         dispatch(updateItem({ id, userId, title }));
//         closeModal(); // Close the modal after submitting
//     }

//     return (
//         <div className="ItemContainer">
//             <h4 className="title">{title}</h4>
//             <label>Enter new User ID: </label>
//             <input type="number" ref={userIdRef} />
//             <label>Enter new Title: </label>
//             <input type="text" ref={titleRef} />
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// }


import { useDispatch } from "react-redux"

import { useRef } from "react";
import { updateAlbum } from "../redux/Reducers/AlbumnReducer";

export default function ItemUpdate({ album, closeModal }) {
    //console.log("Inside Item Update");

    const {id, title} = album 
    const userIdRef = useRef();
    const titleRef = useRef();

    const dispatch = useDispatch();
    const handleSubmit = () => {
        const userId = userIdRef.current.value;
        const title = titleRef.current.value;
        dispatch(updateAlbum({ id, userId, title }));
        closeModal(); // Close the modal after submitting
    }

    return (
        <div className="ItemContainer">
            <h4 className="title">{title}</h4>
            <label>Enter new User ID: </label>
            <input type="number" ref={userIdRef} />
            <label>Enter new Title: </label>
            <input type="text" ref={titleRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
