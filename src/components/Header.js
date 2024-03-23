import React from 'react'
import { HeaderContent, Header, Icon, Image } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
    <div style={{
        borderRadius: 10,
        backgroundColor: '#e5e5e5',
        padding: 20,
    }}>
        <Header as='h2' icon textAlign='center'>
            <Icon name='heart' circular />
            <HeaderContent>한송이</HeaderContent>
        </Header>
    </div>
)

export default HeaderExampleUsersIcon
