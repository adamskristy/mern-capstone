function RatingForm () {

    
    return ( 
        <div>
            <form>
                <h3>Submit a Rating</h3>
                
                    <label>Cost:</label>
                        <input type="radio" id="free" name="cost" value="Free" />
                            <label htmlFor="free">Free</label>
                        <input type="radio" id="paid" name="cost" value="Paid" />
                            <label htmlFor="paid">Paid</label>
                        <br/>

                    <label>Type: </label>
                    <select id="type" name="Type">
                       <option value="" disabled>Select</option>
                       <option value="video">Video</option>
                       <option value="article">Article</option>
                       <option value="other">Other</option>
                    </select>
                        <br/>

                    <label>Platform: </label>
                    <input type="text" id="platform" name="platform" placeholder="Ex. YouTube"/>
                        <br/>
                    <label>Title: </label>
                    <input type="text" id="title" name="title" placeholder="Title of video or article"/>
                        <br/>
                    <label>Link: </label>
                    <input type="text" id="link" name="link" />
                        <br/>
                    <label>Notes: </label>

                    <textarea id="notes" name="notes" rows="5" cols="20"></textarea>
                        <br/>

                    <label>Stars: </label>
                        <input type="radio" id="1" name="stars" value="1" />
                            <label htmlFor="1">1</label>
                        <input type="radio" id="2" name="stars" value="2" />
                            <label htmlFor="2">2</label>
                        <input type="radio" id="3" name="stars" value="3" />
                            <label htmlFor="3">3</label>
                        <input type="radio" id="4" name="stars" value="4" />
                            <label htmlFor="4">4</label>
                        <input type="radio" id="5" name="stars" value="5" />
                            <label htmlFor="5">5</label>
            </form>
        </div>
     );
}

export default RatingForm ;