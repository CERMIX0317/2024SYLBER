import React, { Component } from 'react'
import { MenuItem, Header, Menu } from 'semantic-ui-react'

export default class MenuExampleText extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical fixed="right"> {/* fixed="right" 추가 */}
                <MenuItem
                    name='About'
                    active={activeItem === 'About'}
                    onClick={this.handleItemClick}
                >
                    <Header as='h4'>About</Header>
                    <p>About out service!</p>
                </MenuItem>

                <MenuItem
                    name='Friends'
                    active={activeItem === 'Friends'}
                    onClick={this.handleItemClick}
                >
                    <Header as='h4'>Friends</Header>
                    <p>Check out the garden of your friends!</p>
                </MenuItem>

                <MenuItem
                    name='Postbox'
                    active={activeItem === 'Postbox'}
                    onClick={this.handleItemClick}
                >
                    <Header as='h4'>Postbox</Header>
                    <p>Check out new updates!</p>
                </MenuItem>
            </Menu>
        )
    }
}
