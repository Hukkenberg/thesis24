export default function ProgressView({ progress }) {
  return (
    <div>
      <h2>Tiến triển bệnh</h2>
      {progress.map((item, index) => (
        <div key={index}>
          <p>{item.date}: {item.details}</p>
        </div>
      ))}
    </div>
  );
}
