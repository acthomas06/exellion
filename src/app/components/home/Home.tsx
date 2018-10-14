import * as React from 'react';
import '../../../assets/videos/Logo.mp4';
import { Hero } from '../hero/hero';
import * as styles from './home.css';

export class Home extends React.Component {
    public video = 'videos/Logo.mp4';
    render() {
        return (
            <div className={styles.homeContainer}>
                <Hero videoSrc={this.video}/>
                <div className={styles.construction}>
                    Under Construction
                </div>
            </div>
        );
    }
}