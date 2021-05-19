import React from 'react';
import styles from './styles.module.scss';
import Search from '../../components/Search';
import ClassItem from '../../components/ClassItem';

const index = () => {
  return (
    <div className={styles['container']}>
      <Search></Search>
      <div className={styles['class-list']}>
        <ClassItem />
        <ClassItem />
        <ClassItem />
        <ClassItem />
        <ClassItem />
        <ClassItem />
      </div>
    </div>
  );
};

export default index;
