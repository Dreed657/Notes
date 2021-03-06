import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './navigation';

const App = (props) => {
    return (
        <Router>
            <Navigation />
        </Router>
    );
};

export default App;
