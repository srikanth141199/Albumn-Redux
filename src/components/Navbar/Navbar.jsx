import { useDispatch } from "react-redux";
import "./Navbar.css"
import { addAlbum } from "../redux/Reducers/AlbumnReducer";
import Navbar1 from "../../asserts/Navbar1.png";

export default function Navbar(){
    const dispatch = useDispatch()


    const handleAddAlbum = () => {
        const newAlbum = { userId: 1, title: "New Album" };
        dispatch(addAlbum(newAlbum));
    };

    return(
        <div className="Navbar">
            <img className="NavbarImg" src={Navbar1} alt="Image1" />
            <button onClick={handleAddAlbum}>Add Album</button>
        </div>
    )
}