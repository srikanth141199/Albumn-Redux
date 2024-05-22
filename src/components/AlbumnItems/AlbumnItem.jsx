import { useDispatch } from "react-redux"
import "./AlbumnItem.css"
import { albumnSelector, deleteItem, updateItem } from "../redux/Reducers/AlbumnReducer"

export default function AlbumnItem({id, userId, title}){
    const dispatch = useDispatch(albumnSelector);

    const handleDelete = ()=>{
        dispatch(deleteItem(id))
    }

    const handleUpdate = () => {
        dispatch(updateItem({id, userId, title}))
    }
    return(
        <div className="AlbumnItem">
            <h4 className="title">{title}</h4>
            <button className="update" onClick={() => handleUpdate(id)}>update</button>
            <button className="delete" onClick={() => handleDelete()}>Delete</button>
        </div>
    )
}