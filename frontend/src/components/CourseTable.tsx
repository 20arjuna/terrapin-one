"use client";

// components/Table.tsx
import React, { useState } from 'react';
import styles from './Table.module.css';

const CourseTable: React.FC = () => {
    const initialTableState = Array.from({ length: 5 }, () => Array(4).fill(''));
    const [cells, setCells] = useState<string[][]>(initialTableState);

    const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
        const newCells = cells.map((row, rIndex) =>
            row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? value : cell))
        );
        setCells(newCells);
    };

    const handleButtonClick = (rowIndex: number, colIndex: number) => {
        const cellElement = document.getElementById(`cell-${rowIndex}-${colIndex}`);
        if (cellElement) {
            cellElement.style.backgroundColor = 'green';
        }
    };

    return (
        <table className={styles.table}>
            <tbody>
                {cells.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td key={colIndex} id={`cell-${rowIndex}-${colIndex}`} className={styles.cell}>
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                                    className={styles.input}
                                />
                                <button onClick={() => handleButtonClick(rowIndex, colIndex)} className={styles.button}>✔</button>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CourseTable;
