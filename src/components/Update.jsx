import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [inputData, setInputData] = useState({
        name: "",
        email: ""
    })

    // const [data, setData] = useState([]);

    // console.log("data", data)

    useEffect(() => {
        axios.get('http://localhost:3000/posts/' + id)
            .then(res => {

                setInputData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.target
        setInputData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("input data", inputData)

        axios.put("http://localhost:3000/posts/" + id, inputData)
            .then(res => {
                alert("Data Added Successfully!");
                navigate('/')
            }).catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>

                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' name='name' value={inputData.name} className='form-control' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input type="text" id='email' name='email' value={inputData.email} className='form-control' onChange={handleChange} />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update