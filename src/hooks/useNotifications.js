import { useEffect } from "react";

export default function useNotifications(medicines) {
    useEffect(() => {
        if (!("Notification" in window)) return;

        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        const timers = [];

        medicines.forEach(med => {
            const [hours, minutes] = med.time.split(":").map(Number);

            const now = new Date();
            const target = new Date();

            target.setHours(hours, minutes, 0, 0);

            if (target < now) {
                target.setDate(target.getDate() + 1);
            }

            const msUntilReminder = target - now;

            const id = setTimeout(() => {
                new Notification("Time to take your medicine!", {
                    body: `${med.name} — ${med.dosage || ""}`,
                });
            }, msUntilReminder);

            timers.push(id);
        });

        return () => timers.forEach(clearTimeout);
    }, [medicines]);
}