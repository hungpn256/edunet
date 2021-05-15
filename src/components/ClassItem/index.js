import React from 'react';
import styles from './styles.module.scss';
import imgClass from '../../assets/imgs/class-image.png';
const ClassItem = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['image-wrapper']}>
        <img src={imgClass} alt=''></img>
      </div>
      <div className={styles['content']}>
        <div className={styles['class-name']}>Ngoại Ngữ 8</div>
        <div className={styles['class-description']}>
          Công phá môn Tiếng Anh 8+
        </div>
        <div className={styles['class-teacher-name']}>
          Bùi Văn Vinh
        </div>
        <div className={styles['footer']}>
          <div className={styles['class-button']}>Xem thử</div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
