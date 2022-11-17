import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { useRatingsContext } from "../hooks/useRatingsContext";

import ratingService from '../services/ratingService'


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

    const getRating = async (id) => {
        //let token = localStorage.getItem("token")
        try {
            // const response = await axios.get(`http://localhost:8080/${id}`, {
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // })

            const response = await ratingService.findOne(id)

            dispatch({ type: 'FIND_RATING', payload: response.data })
            //console.log(response.data)
            setFormData(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getRating(id)
    }, [])


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

        console.log(user)

        try {

            const response = await ratingService.edit(id, formData)

            dispatch({ type: 'UPDATE_RATING', payload: response })

            console.log('Submission successful')
            //console.log(response)


            navigate('/profile')

        } catch (error) {
            console.log(error.response.data.error)
        }
    }

    return (
        <div className="form container p-6">
            <div className='box'>
                <form onSubmit={handleSubmit}>
                    <h3 className='title'>Edit your Rating</h3>

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
                                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                            />

                            <label htmlFor="Free" className='radio' >Free</label>
                            <input
                                type="radio"
                                id="Paid"
                                name="cost"
                                value="Paid"
                                checked={formData.cost === "Paid"}
                                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
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

                </form>
            </div>
        </div>
    );
}

export default Edit;


//onChange={(e) => setFormData({ ...formData, cost: e.target.value })}