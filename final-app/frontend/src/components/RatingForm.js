import  axios  from "axios";
import React, { useEffect, useState } from 'react';


function RatingForm () { //need to pass {user}
    const [formData, setFormData] = useState(
        {
            cost: "",
            type: "",
            platform: "",
            link: "",
            title: "",
            notes: "",
        }
    )
  //console.log(formData)

    const getAllRatings = async () => {
       
        let token = localStorage.getItem("token")

        try {
            const response = await axios.get('http://localhost:8080/rate-my-tutorial', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        } catch (error){

        }
    }

    useEffect(() => {
        getAllRatings()
    },[])

  function handleChange(event) {
    //console.log(event)
    const {name, value, type, checked} = event.target
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

        let newRating = {
            cost: formData.cost,
            type: formData.type,
            platform: formData.platform,
            link: formData.link,
            title: formData.title,
            notes: formData.notes,
            //user
        }

        try {
            const response = await axios.post('http://localhost:8080/rate-my-tutorial/add', newRating, {
                headers: {
                    'Authorization': ` Bearer ${token}`
                }
            })
    } catch (error) {
        console.log(error)
    }
  }

    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Submit a Rating</h3>
                
                    <label>Cost:</label>
                    <input 
                        type="radio" 
                        id="free" 
                        name="cost" 
                        value="free"
                        checked={formData.cost === "free"} 
                        onChange={handleChange}
                    />
                    <label htmlFor="free">Free</label>
                    <input 
                        type="radio" 
                        id="paid" 
                        name="cost" 
                        value="paid"
                        checked={formData.cost === "paid"} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="paid">Paid</label>
                    <br/>

                    <label htmlFor='type'>Type: </label>
                    <select 
                        id="type" 
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                       <option value="">Select</option>
                       <option value="video">Video</option>
                       <option value="article">Article</option>
                       <option value="other">Other</option>
                    </select>
                    <br/>

                    <label>Platform: </label>
                    <input 
                        type="text" 
                        id="platform" 
                        name="platform" 
                        placeholder="Ex. YouTube" 
                        value={formData.platform} 
                        onChange={handleChange} 
                    />
                    <br/>
                    <label>Title: </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Title of video or article" 
                        value={formData.title} 
                        onChange={handleChange} 
                    />
                    <br/>
                    <label>Link: </label>
                    <input 
                        type="text" 
                        id="link" 
                        name="link" 
                        value={formData.link} 
                        onChange={handleChange} 
                    />
                    <br/>

                    {/* Textarea */}
                    <label>Notes: </label>
                    <textarea 
                        id="notes" 
                        name="notes" 
                        rows="5" cols="20" 
                        value={formData.notes} 
                        onChange={handleChange} 
                    />
                    <br/>
                    <button>Submit</button>
            </form>
        </div>
     );
}

export default RatingForm ;




