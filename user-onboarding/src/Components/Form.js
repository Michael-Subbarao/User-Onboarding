import React from 'react';

function Form(props) {
 const { change, submit } = props;
 const { username,email,password,isChecked} = props.values;

 const onChange = event => {
   const { name, value, isChecked, type} = event.target;
   const setChecked = type === 'checkbox' ? isChecked : value;
   onChange(name,setChecked);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    submit();
  }

 return (
   <div>
     <p>User-Onboarding</p>
    <form onSubmit={handleSubmit()}>
      <label> Name:
        <input type = 'text' name = 'name' value = {username} onChange = {onChange} />  
      </label>
      <label> Email:
        <input type = 'email' name = 'email' value = {email} onChange = {onChange} />  
      </label>
      <label> Password:
        <input type = 'password' name = 'password' value = {password} onChange = {onChange} />  
      </label>
      <label> I Agree to the Terms of Service
        <input type = 'checkbox' name = 'termsOfService' checked = {isChecked} onChange = {onChange} />  
      </label>
      <input type = 'submit' value = 'Create Friend' />
    </form>
   </div>
 );

}

export default Form;