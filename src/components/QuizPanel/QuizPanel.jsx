import React, {useState, useEffect} from 'react';

import FancyButton from '../common/FancyButton/FancyButton';

import styles from './QuizPanel.module.scss';

const subjectsData = [
    {id: '1', name: 'Architecture'},
    {id: '2', name: 'Arts'},
    {id: '3', name: 'Biology'},
    {id: '4', name: 'Business'},
    {id: '5', name: 'English'},
    {id: '6', name: 'Chemistry'},
    {id: '7', name: 'History'},
    {id: '8', name: 'Fun'},
    {id: '9', name: 'Physics'},
    {id: '10', name: 'Geography'},
    {id: '11', name: 'Information Technology'}
];

function QuizPanel() {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const updatedSubjects = subjectsData.map(x => (
            {...x, isSelected: false}
        ));
        setSubjects(updatedSubjects);
    }, []);

    const toggleSubjectItemHandler = subjectId => {
        const updatedSubjects = subjects.slice();
        const selectedSubject = updatedSubjects.find(x => x.id === subjectId);
        selectedSubject.isSelected = !selectedSubject.isSelected;
        setSubjects(updatedSubjects);
    }

    const [levels, setLevels] = useState([
        {name: 'Basic', icon: '😊', isSelected: false},
        {name: 'Intermediate', icon: '💪', isSelected: false},
        {name: 'Advanced', icon: '🔥' , isSelected: false}
    ]);

    const toggleLevelItemHandler = itemIndex => {
        const updatedLevels = levels.slice();
        const selectedLevel = updatedLevels[itemIndex];
        selectedLevel.isSelected = !selectedLevel.isSelected;
        setLevels(updatedLevels);
    };

    return (
        <div className={styles['QuizPanel']}>
            <div className={styles['Modal']}>
                <div className={styles['Modal__header']}>
                    <h2 className={styles['Modal__heading']}>Create a quiz</h2>
                </div>
                <div className={styles['Modal__body']}>
                    <form className={styles['createForm']}>
                        <div className={styles['createForm__element']}>
                            <label>Name this quiz</label>
                            <input type='text' placeholder='Enter a name'/>
                        </div>
                        <div className={styles['createForm__element']}>
                            <label>Choose relevant subjects</label>
                            <div className={styles['createForm__subjects']}>
                                {subjects.map(x => 
                                    <div className={styles[`createForm__subjectItem${x.isSelected ? '_selected': ''}`]} 
                                        key={x.id}
                                        onClick={() => toggleSubjectItemHandler(x.id)}>{x.name}</div>)}
                            </div>
                        </div>
                        <div className={styles['createForm__element']}>
                            <label>Pick a level</label>
                            <div className={styles['createForm__levels']}>
                                {levels.map((x, i) => 
                                    <div className={styles[`createForm__levelItem${x.isSelected ? `_selected${x.name}` : ''}`]}
                                        key={i}
                                        onClick={() => toggleLevelItemHandler(i)}>
                                        <div>{x.icon}</div>
                                        <div>{x.name}</div>
                                    </div>)}
                            </div>
                        </div>
                        <div className={styles['createForm__actions']}>
                            <FancyButton type='Cancel'>Cancel</FancyButton>
                            <FancyButton type='Submit'>Next</FancyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuizPanel;