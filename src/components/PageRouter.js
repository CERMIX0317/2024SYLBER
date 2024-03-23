import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom'
import {getUserApi, getAllUserApi} from '../apis/usersApi';
import LoginForm from './LoginForm'
import SignUpForm from './SignUp'
import MainScreen from './MainScreen'
import SearchID from './SearchID'

function PageRouter({users}) {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<LoginForm/>} />
        <Route path = '/signup' element = {<SignUpForm/>} />
        {
            users.map(({id}) =>
                <Route path = {`${id}/main/`} element = {<MainScreen user = {id}/>} />
            )}
        {
            users.map(({id}) =>
                <Route path = {`${id}/friends/`} element = {<SearchID user = {id}/>} />
            )}     
      </Routes>
    </Router>
  );
}

export default PageRouter;