import * as React from 'react';
import * as styles from './Home.css';

export class Home extends React.Component {
   render() {
    console.log(styles);
    return <h1 className={styles.title}>TEST</h1>
   }
}