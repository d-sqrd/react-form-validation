import { useState } from 'react';
import './App.css';

function App() {
  const initialValues = { username: "",
                          email: "",
                          password: ""};

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    console.table(values);
    let errors = {};
    if(!values.username) {
      errors.username = "Username cannot be empty!";
    }
    if(!values.email) {
      errors.email = "Email cannot be empty!";
    }
    if(!values.password) {
      errors.password = "Password cannot be empty!";
    }
    return(errors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateForm = validate(formValues);
    console.table(validateForm);
    setIsSubmit(true);
    setFormErrors(validateForm);
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({...formValues, [inputName]: inputValue});
  }

  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input  type="text" 
                  name="username" 
                  value={formValues.username} 
                  placeholder="Enter your username"
                  onChange={handleChange}>
          </input>
        </label>
        <p>{formErrors.username}</p>
        <br />
        <label>
          Email:
          <input  type="text" 
                  name="email"
                  value={formValues.email}
                  placeholder="Enter your email"
                  onChange={handleChange}>
          </input>
        </label>
        <p>{formErrors.email}</p>
        <br />
        <label>
          Password:
          <input  type="password"
                  name="password"
                  value={formValues.password}
                  placeholder="Enter your password"
                  onChange={handleChange}>
          </input>
        </label>
        <p>{formErrors.password}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
      {
        !isSubmit ? "" :
        Object.keys(formErrors).length === 0 ? 
        <h1>Signed in successfully!</h1> :
        <h1>Sign-in failed!</h1>
      }
    </div>
  );
}

export default App;
