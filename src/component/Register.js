import axios from 'axios';
import React, {useState} from 'react';

import "./LoginRegister.css"

axios.defaults.withCredentials = true;

export default function Register () {
  // const [id, setId] = useState("")
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")
  const [userinfo, setUserinfo] = useState ({
      id: '',
      email: '',
      password: '',
      confirmPassword: '',


  });
  const[errorMessage, setErrorMessage] = useState('');
  // const history = useHistory();
  const handleInputValue = (key) => (e) => {
      setUserinfo({ ...userinfo, [key]: e.target.value });
  };
  // const handleSignup = () => {
      
  // }

  // const IdHandler = (e) => {
  //   setId(e.currentTarget.value)
  // }
  // const EmailHandler = (e) => {
  //     setEmail(e.currentTarget.value)
  // }

  // const PasswordHandler = (e) => {
  //     setPassword(e.currentTarget.value)
  // }

  // const ConfirmPasswordHandler = (e) => {
  //     setConfirmPassword(e.currentTarget.value)
  // }

  const onSubmit = (e) => {
    e.preventDefault()
    if(userinfo.password != userinfo.confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
  }
const handleSignup = () => {
  if(userinfo.id !=='' && userinfo.email !=='' && userinfo.password !=='' && userinfo.confirmPassword !==''){
    axios.post('https://localhost:3000/signup',{
      email: userinfo.email,
      id: userinfo.id,
      password: userinfo.password,
      mobile: userinfo.confirmPassword,
  }).then((res) => {
    // history.push("/");
  }).catch((err) => {
    console.error('all contents are required');
  })
  }else{
    setErrorMessage('all contents are required');
    console.error(errorMessage);
  }
};
  return (
      
    <div class="loginregister">
      <form>
          <div><input name="name" type="text" placeholder="ID" value={userinfo.id} onChange={handleInputValue('id')} class="loginregister__input"/></div>
          <div><input name="email" type="email" placeholder="EMAIL" value={userinfo.email} onChange={handleInputValue('email')} class="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="PASSWORD" value={userinfo.password} onChange={handleInputValue('password')} class="loginregister__input"/></div>
          <div><input name="confirmPassword" type="confirmPassword" placeholder="COMFIRM PASSWORD" value={userinfo.confirmPassword} onChange={handleInputValue('password')} class="loginregister__input"/></div>
          <div><button type="submit" onClick={handleSignup} class="loginregister__button">Register account</button></div>
      </form>
    </div>
    
  );
}
