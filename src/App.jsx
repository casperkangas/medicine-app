import useMedicines from "./hooks/useMedicines";
import useNotifications from "./hooks/useNotifications";

import AddMedicine from "./components/AddMedicine";
import MedicineList from "./components/MedicineList";

import "./App.css";

export default function App() {
  const { medicines, addMedicine, removeMedicine } = useMedicines();

  // Activate daily notifications
  useNotifications(medicines);

  return (
    <div className="app">
      <h1>Medicine Reminder App</h1>

      <AddMedicine onAdd={addMedicine} />

      <MedicineList
        medicines={medicines}
        onDelete={removeMedicine}
      />
    </div>
  );
}