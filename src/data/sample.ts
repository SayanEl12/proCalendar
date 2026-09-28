// src/data/sampleEvents.ts
import type { CalendarEvent } from "../types";

export const sampleEvents: CalendarEvent[] = [
    {
        id: "1",
        title: "Daily standup",
        day: 0, // lunes
        startMinutes: 9 * 60, // 9:00
        endMinutes: 9 * 60 + 30, // 9:30
        color: "#3b82f6",
    },
    {
        id: "2",
        title: "Diseño de API",
        day: 0, // lunes
        startMinutes: 10 * 60 + 30, // 10:30
        endMinutes: 13 * 60, // 13:00 (2h 30min, cumple el "más de 2 horas")
        color: "#10b981",
    },
    {
        id: "3",
        title: "Revisión con cliente",
        day: 2, // miércoles
        startMinutes: 15 * 60, // 15:00
        endMinutes: 16 * 60, // 16:00
        color: "#f59e0b",
    },
    {
        id: "4",
        title: "Almuerzo con equipo",
        day: 3, // jueves
        startMinutes: 12 * 60 + 30, // 12:30 (cumple el "empieza en :30")
        endMinutes: 13 * 60 + 30, // 13:30
        color: "#ef4444",
    },
    {
        id: "5",
        title: "Sprint planning",
        day: 4, // viernes
        startMinutes: 8 * 60, // 8:00
        endMinutes: 9 * 60, // 9:00
        color: "#8b5cf6",
    },
    {
        id: "6",
        title: "Deploy semanal",
        day: 5, // sábado
        startMinutes: 11 * 60, // 11:00
        endMinutes: 12 * 60, // 12:00
        color: "#06b6d4",
    },
];