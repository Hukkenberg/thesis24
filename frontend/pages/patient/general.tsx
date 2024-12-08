import Navbar from '../../components/Navbar';
import styles from '../../styles/Profile.module.css';

const GeneralProfile = () => (
  <div>
    <Navbar />
    <div className={styles.container}>
      <form>
        <h2>Hành chính</h2>
        <div className={styles.row}>
          <label>Họ và tên:</label>
          <input type="text" placeholder="Nhập họ và tên" />
        </div>
        <div className={styles.row}>
          <label>Tuổi:</label>
          <input type="number" placeholder="Nhập tuổi" />
        </div>
        <div className={styles.row}>
          <label>Giới tính:</label>
          <div>
            <label><input type="radio" name="gender" value="NAM" /> NAM</label>
            <label><input type="radio" name="gender" value="NỮ" /> NỮ</label>
            <label><input type="radio" name="gender" value="KHÁC" /> KHÁC</label>
          </div>
        </div>
        <div className={styles.row}>
          <label>Địa chỉ:</label>
          <input type="text" placeholder="Nhập địa chỉ" />
        </div>
        <div className={styles.row}>
          <label>Số điện thoại:</label>
          <input type="text" placeholder="Nhập số điện thoại" />
        </div>
        <div className={styles.row}>
          <label>Email:</label>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit">LƯU THÔNG TIN</button>
          <button type="reset">HỦY THÔNG TIN</button>
          <button type="button">CẬP NHẬT THÔNG TIN</button>
        </div>
      </form>
    </div>
  </div>
);

export default GeneralProfile;
