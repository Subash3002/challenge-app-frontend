import { useState } from "react";
import axios from 'axios';

function AddChallenge({onChallengeAdded}){
    const [month,setMonth]=useState('');
    const [description,setDescription]=useState('');

    const handleSubmit=async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://demotest-env.eba-h5nuawcw.eu-north-1.elasticbeanstalk.com/challenges',{month,description});
            setMonth('');
            setDescription('');
            onChallengeAdded();
        } catch (error) {
            console.error("Error occured while posting ",error);
        }
    }

    return(
        <div className="card my-5">
            <div className="card-header">Add Challenge</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="month" className="form-label">Month</label>
                        <input type="text" className="form-control" id="month" placeholder="Enter the month" value={month} onChange={(e)=>setMonth(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea  id="description" className="form-control" placeholder="Add the description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddChallenge;