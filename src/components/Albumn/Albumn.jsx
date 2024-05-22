import { useEffect } from "react"
import "./Albumn.css"
import { useDispatch, useSelector } from "react-redux"
import { albumnSelector, dataFetchThunk } from "../redux/Reducers/AlbumnReducer";
import AlbumnItem from "../AlbumnItems/AlbumnItem";

export default function Albumn() {

    const { albumnData } = useSelector(albumnSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataFetchThunk());
    }, [])
    return (
        <div className="AlbumnContainer">{
            albumnData.map((item, index) => <AlbumnItem key={index} id={item.id} userId={item.userId} title={item.title} />
            )
        }</div>
    )
}