// import React from 'react'
import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        setData(json);
        console.log(json);
        setLoading(false)
    };
    const handleDelete = (index) => {
        // Create a new array excluding the item at the given index
        const newDataArray = data.filter((_, i) => i !== index);
        setData(newDataArray); // Update the state with the new array
        console.log("Item deleted");
    };
  return {data,loading,handleDelete};
}

export default useData