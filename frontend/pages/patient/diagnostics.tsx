import Navbar from '../../components/Navbar';
import styles from '../../styles/Profile.module.css';

const DiagnosticsProfile = () => (
  <div>
    <Navbar />
    <div className={styles.container}>
      <form>
        <h2>Cận lâm sàng</h2>
        <div className={styles.row}>
          <label>Vấn đề:</label>
          <input type="text" placeholder="Nhập vấn đề" />
        </div>
        <div className={styles.row}>
          <label>Kết quả:</label>
          <input type="text" placeholder="Nhập kết quả" />
        </div>
        <div className={styles.row}>
          <label>Giá trị tham chiếu:</label>
          <input type="text" placeholder="Nhập giá trị tham chiếu" />
        </div>
        <div className={styles.row}>
          <label>Ngày:</label>
          <input type="date" />
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

export default DiagnosticsProfile;
