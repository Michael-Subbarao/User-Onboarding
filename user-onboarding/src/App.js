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

  const change = (name, value) =>{
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () =>{

  }
  
  return (
    <div className='container'>
      <Form values = {formData} change = {change}/>
    </div>
  );
}

export default App;
