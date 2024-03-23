import React, { useState, useMemo , useCallback} from 'react';
import {Input, Button} from 'semantic-ui-react';

function LoginForm({users}) {
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const info = useMemo(() => {return {username: id, password: password};});

  const handleLogin = useCallback((event) => {
    event.preventDefault(); // 기본적인 HTML 동작으로 인해 페이지가 새로고침 되는 것을 방지
    if(users.find((element) => {return (element.username == info.username && element.password == info.password);})) {
      setLoginSuccess(true);
    } else {
      alert('나가');
    }
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
        <Button type="button">Sign up</Button>
      </form>
      {loginSuccess && <div>환영합니다.</div>}
    </div>
  );
}

export default LoginForm;