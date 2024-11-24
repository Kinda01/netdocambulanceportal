import React, { useState } from 'react';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    emergencyDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Request submitted successfully!');
  };

  return (
    <div className="p-4">
      <h2>Request an Ambulance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div>
          <label>Emergency Details</label>
          <textarea name="emergencyDetails" value={formData.emergencyDetails} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RequestForm;
