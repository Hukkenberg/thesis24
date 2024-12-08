import Navbar from '../../components/Navbar';
import styles from '../../styles/Profile.module.css';

const DiagnosisProfile = () => (
  <div>
    <Navbar />
    <div className={styles.container}>
      <form>
        <h2>Chẩn đoán</h2>
        <div className={styles.row}>
          <label>Chẩn đoán:</label>
          <input type="text" placeholder="Nhập chẩn đoán" />
        </div>
        <div className={styles.row}>
          <label>Sơn thuận:</label>
          <input type="text" placeholder="Nhập sơn thuận" />
        </div>
        <div className={styles.row}>
          <label>Chống chỉ định:</label>
          <input type="text" placeholder="Nhập chống chỉ định" />
        </div>
        <div className={styles.row}>
          <label>Lịch trình:</label>
          <input type="text" placeholder="Nhập lịch trình" />
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

export default DiagnosisProfile;
