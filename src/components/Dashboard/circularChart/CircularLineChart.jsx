import React from 'react';

export default function CircleChart({ value }) {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100 * circumference);

    return (
        <svg width="120" height="120" className="-rotate-90">
            <circle
                stroke="#48263f"
                fill="transparent"
                strokeWidth="15"
                r={radius}
                cx="60"
                cy="60"
            />
            <circle
                stroke="#D5085F"
                fill="transparent"
                strokeWidth="15"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={radius}
                cx="60"
                cy="60"
            />
        </svg>
    );
}

