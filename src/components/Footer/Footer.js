import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Giới thiệu</h5>
              <p className="grey-text text-lighten-4">Trang web này được tạo ra trong quá trình học ReactJS của tôi</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Follow me</h5>
              <ul>
                <li><a href="https://www.facebook.com/hieutrungtran2205"><i className="fa fa-facebook-square" style={{ color: '#3B5998' }} /> Facebook</a></li>
                <li><a href="#!"><i className="fa fa-youtube-square" style={{ color: '#bb0000' }} /> YouTube</a></li>
              </ul>
            </div>

          </div>
          <div className="footer-copyright">
            <a href="https://www.facebook.com/hieutrungtran2205">
              © 2021 Copyright HieuTrungTran
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;