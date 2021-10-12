import React from 'react';
import styles from './Subjects.module.css';

function Subjects(props) {
    const { data } = props;
    
    return (
        <>
            <h2 className={styles['Subjects__heading']}>Pick one to continue ...</h2>
            <div className={styles['Subjects__collection']}>
                {
                    data.map(x => 
                        <div key={x.id} className={styles['Subjects__collectionItem']}>
                            <h3>{x.icon}</h3>
                            <h3>{x.name}</h3>
                        </div>)
                }
            </div>
        </>
    );
}

export default Subjects;