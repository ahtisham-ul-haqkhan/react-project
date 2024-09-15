import React, { useState } from 'react';

function Create() {
const [posInfo, setPostInfo] = useState({
    title: "",
    description: ""
});
    const handleForm =  (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setPostInfo({ ...posInfo, [name]: value})
    console.log(name,value);
    }
  return (
    <div className="container mt-4">
      <h2>Create New Item</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title"
            className="form-control" 
            placeholder="Enter Title" 
            onChange={handleForm}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            className="form-control" 
            placeholder="Enter Description" 
            onChange={handleForm}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Create;
