import React,{ useState }from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [valid, setValid] = useState({email:false,username:false,password:false});
  //agar condition false toh flag true hojaiyega 
  const database={username:"admin",password:"admin",email:"admin@admin.com"};
  //we have made a database here and we needto match the given data in the database when giving condition
  const [values, setValues] = useState({username:"", password:"",email:""});

  const handleUserName =(event)=>{
    setValues({...values,username:event.target.value})

    }
    const handlePassword =(event)=>{
      setValues({...values,password:event.target.value})
  
    }
    const handleEmail =(event)=>{
      setValues({...values,email:event.target.value})
   //...values it adds current values in the older values
  //event.target.value shows the current input that has been entered in the console  
  }
const handleSubmit =async (event)=>{
  event.preventDefault();
  let v={} //created a new object here
  if(database.email !== values.email ){
    v["email"]=true;
  }else{
    v["email"]=false;
  }
  if(database.username !== values.username){
    v["username"]=true;
  }else{
    v["username"]=false;
  }
  if(database.password != values.password){
    v["password"]=true;
  }else{
    v["password"]=false;
  }

  setValid({...valid,...v})
  console.log(v);
  console.log(database);
  
  //event.preventDefault() will prevent the page from getting refreshed
 
}
  

  
  return (
    <div class="form-container">
    <form class="register-form" onSubmit={handleSubmit}>
      {/* Uncomment the next line to show the success message */}
      {/* <div class="success-message">Success! Thank you for registering</div> */}
     
      <input
        id="email"
        class="form-field"
        type="text"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleEmail}
      />
     {valid.email?<span>please enter valid email</span>:null}
      <input
        id="username"
        class="form-field"
        type="text"
        placeholder="Username"
        name="username"
        value={values.username}
        onChange={handleUserName}
      />
  {valid.username?<span>please enter valid username</span>:null}
      {/* Uncomment the next line to show the error message */}
      {/* <span id="first-name-error">Please enter a first name</span> */}
      <input
        id="password"
        class="form-field"
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handlePassword}
      />
      {valid.password?<span>please enter valid password</span>:null}
      {/* Uncomment the next line to show the error message */}
      {/* <span id="last-name-error">Please enter a last name</span> */}
      
      {/* Uncomment the next line to show the error message */}
      {/* <span id="email-error">Please enter an email address</span> */}
      <button class="form-field" type="submit" >
        Register
      </button>
    </form>
  </div>
  );
}

export default App;
