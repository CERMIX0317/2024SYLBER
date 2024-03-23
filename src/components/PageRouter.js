import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom'
import {getUserApi, getAllUserApi} from '../apis/usersApi';
import LoginForm from './LoginForm'
import SignUpForm from './SignUp'
import MainScreen from './MainScreen'


function PageRouter({users}) {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<LoginForm/>} />
        <Route path = '/signup' element = {<SignUpForm/>} />
        {
            users.map(({id}) =>
                <Route path = {`/main/${id}`} element = {<MainScreen user = {id}/>} />
            )
        }     
      </Routes>
    </Router>
  );
}

export default PageRouter;