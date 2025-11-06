import { useEffect, useState } from "react";
import { fetchdata } from "../helpers/fetchData";

export const useFetchData = (endPoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getData = async() => {
        const {data, isLoding} = await fetchdata(endPoint);
        setData(data);
        setLoading(isLoding)
    }
    useEffect(() => {
        getData();
    }, [endPoint]);
    return {
        data,
        isLoading
    }
}