import React, { useState, useEffect, useMemo } from 'react';
import FlowerList from './components/FlowerList'
import {Input, Button, Icon} from 'semantic-ui-react';
import ButtonField from './components/buttonField'
import MenuExampleText from './components/MenuView'
import HeaderExampleUsersIcon from './components/Header'
import LoginForm from './components/LoginForm'

function App() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const seedPos = useMemo(() => {
        return {
            seedX: windowSize.width / 2,
            seedY: windowSize.height / 2
        };
    }, [windowSize]);

    return (
        <div className="App">
            <HeaderExampleUsersIcon username="SJB" />
            <MenuExampleText/>
            <ButtonField seedPos={seedPos} username="SJB" />
        </div>
    );
}

export default App;
