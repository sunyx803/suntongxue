import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function Sunyx() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to 齐天大圣!</h1>
     <h1 className={styles.title}>a:你瞅啥？</h1>
     <h1 className={styles.title}>b:瞅你咋滴？</h1>
     <h1 className={styles.title}>c:削他！！！</h1>
     <a href="#/IndexPage">返回首页</a>
    </div>
  );
}

 Sunyx.propTypes = {
};

export default connect()( Sunyx);
