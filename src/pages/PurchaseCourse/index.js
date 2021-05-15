import React from 'react';
import styles from './styles.module.scss';
import Search from '../../components/Search';
import PurchaseClass from '../../components/PurchaseClass';

const index = () => {
  return (
    <div className={styles['container']}>
      <Search></Search>
      <div>
        <div className={styles['text-header']}>Toán học</div>
        <div className={styles['scroll-list']}>
          <div className={styles['course-list']}>
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
          </div>
        </div>
      </div>{' '}
      <div>
        <div className={styles['text-header']}>Toán học</div>
        <div className={styles['scroll-list']}>
          <div className={styles['course-list']}>
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
          </div>
        </div>
      </div>
      <div>
        <div className={styles['text-header']}>Toán học</div>
        <div className={styles['scroll-list']}>
          <div className={styles['course-list']}>
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
            <PurchaseClass />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
