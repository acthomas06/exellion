import * as React from 'react'
import * as styles from './hero.css';

interface IHeroProps {
    videoSrc: string;
}

export class Hero extends React.Component<IHeroProps> {
    public render() {
        return (
            <div className={styles.heroContainer}>
                <video className={styles.heroVideo} autoPlay loop>
                    <source src={this.props.videoSrc} type="video/mp4"></source>
                </video>
            </div>
        );
    }
}