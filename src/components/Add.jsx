import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name: "",
        email: ""
    })

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

        axios.post("http://localhost:3000/posts", inputData)
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
                    <input type="text" id='name' name='name' className='form-control'
                        // onChange={e => setInputData({ ...inputData, name: e.target.name })}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input type="text" id='email' name='email' className='form-control'
                        // onChange={e => setInputData({ ...inputData, email: e.target.email })}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Add