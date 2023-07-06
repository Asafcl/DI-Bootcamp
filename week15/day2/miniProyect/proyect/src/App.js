import React from "react";
import "./App.css";
import {Card} from './components/Card.js'
import {Contact} from './components/Contact'
import {Header} from './components/Header'

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                icon='fa fa-building'
                // img='./C.png'
                title='About the Company' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section bg-grey'
                icon='fas fa-globe-africa'
                // img='./V.png'
                title='Our Values'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />

            <Card 
                className='section'
                icon='fas fa-landmark'
                // img='./M.png'
                title='Our Mission' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            <Contact/>
        </div>
    );
}














