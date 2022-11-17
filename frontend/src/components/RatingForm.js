import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import ratingService from '../services/ratingService'

import Back from "../components/Back";

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
            navigate('/main')
            setError(null)

        } catch (error) {
            setError(error.response.data.error)

        }
    }


    return (
        <div className="form container p-3">
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <h3 className='title'>Submit a Share</h3>

                <div className="field is-grouped">
                    <div className='control'>
                        <label className='label'>Cost:</label>
                    </div>
                    <div className='control'>

                        <input
                            type="radio"
                            id="Free"
                            name="cost"
                            value="Free"
                            checked={formData.cost === "Free"}
                            onChange={handleChange}
                        />

                        <label htmlFor="Free" className='radio' >Free</label>
                        <input
                            type="radio"
                            id="Paid"
                            name="cost"
                            value="Paid"
                            checked={formData.cost === "Paid"}
                            onChange={handleChange}
                        />
                        <label htmlFor="Paid" className='radio' >Paid</label>
                    </div>
                </div>

                <div className='field'>
                    <label htmlFor='type' className='label'>Type: </label>
                    <div className='control'>
                        <div className='select'>
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
                        </div>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Platform: </label>
                    <div className='control'>
                        <input
                            type="text"
                            id="platform"
                            name="platform"
                            placeholder="Ex. YouTube"
                            value={formData.platform}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Title: </label>
                    <div className='control'>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title of video or article"
                            value={formData.title}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Link: </label>
                    <input
                        type="text"
                        id="link"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className="input"
                    />
                </div>


                {/* Textarea */}
                <div className='field'>
                    <label className='label'>Notes: </label>
                    <textarea
                        id="notes"
                        name="notes"
                        rows="5" cols="20"
                        value={formData.notes}
                        onChange={handleChange}
                        className="textarea"
                    />
                </div>
                <button className='button is-primary'>Submit</button>
                {error && <div className="error">{error}</div>}
            </form>
            </div>
            <div className='level-item'>
                <Back />
            </div>
        </div>
    );
}

export default RatingForm;




