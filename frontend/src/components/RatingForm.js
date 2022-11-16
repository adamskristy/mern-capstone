import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import ratingService from '../services/ratingService'

function RatingForm({ user }) { 

    const navigate = useNavigate()

    const [error, setError] = useState(null)
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

    function handleChange(event) {
        
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

    
        //console.log(user)
        let newRating = {
            cost: formData.cost,
            type: formData.type,
            platform: formData.platform,
            link: formData.link,
            title: formData.title,
            notes: formData.notes,
            user
        }

        try {
            const response = await ratingService.add(newRating)

            console.log('Submission successful')
            console.log(response)

            setFormData({})
            navigate('/')
            setError(null)

        } catch (error) {
            setError(error.response.data.error)
            
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Submit a Rating</h3>

                <label>Cost:</label>
                <input
                    type="radio"
                    id="Free"
                    name="cost"
                    value="Free"
                    checked={formData.cost === "Free"}
                    onChange={handleChange}
                />
                <label htmlFor="Free">Free</label>
                <input
                    type="radio"
                    id="Paid"
                    name="cost"
                    value="Paid"
                    checked={formData.cost === "Paid"}
                    onChange={handleChange}
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
                {error && <div className="error">{error}</div>}
            </form>

        </div>
    );
}

export default RatingForm;




