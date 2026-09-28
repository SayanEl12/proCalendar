import { DAYS, ROW_HEIGHT } from "../consts";
import type { CalendarEvent } from "../types";
interface Props {
    events: CalendarEvent[]
}

export const CalendarEvents: React.FC<Props> = (
    { events }
) => {
    const getEventStyle = (ev: CalendarEvent) => {
        const top = (ev.startMinutes / 60) * ROW_HEIGHT;
        const height = ((ev.endMinutes - ev.startMinutes) / 60) * ROW_HEIGHT;

        return {
            top: `${top}px`,
            height: `${height}px`,
        };
    }
    return (
        DAYS.map((_, dayIndex) => (
            <div key={dayIndex} className="relative border-l" style={{ height: ROW_HEIGHT }}>
                {events
                    .filter((ev) => ev.day === dayIndex)
                    .map((ev) => (
                        <div
                            key={ev.id}
                            className="absolute left-0 right-0 rounded text-xs text-white p-1 overflow-hidden"
                            style={{ ...getEventStyle(ev), backgroundColor: ev.color }}
                        >
                            {ev.title}
                        </div>
                    ))}
            </div>
        ))
    )
}