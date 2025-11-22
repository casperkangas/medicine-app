import { useState } from "react";
import "./AddMedicine.css";

export default function AddMedicine({ onAdd }) {
    const [name, setName] = useState("");
    const [dosage, setDosage] = useState("");
    const [time, setTime] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !time) return alert("Name and time are required 💀");

        onAdd({
            name,
            dosage,
            time,
        });

        setName("");
        setDosage("");
        setTime("");
    }

    return (
        <form className="add-medicine-form frosted" onSubmit={handleSubmit}>
            <h2>Add Medicine</h2>

            <input
                type="text"
                placeholder="Medicine name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Dosage (optional)"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
            />

            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    );
}