import { useState, useEffect } from "react";

export default function useMedicines() {
    const [medicines, setMedicines] = useState(() => {
        const stored = localStorage.getItem("medicines");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("medicines", JSON.stringify(medicines));
    }, [medicines]);

    // Add a new medicine
    function addMedicine(med) {
        setMedicines(prev => [...prev, { id: Date.now(), ...med }]);
    }

    // Remove medicine
    function removeMedicine(id) {
        setMedicines(prev => prev.filter(m => m.id !== id));
    }

    return {
        medicines,
        addMedicine,
        removeMedicine,
    };
}