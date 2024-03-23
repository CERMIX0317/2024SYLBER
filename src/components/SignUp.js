import React, { useState, useMemo , useCallback} from 'react';
import {Input, Button, FormCheckbox} from 'semantic-ui-react';
import {getUserApi, getAllUserApi, postUserApi} from '../apis/usersApi';
import {useNavigate} from 'react-router-dom'

function SignUpForm() {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();
 
  const navigateToLogin = () => {
    navigate(-1);
  };

  const handleLogin = useCallback((event) => {
    event.preventDefault(); // 기본적인 HTML 동작으로 인해 페이지가 새로고침 되는 것을 방지
    getUserApi(id).then((res) => {
      alert('이미 존재하는 아이디입니다.');
    }).catch((err) => {
      if(password.length<8) {
        alert('비밀번호는 8자리 이상이어야 합니다');
      } else if(!check) {
        alert('약관 동의를 해주세요');
      } else {
        setSignUpSuccess(true);
        postUserApi(id, password)
        .catch((err) => {
          console.error(err);
        });
      }
    });
    setId("");
    setPassword("");
  },[id, password, check])

  return (
    <div style = {{textAlign: 'center', verticalAlign: 'center',}}>
      <h1> 회원가입을 해주세요.</h1>
      <form onSubmit={handleLogin}>
        <Input value={id} placeholder='id' onChange={(event) => {
          setId(event.target.value);
        }}></Input>
        <br/><br/>
        <Input value={password} placeholder='password(8자리 이상)' onChange={(event) => {
          setPassword(event.target.value);
        }}></Input>
        <br/><br/>
        <FormCheckbox
            value="accepted"
            unchecked-value="not_accepted"
            label='I agree to the Terms and Conditions'
            onChange = {(event) => { setCheck(!check); }}
        />
        <br/>
        <Button type="submit">Sign up</Button>
      </form>
      {(signUpSuccess) && (navigateToLogin())}
    </div>
  );
}

export default SignUpForm;