import React from 'react';
import styles from './styles.module.scss';
import imgClass from '../../assets/imgs/class-image.png';
const ClassItem = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['timetable']}>
        <div className={styles['list']}>
          <div className={styles['day']}>
            <div className={styles['dayofweek']}>Thứ hai</div>
            <div
              className={
                styles['dayofmonth'] + ' ' + styles['monday']
              }
            >
              19
            </div>
            <div className={styles['month']}>Tháng 4</div>
          </div>
          <div className={styles['detail']}>
            <div className={styles['subject']}>Lịch Sử 8</div>
            <div
              className={styles['lesson'] + ' ' + styles['monday']}
            >
              Trận đánh trên sông Bạch Đằng
            </div>
            <div className={styles['teacher']}>
              Đặng Thị Minh Hằng
            </div>
          </div>
        </div>
        <div className={styles['list']}>
          <div className={styles['day']}>
            <div className={styles['dayofweek']}>Thứ ba</div>
            <div
              className={
                styles['dayofmonth'] + ' ' + styles['tuesday']
              }
            >
              20
            </div>
            <div className={styles['month']}>Tháng 4</div>
          </div>
          <div className={styles['detail']}>
            <div className={styles['subject']}>Đại số 8</div>
            <div
              className={styles['lesson'] + ' ' + styles['tuesday']}
            >
              Hằng đẳng thức
            </div>
            <div className={styles['teacher']}>
              Đặng Thị Minh Hằng
            </div>
          </div>
        </div>
        <div className={styles['list']}>
          <div className={styles['day']}>
            <div className={styles['dayofweek']}>Thứ tư</div>
            <div
              className={
                styles['dayofmonth'] + ' ' + styles['wednesday']
              }
            >
              21
            </div>
            <div className={styles['month']}>Tháng 4</div>
          </div>
          <div className={styles['detail']}>
            <div className={styles['subject']}>Địa Lý 8</div>
            <div
              className={styles['lesson'] + ' ' + styles['wednesday']}
            >
              Đồng bằng Sông Cửu Long
            </div>
            <div className={styles['teacher']}>
              Đặng Thị Minh Hằng
            </div>
          </div>
        </div>
      </div>
      <div className={styles['timetable']}>
        <div className={styles['list']}>
          <div className={styles['day']}>
            <div className={styles['dayofweek']}>Thứ năm</div>
            <div
              className={
                styles['dayofmonth'] + ' ' + styles['thurday']
              }
            >
              22
            </div>
            <div className={styles['month']}>Tháng 4</div>
          </div>
          <div className={styles['detail']}>
            <div className={styles['subject']}>Hoá Học 8</div>
            <div
              className={styles['lesson'] + ' ' + styles['thurday']}
            >
              Hoá vô cơ
            </div>
            <div className={styles['teacher']}>
              Đặng Thị Minh Hằng
            </div>
          </div>
        </div>
        <div className={styles['list']}>
          <div className={styles['day']}>
            <div className={styles['dayofweek']}>Thứ sáu</div>
            <div
              className={
                styles['dayofmonth'] + ' ' + styles['frifay']
              }
            >
              23
            </div>
            <div className={styles['month']}>Tháng 4</div>
          </div>
          <div className={styles['detail']}>
            <div className={styles['subject']}>Vật lý 8</div>
            <div
              className={styles['lesson'] + ' ' + styles['frifay']}
            >
              Lực ma sát
            </div>
            <div className={styles['teacher']}>
              Đặng Thị Minh Hằng
            </div>
          </div>
        </div>
        <div className={styles['list']}>
          <div className={styles['day']}>
            <div className={styles['dayofweek']}>Thứ bảy</div>
            <div
              className={
                styles['dayofmonth'] + ' ' + styles['sartuday']
              }
            >
              24
            </div>
            <div className={styles['month']}>Tháng 4</div>
          </div>
          <div className={styles['detail']}>
            <div className={styles['subject']}>Đại số 8</div>
            <div
              className={styles['lesson'] + ' ' + styles['sartuday']}
            >
              Hằng đẳng thức
            </div>
            <div className={styles['teacher']}>
              Đặng Thị Minh Hằng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
