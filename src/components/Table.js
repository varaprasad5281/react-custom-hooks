import React, { useEffect, useState } from 'react';
import useData from '../utils/useData';

const Table = () => {
   const {data,loading,handleDelete}=useData()

    
    if(loading) return <h1>Loading......</h1>
    return (
        <div>
            <h1>This is a table component</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Yes" : "No"}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
