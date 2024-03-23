import React, { useState, useMemo , useCallback} from 'react';
import {Input, Button} from 'semantic-ui-react';
import {getUserApi, getAllUserApi} from '../apis/usersApi';
import {useNavigate} from 'react-router-dom'

function LoginForm() {
  
  const [id, setId] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
 
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToMain = (username) => {
    navigate(`/main/${username}`);
  };

  const handleLogin = useCallback((event) => {
    event.preventDefault(); // 기본적인 HTML 동작으로 인해 페이지가 새로고침 되는 것을 방지
    getUserApi(id).then((res) => {
      const {pw} = res;
      if(pw === password){
        setLoginSuccess(true);
      } else{
        alert('비밀번호가 틀렸습니다.');
      }
    }).catch((err) => {
      alert('존재하지 않는 유저네임입니다.');
      console.error(err);
    });
    setLoginId(id);
    setId("");
    setPassword("");
  },[id, password])

  return (
    <div style = {{textAlign: 'center', verticalAlign: 'center',}}>
      <h1> 로그인해주세요.</h1>
      <form onSubmit={handleLogin}>
        <Input value = {id} placeholder = 'id' onChange = {(event) => {
          setId(event.target.value);
        }}></Input>
        <br/><br/>
        <Input value = {password} placeholder = 'password' onChange = {(event) => {
          setPassword(event.target.value);
        }}></Input>
        <br/><br/>
        <Button type="submit">Login</Button>
        <Button type="button" onClick = {navigateToSignUp}>Sign up</Button>
      </form>
      {loginSuccess && navigateToMain(loginId)}
    </div>
  );
}

export default LoginForm;