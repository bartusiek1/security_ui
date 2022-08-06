import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.Home}>
            This is home page. IT works even though I'm not logged in.
        </div>
    );
};

export default Home;
