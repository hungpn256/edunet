import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const index = () => {
  return (
    <div className={styles['wapper-search-box']}>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 29V22'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M12 18V11'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M20 29V20'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M20 16V11'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M28 29V24'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M28 20V11'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M9 22H15'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M17 16H23'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M25 24H31'
          stroke='#5C5C5C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
      <span className={styles['filter-text']}>Bộ lọc</span>
      <div className={styles['search-box']}>
        <select>
          <option>Sách</option>
        </select>
        <input placeholder='Tìm kiếm...'></input>
        <FontAwesomeIcon
          className={styles['icon-search']}
          icon={faSearch}
        />
      </div>
    </div>
  );
};

export default index;
