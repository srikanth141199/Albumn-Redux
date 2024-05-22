import { useEffect } from "react"
import "./Albumn.css"
import { useDispatch, useSelector } from "react-redux"
import { addAlbum, albumnSelector, dataFetchThunk, fetchAlbums } from "../redux/Reducers/AlbumnReducer";
import AlbumnItem from "../AlbumnItems/AlbumnItem";

export default function Albumn() {
    const dispatch = useDispatch();
    const { albums, loading, error } = useSelector(albumnSelector);

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

   

    return (
        <div className="AlbumnContainer">
            
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {albums.map(album => (
                <AlbumnItem key={album.id} album={album} />
            ))}
        </div>
    );
}