import React from 'react';
import styles from './Intro.module.css';

function Intro(props) {
    const { actions } = props;
    
    return (
        <>
            <div className={styles['Intro__actions-row']}>
                { actions }
            </div>
            <div className={styles['Intro__summary-row']}>
                <div className={styles['Intro__summary']}>
                    <h3 className={styles['Intro__summary-left']}>💪</h3>
                    <div className={styles['Intro__summary-right']}>
                        <h3>Show 'em what you got!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolor earum et expedita harum,
                            in ipsum magnam neque optio porro possimus quasi, quibusdam quisquam quos sunt suscipit voluptatem? Iusto!
                        </p>
                    </div>
                </div>
                <div className={styles['Intro__summary']}>
                    <h3 className={styles['Intro__summary-left']}>🔥</h3>
                    <div className={styles['Intro__summary-right']}>
                        <h3>Challenge others</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolor earum et expedita harum,
                            in ipsum magnam neque optio porro possimus quasi, quibusdam quisquam quos sunt suscipit voluptatem? Iusto!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;