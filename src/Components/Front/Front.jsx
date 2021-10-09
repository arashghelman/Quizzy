import React from 'react';
import FancyButton from "../_Common/FancyButton/FancyButton";
import styles from './Front.module.css';

function Front() {
    
    return (
        <div className={styles['Front']}>
            <h1>
                The fun and effective way to challenge your <br/> knowledge!
            </h1>
            <div className={styles['Front__actions-row']}>
                <FancyButton type='primary'>Get started</FancyButton>
                <FancyButton type='secondary'>I already have an account</FancyButton>
            </div>
            <div className={styles['Front__intro-row']}>
                <div className={styles['Front__left-intro']}>
                    <div className={styles['Front__intro-title']}>
                        <h2>💪</h2>
                        <h2>Show 'em what you got!</h2>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolor earum et expedita harum,
                        in ipsum magnam neque optio porro possimus quasi, quibusdam quisquam quos sunt suscipit voluptatem? Iusto!
                    </span>
                </div>
                <div className={styles['Front__right-intro']}>
                    <div className={styles['Front__intro-title']}>
                        <h2>🔥</h2>
                        <h2>Challenge others</h2>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolor earum et expedita harum,
                        in ipsum magnam neque optio porro possimus quasi, quibusdam quisquam quos sunt suscipit voluptatem? Iusto!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Front;