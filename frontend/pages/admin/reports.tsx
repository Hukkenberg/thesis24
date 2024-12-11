export default function Reports(): JSX.Element {
  return (
    <div>
      <h1>Báo cáo hệ thống</h1>
      <p>Xem và phân tích các báo cáo liên quan đến hoạt động của hệ thống.</p>
      <button onClick={() => alert('Xuất báo cáo')}>Xuất báo cáo</button>
    </div>
  );
}
