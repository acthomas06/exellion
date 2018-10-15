import * as React from 'react'
import { isMobile } from 'react-device-detect';
import * as styles from './Hero.css';

interface IHeroProps {
    videoSrc: string;
}

export class Hero extends React.PureComponent<IHeroProps> {
    public render() {
        return (
            <div className={styles.heroContainer}>
            {
                !isMobile ?
                <video className={styles.heroVideo} autoPlay loop playsinline muted>
                    <source src={this.props.videoSrc} type="video/mp4"></source>
                </video>
                :
                <div className={styles.logo}></div>
            }
            </div>
        );
    }
}