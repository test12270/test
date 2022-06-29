import axios from 'axios';
import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom';
import "./LoginRegister.css"

axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async loginRequestHandler() {
    const { id, password } = this.state;
    try {
      const result = await axios({
        method: "post",
        url: "https://localhost:3000/login",
        headers: {
          accept: "application/json",
        },
        withCredentials: true,
        data: { id, password },
      });

      this.props.loginHandler(result.data);
    }catch(err) {
      alert(err);
    }
  }

// export default function Login({handleResponseSuccess}) {
// //   const [id, setId] = useState("");
// //   const [password, setPassword] = useState(""); 
//   const [loginInfo, setLoginInfo] = useState({
//       id: '',
//       password: ''
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const handleInputValue = (key) => (e) => {
//     setLoginInfo({ ...loginInfo, [key]: e.target.value});
//   };
  
// //   const IdHandler = (e) => {
// //     setId(e.currentTarget.value);
// //   }

// //   const PasswordHandler = (e) => {
// //     setPassword(e.currentTarget.value)
// // }

//   const handleLogin = () => {
//     if (loginInfo.id == '' || loginInfo.password == ''){
//         setErrorMessage('none data entered')
//     }else{
//         axios.post('https://localhost:3000/login', {
//             id: loginInfo.id,
//             password: loginInfo.password,
//         }).then((res) => {
//             if(handleResponseSuccess != undefined){
//                 handleResponseSuccess();
//             }
            
            
//         }).catch((err) => {
//             console.log('11');
//         })
//     }
//   }

  

  render() {
    return (
    
      <div class="loginregister">
        {/* <form onSubmit={(e) => e.preventDefault()}> */}
        
        <form>
        <div class='logincontent'>
        SangbusangJo community

        </div>
            <div>
                
                <input name="id"
                type="id" 
                placeholder="ID" 
                value={this.state.id} 
                onChange={(e) => this.inputHandler(e)} 
                class="loginregister__input"/>
                </div>
            <div>
                <input name="password" 
                type="password" 
                placeholder="PASSWORD"
                value={this.state.password} 
                onChange={(e) => this.inputHandler(e)} 
                class="loginregister__input"/></div>
                <Link to='/signup'>
                    <div className='signup'>You dont have account?</div>
                    </Link>
            <div>
                <button type="submit" onClick={this.loginRequestHandler} class="loginregister__button">Login</button>
                    </div>
                    {/* <div className='alert-box'> {errorMessage} </div> */}
            
        </form>
      </div>
      
    );
  }
}
  export default Login;
