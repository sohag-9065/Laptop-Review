import { useEffect } from "react";
import { useState } from "react"

const useReview = () => {
    const [review, setReview] = useState([]);
    useEffect( ()=>{
        fetch('customerReview.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return [review, setReview];
}

export default useReview;