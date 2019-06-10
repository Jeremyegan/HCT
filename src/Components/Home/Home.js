import React from 'react';
import Tasks from './../Tasks/Tasks';
import Cloths from './../Cloths/Cloths';
import Login from './../Login/Login';


export default function Home() {
    return (
        <div>
            <Cloths></Cloths>
            <Tasks />
        </div>
    )
}