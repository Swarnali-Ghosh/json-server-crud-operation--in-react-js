import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Crud = () => {
    const navigate = useNavigate();
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                setColumns(Object.keys(res.data[0]))
                setRecords(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (id) => {
        const conf = window.confirm("Do you want to delete");
        if (conf) {
            axios.delete(`http://localhost:3000/posts/` + id)
                .then(res => {
                    alert("Data Deleted Successfully!");
                    navigate('/')
                }).catch(err => console.log(err))
        }
    }

    return (
        <div>
            <div><Link to="/create">Add customers</Link></div>
            <table id='customers'>
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i} >
                                {c}
                            </th>

                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>
                                    <Link to={`/update/${d.id}`}><button>Edit</button></Link>
                                    <button onClick={e => handleSubmit(d.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Crud