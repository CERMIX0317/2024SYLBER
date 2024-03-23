import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom'
import {getUserApi, getAllUserApi} from '../apis/usersApi';
import LoginForm from './LoginForm'
import SignUpForm from './SignUp'
import MainScreen from './MainScreen'
import SearchID from './SearchID'
import AboutPage from './AboutPage'
import GiveFlower from './GiveFlower'

function PageRouter({users}) {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<LoginForm/>} />
        <Route path = '/signup' element = {<SignUpForm/>} />
        <Route path = '/about' element = {<AboutPage/>} />
        {
            users.map(({id}) =>
                <Route path = {`${id}/main/`} element = {<MainScreen user = {id}/>} />
            )}
        {
            users.map(({id}) =>
                <Route path = {`${id}/friends/`} element = {<SearchID user = {id}/>} />
            )}   
        {  
            users.map(({id}) =>
                <Route path = {`${id}/giveflower/`} element = {<GiveFlower myuser = {id}/>} />
            )}     
        
      </Routes>
    </Router>
  );
}

export default PageRouter;