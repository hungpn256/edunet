import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <div className='content-left'>
          <div className='hot-line'>
            <h6>Hot line</h6>
            <div>123 456 790</div>
          </div>
          <div className='infor'>
            <h6>Thông tin</h6>
            <ul className='infor-list'>
              <li>Giới thiệu</li>
              <li>Chính sách bảo mật</li>
              <li>Tuyển dụng</li>
              <li>Liên hệ chúng tôi</li>
              <li>Điều khoản sử dụng</li>
            </ul>
          </div>
        </div>
        <div className='content-right'>
          <div className='contact-me'>
            <h6>Liên hệ với chúng tôi</h6>
            <div>edunet@hadtech.vn</div>
          </div>
          <div className='form'>
            <h6>Liên hệ ngay</h6>
            <form>
              <div className='input-wrapper'>
                <input
                  className='input-name'
                  type='text'
                  placeholder='Tên của bạn'
                />

                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29'
                    stroke='#ADADAD'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z'
                    stroke='#ADADAD'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div className='input-wrapper'>
                <input
                  className='input-name'
                  type='text'
                  placeholder='Địa chỉ email'
                />

                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 12H28C29.1 12 30 12.9 30 14V26C30 27.1 29.1 28 28 28H12C10.9 28 10 27.1 10 26V14C10 12.9 10.9 12 12 12Z'
                    stroke='#ADADAD'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M30 14L20 21L10 14'
                    stroke='#ADADAD'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div className='input-wrapper text-area'>
                <textarea
                  className='input-name'
                  type='text'
                  placeholder='Hãy để lại lời nhắn'
                />

                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M28 22.66V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H12C11.4696 30 10.9609 29.7893 10.5858 29.4142C10.2107 29.0391 10 28.5304 10 28V14C10 13.4696 10.2107 12.9609 10.5858 12.5858C10.9609 12.2107 11.4696 12 12 12H17.34'
                    stroke='#6712C7'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M26 10L30 14L20 24H16V20L26 10Z'
                    stroke='#6712C7'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div className='btn-submit'>Gửi</div>
            </form>
          </div>
        </div>
      </div>
      <div className='wavy'>
        <svg
          width='1440'
          height='102'
          viewBox='0 0 1440 102'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-0.333822 543.58L-0.583526 17.1366C-0.583526 17.1366 102.172 49.726 220.913 17.2075C339.654 -15.311 399.901 2.67057 565.331 59.0554C730.762 115.44 808.875 7.45977 1046 50.0384C1283.12 92.6171 1251.81 -46.9066 1439.77 17.611C1439.81 95.8883 1440.01 483.507 1440.04 544.056C1295.17 544.008 -0.333822 543.58 -0.333822 543.58Z'
            fill='#301F87'
          />
        </svg>
      </div>
    </div>
  );
}
