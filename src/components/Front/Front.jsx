import React, { useState } from 'react';
import FancyButton from "../common/FancyButton/FancyButton";
import Intro from "./Intro/Intro";
import Subjects from "./Subjects/Subjects";
import styles from './Front.module.css';

function Front() {
    const [isStarted, setIsStarted] = useState(false);
    const [subjectsData, setSubjectsData] = useState([]);
    
    const onStartButtonClickedHandler = () => setIsStarted(true);
    const actions = (
        <>
            <FancyButton type='primary' onButtonClicked={() => onStartButtonClickedHandler()}>Get started</FancyButton>
            <FancyButton type='secondary'>I already have an account</FancyButton>
        </>
    );
    
    return (
        <div className={styles['Front']}>
            <h1 className={styles['Front__heading']}>
                The fun and effective way to challenge your <br/> knowledge!
            </h1>
            { isStarted ? 
                <div className={styles['Front__subjects-row']}>
                    <Subjects data={subjectsData} />
                </div> : 
                <div className={styles['Front__intro-row']}>
                    <Intro actions={actions} />
                </div> }
        </div>
    )
}

export default Front;