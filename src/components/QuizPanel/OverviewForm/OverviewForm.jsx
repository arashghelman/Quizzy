import React, {useState, useRef} from 'react';

import FancyButton from '../../common/FancyButton/FancyButton';

import styles from './OverviewForm.module.scss';

function OverviewForm() {

    const [formInput, setFormInput] = useState({
        name: '',
        subjects: [],
        level: ''
    });

    const [subjects, setSubjects] = useState([
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
        {id: '11', name: 'Information Technology'},
        {id: '12', name: 'Computers'}
    ]);

    const subjectsRef = useRef([]);

    const levels = [
        {name: 'Basic', icon: '😊'},
        {name: 'Intermediate', icon: '😎'},
        {name: 'Advanced', icon: '🤩'}
    ];

    const handleEnterName = event => {
        const updatedFormInput = {...formInput};
        updatedFormInput.name = event.target.value;
        setFormInput(updatedFormInput);
    }

    const handleSelectSubject = subjectId => {
        const updatedFormInput = {...formInput, subjects: [...formInput.subjects]};

        var selectedSubjectId = formInput.subjects.find(x => x === subjectId);
        if (selectedSubjectId !== undefined) {
            updatedFormInput.subjects = formInput.subjects.filter(x => x !== selectedSubjectId);
            setFormInput(updatedFormInput);
            return;
        }

        if (formInput.subjects.length >= 3) {
            const firstSelectedId = updatedFormInput.subjects.shift();
            const firstSelectedInputRef = subjectsRef.current.find(x => x.id === firstSelectedId);
            firstSelectedInputRef.checked = false;
        }

        updatedFormInput.subjects.push(subjectId);
        setFormInput(updatedFormInput);
    }

    const handleSelectLevel = levelName => {
        const updatedFormInput = {...formInput};
        updatedFormInput.level = levelName;
        setFormInput(updatedFormInput);
    }

    return (
        <div className={styles['Modal']}>
            <div className={styles['Modal__header']}>
                <h2 className={styles['Modal__heading']}>Create a quiz</h2>
                <button className={styles['Modal__closeButton']}>&#x2715;</button>
            </div>
            <div className={styles['Modal__body']}>
                <form className={styles['OverviewForm']}>
                    <div className={styles['OverviewForm__element']}>
                        <label htmlFor='name'>Name this quiz</label>
                        <input type='text' id='name' placeholder='Enter a name' 
                            onChange={(event) => handleEnterName(event)} />
                        <div className={styles['OverviewForm__hint']}>
                            <span>❗</span>
                            <span>Please enter a name longer than 4 characters</span>
                        </div>
                    </div>
                    <div className={styles['OverviewForm__element']}>
                        <label>Choose relevant subjects</label>
                        <div className={styles['OverviewForm__subjects']}>
                            {subjects.map((x, i) =>
                                <div className={styles['OverviewForm__subjectItem']} key={x.id}>
                                    <input type='checkbox' id={x.id} name='subject'
                                        ref={r => subjectsRef.current[i] = r}
                                        onChange={() => handleSelectSubject(x.id)} />
                                    <label className={styles['OverviewForm__subjectItemName']} htmlFor={x.id}>
                                        {x.name}
                                    </label>
                                </div>
                            )}
                            <span>more...</span>
                        </div>
                        <div className={styles['OverviewForm__hint']}>
                            <span>❗</span>
                            <span>Please select relevant subjects for better user suggestions</span>
                        </div>
                    </div>
                    <div className={styles['OverviewForm__element']}>
                        <label>Pick a level</label>
                        <div className={styles['OverviewForm__levels']}>
                            {levels.map(x =>
                                <div className={styles['OverviewForm__levelItem']} key={x.name}>
                                    <input type='radio' id={x.name} name='level' onChange={() => handleSelectLevel(x.name)} />
                                    <label className={styles['OverviewForm__levelItemIcon']} htmlFor={x.name}>
                                        {x.icon}
                                    </label>
                                    <label className={styles['OverviewForm__levelItemName']} htmlFor={x.name}>
                                        {x.name}
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className={styles['OverviewForm__hint']}>
                            <span>❗</span>
                            <span>Please select a level for better user suggestions</span>
                        </div>
                    </div>
                    <div className={styles['OverviewForm__actions']}>
                            <FancyButton type='Cancel'>Cancel</FancyButton>
                            <FancyButton type='Submit'>Next</FancyButton>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default OverviewForm;