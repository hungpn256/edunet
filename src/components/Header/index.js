import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import styles from './styles.module.scss';
import search from '../../assets/imgs/icon-search.png';
import Profile from '../../assets/imgs/Profile.png';
class Menu extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className={styles['NavBar']}>
          <div className={styles['profile']}>
            <img src={Profile} alt='' />
            <div>Hung</div>
          </div>
          <div className={styles['logo']}>
            <img src={logo} alt='' />
            <span>edunet</span>
          </div>
          <div className={styles['auth']}>
            <img src={search} alt='' />
          </div>
        </div>
        <div className={styles['flex']}>
          <div className={styles['side-bar']}>
            <div className={styles['side-bar-link']}>
              <div className={styles['side-bar-title']}>
                Tài Khoản
              </div>
              <ul className={styles['option-list']}>
                <li className={styles['option-item']}>
                  <a href='/student'>Lịch học</a>
                </li>
                <li className={styles['option-item']}>
                  <a href='/purcharse'>Bảng điểm</a>
                </li>
                <li className={styles['option-item']}>
                  <a href='/pricing-student'>Bài đámh giá</a>
                </li>
              </ul>
            </div>
            <div className={styles['side-bar-link']}>
              <div className={styles['side-bar-title']}>Khoá Học</div>
              <ul className={styles['option-list']}>
                <li className={styles['option-item']}>
                  <a href='/student'>Khóa học đang tham gia</a>
                </li>
                <li className={styles['option-item']}>
                  <a href='/student'>Khoá học HOT</a>
                </li>
                <li className={styles['option-item']}>
                  <a href='/student'>Khóa học dành cho bạn</a>
                </li>
              </ul>
            </div>
            <div className={styles['side-bar-link']}>
              <div className={styles['side-bar-title']}>
                Tài Khoản
              </div>
              <ul className={styles['option-list']}>
                <li className={styles['option-item']}>
                  <a href='/student'>Lịch học</a>
                </li>
                <li className={styles['option-item']}>
                  <a href='/student'>Bảng điểm</a>
                </li>
                <li className={styles['option-item']}>
                  <a href='/student'>Bài đámh giá</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['content']}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
