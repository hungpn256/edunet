import React from 'react';
import styles from './styles.module.scss';
import mochi from '../../assets/imgs/mochi.png';
const ClassItem = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['icon']}>
        <img className={styles['img']} src={mochi} alt=''></img>
      </div>
      <div className={styles['infor']}>
        <div className={styles['name']}>khanhvy__</div>
        <div className={styles['address']}>
          <div className={styles['number']}>300 XP</div>
          <div className={styles['dots']}></div>
          <div className={styles['namedistrict']}>Tớ ở Hà Đông</div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
