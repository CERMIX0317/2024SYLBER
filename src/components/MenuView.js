import React, { Component, useCallback } from 'react'
import { MenuItem, Header, Menu } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

const MenuExampleText = ({username}) => {

    
    const navigate = useNavigate();
 
    const navigateToFriends = (username) => {
        navigate(`/${username}/friends`);
    };
    const navigateToAbout = () => {
        navigate(`/about`);
    };
    const navigateToGive = (username) => {
        navigate(`/${username}/giveflower`);
    };

    return (
        <Menu vertical fixed="right"> {/* fixed="right" 추가 */}
            <MenuItem
                name='About'
                onClick={() => {navigateToAbout()}}
            >
                <Header as='h4'>About</Header>
                <p>About out service!</p>
            </MenuItem>

            <MenuItem
                name='Friends'
                onClick={() => {navigateToFriends(username)}}
            >
                <Header as='h4'>Friends</Header>
                <p>Check out the garden of your friends!</p>
            </MenuItem>

            <MenuItem
                name='Give Flowers'
                onClick={() => {navigateToGive(username)}}
            >
                <Header as='h4'>Give Flowers</Header>
                <p>Send your flowers!</p>
            </MenuItem>
        </Menu>
    );
}

export default MenuExampleText;
