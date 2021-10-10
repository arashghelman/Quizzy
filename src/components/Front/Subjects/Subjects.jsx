import React from 'react';
import styles from './Subjects.module.css';

function Subjects(props) {
    const {data} = props;
    
    return (
        <>
            <h2 className={styles['Subjects__heading']}>Pick one to continue ...</h2>
            <div className={styles['Subjects__collection']}>
                <div className={styles['Subjects__collection-item']}>
                    <h3>🌟</h3>
                    <h3>Entertainment</h3>
                </div>
                <div className={styles['Subjects__collection-item']}>
                    <h3>🗣️</h3>
                    <h3>Languages</h3>
                </div>
                <div className={styles['Subjects__collection-item']}>
                    <h3>🧮</h3>
                    <h3>Maths</h3>
                </div>
                <div className={styles['Subjects__collection-item']}>
                    <h3>🌎</h3>
                    <h3>Social studies</h3>
                </div>
                <div className={styles['Subjects__collection-item']}>
                    <h3>⚽</h3>
                    <h3>Sports</h3>
                </div>
            </div>
        </>
    );
}

export default Subjects;