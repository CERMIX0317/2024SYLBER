import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './HeaderExampleUsersIcon.css'; // Import CSS for styling

const HeaderExampleUsersIcon = ({ username }) => (
  <div className="custom-header-container">
    <div className="welcome-message">
      <span>{username}님 환영합니다! </span>
      <Icon name='smile outline' circular verticalAlign='top' />
    </div>
    <Header as="h1" textAlign="center" className="header-text">
      <span>Hello Garden!</span>
    </Header>
  </div>
);

export default HeaderExampleUsersIcon;
