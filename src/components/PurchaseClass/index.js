import React from 'react';
import styles from './styles.module.scss';
import van from '../../assets/imgs/van.png';
const ClassItem = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['class-name']}>Ngoại Ngữ 8</div>
        <div className={styles['class-description']}>
          Công phá môn Tiếng Anh 8+
        </div>
        <div className={styles['class-teacher-name']}>
          Bùi Văn Vinh
        </div>
        <div className={styles['wrapper-image']}>
          <img src={van} alt='' />
        </div>
        <button className={styles['btn-footer']}>
          120.00VND/4buoi
        </button>
      </div>
    </div>
  );
};

export default ClassItem;
