import React, { useState, useEffect } from 'react';

import FancyButton from "../common/FancyButton/FancyButton";
import Intro from "./Intro/Intro";
import Subjects from "./Subjects/Subjects";
import Quizzes from "./Quizzes/Quizzes";

import { subjectsIcon } from "../../utility/subjectsIcon";

import styles from './Front.module.scss';

const subjects = [
    { id: 1, name: 'Entertainment' },
    { id: 2, name: 'Languages' },
    { id: 3, name: 'Maths' },
    { id: 4, name: 'Social studies' },
    { id: 5, name: 'Sports' }
];

const quizzes = [
    { 
        id: 1, 
        title: 'Basic English Test - 1',
        level: 'Basic',
        description: `An english test to examine your basic english knowledge. Hope you enjoy it. 
            Don't forget to take my other tests too!`,
        creator: {
            id: 1,
            profileName: 'arashgh-78'
        }
    },
    { 
        id: 1, 
        title: 'Basic English Test - 2',
        level: 'Basic',
        description: `An english test to examine your basic english knowledge. Hope you enjoy it. 
            Don't forget to take my other tests too!`,
        creator: {
            id: 1,
            profileName: 'arashgh-78'
        }
    },
    { 
        id: 1, 
        title: 'Prepositions Test',
        level: 'Intermediate',
        description: `An english test to examine your knowledge of english prepositions. Hope you like it.`,
        creator: {
            id: 2,
            profileName: 'shadighelman'
        }
    }
]

function Front() {
    const [isStarted, setIsStarted] = useState(false);
    
    const [subjectsData, setSubjectsData] = useState([]);
    useEffect(() => {
        let subjectsWithIcon = subjects.map(x => 
            ({...x, icon: subjectsIcon.get(x.name)})
        );
        
        setSubjectsData(subjectsWithIcon);
    }, []);

    const [quizzesData, setQuizzesData] = useState([]);
    useEffect(() => {
        setQuizzesData(quizzes);
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
            <div className={styles['Front__content']}>
                { isStarted ? <Subjects data={subjectsData} /> : <Intro actions={actions} /> }
            </div>
        </div>
    )
}

export default Front;