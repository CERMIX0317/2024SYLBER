import React, { useState, useMemo , useCallback} from 'react';
import FlowerList from './FlowerList'
import {Input, Button, Icon} from 'semantic-ui-react';
import ButtonField from './buttonField'
import MenuExampleText from './MenuView'
import HeaderExampleUsersIcon from './Header'
import LoginForm from './LoginForm'

const seedPos = {seedX: window.innerWidth/2, seedY: window.innerHeight/2};
function MainScreen({user}) {
  return (
    <div className="App">
        <HeaderExampleUsersIcon username = {user}/>
        <MenuExampleText username = {user}/>
      <ButtonField seedPos = {seedPos} username = {user}/>
    </div>
  );
}

export default MainScreen;