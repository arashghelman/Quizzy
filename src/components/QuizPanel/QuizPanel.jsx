import React from 'react';

import OverviewForm from './OverviewForm/OverviewForm';

import styles from './QuizPanel.module.scss';

function QuizPanel() {

    return (
        <div className={styles['QuizPanel']}>
            <div className={styles['RightBar']}>
                <div className={styles['OverviewSection']}>
                    <div className={styles['OverviewSection__image']}>
                        <i className="fas fa-image"></i>
                        <span>Click here to upload a quiz image</span>
                    </div>
                    <div className={styles['OverviewSection__row']}>
                        <h2>Untitled</h2>
                        <button>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className={styles['OverviewSection__row']}>
                        <i className="fas fa-eye"></i>
                        <span>Public</span>
                        <i class="fa fa-sort" aria-hidden="true"></i>
                        <span>Basic</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPanel;