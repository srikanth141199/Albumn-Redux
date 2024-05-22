import { useDispatch } from "react-redux"
import { useState } from "react";
import "./AlbumnItem.css"
import { albumnSelector, deleteItem } from "../redux/Reducers/AlbumnReducer"
import ItemUpdate from "../ItemUpdate/ItemUpdate";
import Modal from "../Modal/Modal"; // Import the Modal component

export default function AlbumnItem({ id, userId, title }) {
    const dispatch = useDispatch(albumnSelector);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleDelete = () => {
        dispatch(deleteItem(id));
    }

    const handleUpdateClick = () => {
        setIsUpdating(true); // Show the modal
    }

    const closeModal = () => {
        setIsUpdating(false); // Hide the modal
    }

    return (
        <div className="AlbumnItem albumn-grid">
            <h4 className="title">{title}</h4>
            <button className="update" onClick={handleUpdateClick}>Update</button>
            <button className="delete" onClick={() => handleDelete()}>Delete</button>
            {isUpdating && (
                <Modal onClose={closeModal}>
                    <ItemUpdate id={id} title = {title} closeModal={closeModal} />
                </Modal>
            )}
        </div>
    );
}
