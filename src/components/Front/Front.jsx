import React, { useState, useEffect } from 'react';

import FancyButton from "../common/FancyButton/FancyButton";
import Intro from "./Intro/Intro";
import Subjects from "./Subjects/Subjects";
import Quizzes from "./Quizzes/Quizzes";

import { subjectsIcon } from "../../utility/subjectsIcon";

import styles from './Front.module.css';

const subjects = [
    { id: 1, name: 'Entertainment' },
    { id: 2, name: 'Languages' },
    { id: 3, name: 'Maths' },
    { id: 4, name: 'Social studies' },
    { id: 5, name: 'Sports' }
];

function Front() {
    const [isStarted, setIsStarted] = useState(false);
    
    const [subjectsData, setSubjectsData] = useState([]);
    useEffect(() => {
        let subjectsWithIcon = subjects.map(x => 
            ({...x, icon: subjectsIcon.get(x.name)})
        );
        
        setSubjectsData(subjectsWithIcon);
    }, []);
    
    const onStartButtonClickedHandler = () => setIsStarted(true);
    const actions = (
        <>
            <FancyButton type='Primary' onButtonClicked={() => onStartButtonClickedHandler()}>Get started</FancyButton>
            <FancyButton type='Secondary'>I already have an account</FancyButton>
        </>
    );
    
    return (
        <div className={styles['Front']}>
            <h1 className={styles['Front__heading']}>
                The fun and effective way to challenge your <br/> knowledge!
            </h1>
            { isStarted ? 
                <div className={styles['Front__subjectsRow']}>
                    <Subjects data={subjectsData} />
                </div> : 
                <div className={styles['Front__introRow']}>
                    <Intro actions={actions} />
                </div> }
            <Quizzes />
        </div>
    )
}

export default Front;