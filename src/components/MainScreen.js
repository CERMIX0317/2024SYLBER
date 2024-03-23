import React, { useState, useMemo , useCallback} from 'react';
import FlowerList from './components/FlowerList'
import {Input, Button, Icon} from 'semantic-ui-react';
import ButtonField from './components/buttonField'
import MenuExampleText from './components/MenuView'
import HeaderExampleUsersIcon from './components/Header'
import LoginForm from './components/LoginForm'

const seedPos = {seedX: window.innerWidth/2, seedY: window.innerHeight/2};
function MainScreen() {
  return (
    <div className="App">
        <HeaderExampleUsersIcon/>
        <MenuExampleText/>
      <ButtonField seedPos = {seedPos} username = 'SJB'/>
    </div>
  );
}

export default MainScreen;