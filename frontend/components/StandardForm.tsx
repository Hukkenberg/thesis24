// frontend/components/StandardForm.tsx
import styles from '../styles/Forms.module.css';

const StandardForm = ({ fields, onSubmit }: { fields: any[], onSubmit: (values: any) => void }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target).entries());
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {fields.map((field) => (
        <div key={field.name} className={styles.row}>
          <label>{field.label}:</label>
          <input type={field.type} name={field.name} defaultValue={field.defaultValue || ''} />
        </div>
      ))}
      <div className={styles.actions}>
        <button type="submit">Lưu Thông Tin</button>
        <button type="button">Hủy</button>
      </div>
    </form>
  );
};

export default StandardForm;
