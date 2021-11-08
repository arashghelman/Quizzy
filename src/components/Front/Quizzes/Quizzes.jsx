import React from 'react';

import FancyButton from '../../common/FancyButton/FancyButton';

import styles from './Quizzes.module.scss';

function Quizzes(props) {
    const {data} = props;
    
    return (
        <div className={styles['Quizzes']}>
            <h2 className={styles['Quizzes__heading']}>Select a quiz and let's begin.</h2>
            <div className={styles['Quizzes__collection']}>
                <div className={styles['Quizzes__collectionItem']}>
                    <div className={styles['Quizzes__collectionItemHeader']}>
                        <h2>Basic English Test - 1</h2>
                    </div>
                    <div className={styles['Quizzes__collectionItemMeta']}>
                        <div><span>⏱️</span><span>5 min.</span></div>
                        <div></div>
                        <div><span>🚀</span><span>Basic</span></div>
                    </div>
                    <div className={styles['Quizzes__collectionItemBody']}>
                        <p>
                            An english test to examine your basic english knowledge. Hope you enjoy it. 
                            Don't forget to take my other tests too!
                        </p>
                    </div>
                    <div className={styles['Quizzes__collectionItemFooter']}>
                        <FancyButton type='Primary'>Begin</FancyButton>
                    </div>
                </div>
                <div className={styles['Quizzes__collectionItem']}>
                    <div className={styles['Quizzes__collectionItemHeader']}>
                        <h2>Basic Spanish Test - 1</h2>
                    </div>
                    <div className={styles['Quizzes__collectionItemMeta']}>
                        <div><span>⏱️</span><span>5 min.</span></div>
                        <div></div>
                        <div><span>🚀</span><span>Basic</span></div>
                    </div>
                    <div className={styles['Quizzes__collectionItemBody']}>
                        <p>
                            Un examen de español para examinar tu conocimiento básico de inglés.
                            Yo espero que disfrutalo. No olvida que tomar mis otros examenes!
                        </p>
                    </div>
                    <div className={styles['Quizzes__collectionItemFooter']}>
                        <FancyButton type='Primary'>Begin</FancyButton>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Quizzes;