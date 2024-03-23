import React from 'react'
import { HeaderContent, Header, Icon, Image } from 'semantic-ui-react'

const HeaderExampleUsersIcon = ({username}) => (
    <div>
        <div style={{
            borderRadius: 10,
            backgroundColor: '#e5e5e5',
            font: '18px Century Gothic',
            padding: 10,
        }}>
            <span>{username}님 환영합니다! </span>
            <Icon name='smile outline' circular verticalAlign='top'/> {/* verticalAlign='top' 추가 */}
            <h1  style={{textAlign: 'center',
                font: '48px Century Gothic',
                padding: 20,}}>
                <span>Hello Garden!</span>
            </h1>
        </div>
    </div>
)

export default HeaderExampleUsersIcon
