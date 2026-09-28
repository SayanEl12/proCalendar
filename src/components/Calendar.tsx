import React from "react";
import { DAYS, HOURS } from "../consts";

export const Calendar: React.FC = () => {
    return (
        <div className="grid grid-cols-[4rem_repeat(7,1fr)] border">
            <div /> {/* esquina vacía sobre la columna de horas */}
            {DAYS.map((d) => (
                <div key={d} className="p-2 text-center font-medium border-l">{d}</div>
            ))}

            {HOURS.map((h) => (
                <React.Fragment key={h}>
                    <div className="p-2 text-xs text-right border-t">{h}</div>
                    {DAYS.map((d) => (
                        <div key={d + h} className="h-12 border-t border-l" />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}