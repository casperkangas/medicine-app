import "./MedicineList.css";

export default function MedicineList({ medicines, onDelete }) {
  return (
    <div className="medicine-list">
      <h2>Your Medicines</h2>

      {medicines.length === 0 && <p>No medicines added yet.</p>}

      {medicines.map(med => (
        <div key={med.id} className="medicine-card frosted">
          <h3>{med.name}</h3>
          {med.dosage && <p>Dosage: {med.dosage}</p>}
          <p>Time: {med.time}</p>

          <button onClick={() => onDelete(med.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}