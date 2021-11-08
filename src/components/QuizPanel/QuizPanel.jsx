import React from 'react';

import OverviewForm from './OverviewForm/OverviewForm';

import styles from './QuizPanel.module.scss';

function QuizPanel() {

    return (
        <div className={styles['QuizPanel']}>
            <OverviewForm />
        </div>
    );
};

export default QuizPanel;