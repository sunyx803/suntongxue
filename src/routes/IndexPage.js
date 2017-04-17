import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

 class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to 姚同学!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="#/sun">Getting Started</a></li>

      </ul>
      <div>
         {this.props.children}
      </div>
    </div>
  );
}

  }
 
IndexPage.propTypes = {
};

export default connect()(IndexPage);
