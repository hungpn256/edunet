import React from 'react';
import styles from './styles.module.scss';

const ClassItem = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['capacity']}>
        <div className={styles['title-capacity']}>
          Đánh giá năng lực
        </div>

        <div className={styles['subject']}>
          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Toán Học</div>
            <div
              className={styles['color'] + ' ' + styles['math']}
            ></div>
            <div className={styles['soccer']}>4,0</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Ngữ Văn</div>
            <div
              className={styles['color'] + ' ' + styles['literature']}
            ></div>
            <div className={styles['soccer']}>7,8</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Ngoại Ngữ</div>
            <div
              className={styles['color'] + ' ' + styles['language']}
            ></div>
            <div className={styles['soccer']}>5,6</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Vật Lý</div>
            <div
              className={styles['color'] + ' ' + styles['physic']}
            ></div>
            <div className={styles['soccer']}>6,3</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Hoá Học</div>
            <div
              className={styles['color'] + ' ' + styles['chemistry']}
            ></div>
            <div className={styles['soccer']}>7,0</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Sinh Học</div>
            <div
              className={styles['color'] + ' ' + styles['biology']}
            ></div>
            <div className={styles['soccer']}>9,1</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Tin Học</div>
            <div
              className={
                styles['color'] + ' ' + styles['informatics']
              }
            ></div>
            <div className={styles['soccer']}>5,0</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Lịch Sử</div>
            <div
              className={styles['color'] + ' ' + styles['history']}
            ></div>
            <div className={styles['soccer']}>8,0</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Địa Lý</div>
            <div
              className={styles['color'] + ' ' + styles['geography']}
            ></div>
            <div className={styles['soccer']}>9,8</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>GDCD</div>
            <div
              className={
                styles['color'] + ' ' + styles['religious-education']
              }
            ></div>
            <div className={styles['soccer']}>10,0</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Công Nghệ</div>
            <div
              className={styles['color'] + ' ' + styles['technology']}
            ></div>
            <div className={styles['soccer']}>3,0</div>
          </div>

          <div className={styles['detailsubject']}>
            <div className={styles['name']}>Thể Dục</div>
            <div
              className={
                styles['color'] + ' ' + styles['physical-education']
              }
            ></div>
            <div className={styles['soccer']}>10,0</div>
          </div>
        </div>
      </div>

      <div className={styles['detail']}>
        <div className={styles['capacity'] + ' ' + styles['mt-10']}>
          <div className={styles['title-capacity']}>Toán Học</div>
          <div className={styles['subject']}>
            <div className={styles['detailsubject']}>
              <div className={styles['name']}>Đại Số</div>
              <div
                className={styles['color'] + ' ' + styles['math']}
              ></div>
              <div className={styles['soccer']}>4,0</div>
            </div>

            <div className={styles['detailsubject']}>
              <div className={styles['name']}>Hình Học</div>
              <div
                className={
                  styles['color'] + ' ' + styles['literature']
                }
              ></div>
              <div className={styles['soccer']}>7,8</div>
            </div>

            <div className={styles['detailsubject']}>
              <div className={styles['name']}>Thống Kê</div>
              <div
                className={styles['color'] + ' ' + styles['language']}
              ></div>
              <div className={styles['soccer']}>5,6</div>
            </div>
          </div>
        </div>
        <div className={styles['capacity'] + ' ' + styles['mt-44']}>
          <div className={styles['title-capacity']}>Ngữ Văn</div>
          <div className={styles['subject']}>
            <div className={styles['detailsubject']}>
              <div className={styles['name']}>Tập Làm Văn</div>
              <div
                className={styles['color'] + ' ' + styles['math']}
              ></div>
              <div className={styles['soccer']}>4,0</div>
            </div>

            <div className={styles['detailsubject']}>
              <div className={styles['name']}>Đọc hiểu văn bản</div>
              <div
                className={
                  styles['color'] + ' ' + styles['literature']
                }
              ></div>
              <div className={styles['soccer']}>7,8</div>
            </div>

            <div className={styles['detailsubject']}>
              <div className={styles['name']}>Tiếng Việt</div>
              <div
                className={styles['color'] + ' ' + styles['language']}
              ></div>
              <div className={styles['soccer']}>5,6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
