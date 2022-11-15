import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { useRatingsContext } from "../hooks/useRatingsContext";


function Edit({ user }) {

    const { id } = useParams()

    const navigate = useNavigate()

    const { dispatch } = useRatingsContext()
    //console.log(ratings)

    const [formData, setFormData] = useState(
        {
            cost: "",
            type: "",
            platform: "",
            link: "",
            title: "",
            notes: ""
        }
    )
    //console.log(formData)

    useEffect(() => {
        const getRating = async () => {
            let token = localStorage.getItem("token")
            try {
                const response = await axios.get(`http://localhost:8080/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                dispatch({ type: 'FIND_RATING', payload: response.data })
                //console.log(response.data)
                setFormData(response.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }
        getRating()
    }, [dispatch])


    function handleChange(event) {
        //console.log(event)
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => { //multiple input so we care about previous state
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        let token = localStorage.getItem("token")
        console.log(user)
      

        try {
            
            const response = await axios.patch(`http://localhost:8080/${id}/edit`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            dispatch({ type: 'UPDATE_RATING', payload: response })

            console.log('Submission successful')
            //console.log(response)

            
            navigate('/profile')

        } catch (error) {
            console.log(error.response.data.error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Edit Your Rating</h3>

                <label>Cost:</label>
                <input
                    type="radio"
                    id="Free"
                    name="Cost"
                    value="Free"
                    checked={formData.cost === "Free"}
                    onChange={(e) => setFormData({...formData, cost: e.target.value})}
                    //setting value to "Free" so it updates
                />
                <label htmlFor="Free">Free</label>
                <input
                    type="radio"
                    id="Paid"
                    name="Cost"
                    value="Paid"
                    checked={formData.cost === "Paid"}
                    onChange={(e) => setFormData({...formData, cost: e.target.value})}
                />
                <label htmlFor="Paid">Paid</label>
                <br />
                <label htmlFor='type'>Type: </label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="Video">Video</option>
                    <option value="Article">Article</option>
                    <option value="Other">Other</option>
                </select>
                <br />

                <label>Platform: </label>
                <input
                    type="text"
                    id="platform"
                    name="platform"
                    placeholder="Ex. YouTube"
                    value={formData.platform}
                    onChange={handleChange}
                />
                <br />
                <label>Title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title of video or article"
                    value={formData.title}
                    onChange={handleChange}
                />
                <br />
                <label>Link: </label>
                <input
                    type="text"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                />
                <br />

                {/* Textarea */}
                <label>Notes: </label>
                <textarea
                    id="notes"
                    name="notes"
                    rows="5" cols="20"
                    value={formData.notes}
                    onChange={handleChange}
                />
                <br />
                <button>Submit</button>
            </form>

        </div>
    );
}

export default Edit;