import React from 'react';
import { render } from 'react-dom';
import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';

function App() {
    return (
        <>
            <Nav />
            <Body />
        </>
    );
}

render(<App />, document.getElementById('app'));
