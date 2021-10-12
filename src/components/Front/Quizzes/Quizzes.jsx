import React from 'react';
import styles from './Quizzes.module.css';

function Quizzes() {
    
    return (
      <>
          <h2 className={styles['Quizzes__heading']}>Select a quiz and let's begin.</h2>
          <div className={styles['Quizzes__collection']}>
              <div className={styles['Quizzes__collectionItem']}>
                  <div className={styles['Quizzes__collectionItemHeader']}>
                      <h2>Basic English Test - 1</h2>
                      <div>Basic</div>
                      <h4>2 hours ago by</h4>
                  </div>
                  <p>
                      An english test to examine your basic english knowledge. Hope you enjoy it.
                      Don't forget to take my other tests too!
                  </p>
              </div>
              <div className={styles['Quizzes__collectionItem']}>
                  <div className={styles['Quizzes__collectionItemHeader']}>
                      <h2>Basic English Test - 2</h2>
                      <div>Basic</div>
                      <h4>2 hours ago by</h4>
                  </div>
                  <p>
                      An english test to examine your basic english knowledge. Hope you enjoy it.
                      Don't forget to take my other tests too!
                  </p>
              </div>
              <div className={styles['Quizzes__collectionItem']}>
                  <div className={styles['Quizzes__collectionItemHeader']}>
                      <h2>Prepositions Test</h2>
                      <div>Basic</div>
                      <h4>2 hours ago by</h4>
                  </div>
                  <p>
                      An english test to examine your knowledge of english prepositions. Hope you like it.
                  </p>
              </div>
          </div>
      </>  
    );
}

export default Quizzes;