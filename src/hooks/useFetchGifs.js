import { useState, useEffect } from "react";
import getGif from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 0);                
            })
    }, [category]);

    return state;
}

export default useFetchGifs;