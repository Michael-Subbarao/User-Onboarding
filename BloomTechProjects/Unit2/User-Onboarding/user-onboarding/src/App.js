import React, {useState} from 'react';
import Form from './Components/Form.js';
import './App.css';

const initial = {
  username: '',
  password: '',
  email: '',
  isChecked: false
}
function App() {
  const [formData,setFormData] = useState(initial);

  const setChange = (name, value) =>{
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () =>{

  }
  
  return (
    <div className='App'>
      <Form values = {formData} change = {setChange}/>
    </div>
  );
}

export default App;
