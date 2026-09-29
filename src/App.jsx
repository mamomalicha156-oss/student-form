import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit the form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !course || !image) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
  };

  // Reset everything
  const handleReset = () => {
    setName("");
    setEmail("");
    setCourse("");
    setImage(null);
    setPreview("");
    setSubmitted(false);
  };

  return (
    <div className="container">
      <h1>Student Profile Form</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Course</label>
          <select
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          >
            <option value="">Select your course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Data Science">Data Science</option>
            <option value="Business Information Technology">
              Business Information Technology
            </option>
            <option value="Software Engineering">
              Software Engineering
            </option>
          </select>

          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {preview && (
            <div className="preview">
              <p>Image Preview</p>
              <img src={preview} alt="Profile preview" />
            </div>
          )}

          <button type="submit">Submit Profile</button>
        </form>
      ) : (
        <div className="profile-card">
          <h2>Student Profile</h2>

          <img src={preview} alt="Student profile" />

          <h3>{name}</h3>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Course:</strong> {course}
          </p>

          <button onClick={handleReset}>Reset Form</button>
        </div>
      )}
    </div>
  );
}

export default App;