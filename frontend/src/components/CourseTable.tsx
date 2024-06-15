// components/Table.tsx
"use client";

import React, { useState } from 'react';
import styles from './Table.module.css';

const CourseTable: React.FC = () => {
    const initialTableState = Array.from({ length: 5 }, () => Array(4).fill(''));
    const [fallCells, setFallCells] = useState<string[][]>(initialTableState);
    const [springCells, setSpringCells] = useState<string[][]>(initialTableState);

    const handleInputChange = (cells: string[][], setCells: React.Dispatch<React.SetStateAction<string[][]>>, rowIndex: number, colIndex: number, value: string) => {
        const newCells = cells.map((row, rIndex) =>
            row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? value : cell))
        );
        setCells(newCells);
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.header}>Freshman Year (Fall)</th>
                    <th className={styles.header}>Sophomore Year (Fall)</th>
                    <th className={styles.header}>Junior Year (Fall)</th>
                    <th className={styles.header}>Senior Year (Fall)</th>
                </tr>
            </thead>
            <tbody>
                {fallCells.map((row, rowIndex) => (
                    <tr key={`fall-${rowIndex}`}>
                        {row.map((cell, colIndex) => (
                            <td key={colIndex} id={`fall-cell-${rowIndex}-${colIndex}`} className={styles.cell}>
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) => handleInputChange(fallCells, setFallCells, rowIndex, colIndex, e.target.value)}
                                    placeholder={rowIndex === 0 && colIndex === 0 ? "ex: CMSC250H" : ""}
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    placeholder={rowIndex === 0 && colIndex === 0 ? "Credits" : ""}
                                    className={styles.creditInput}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            <thead>
                <tr>
                    <th className={styles.header}>Freshman Year (Spring)</th>
                    <th className={styles.header}>Sophomore Year (Spring)</th>
                    <th className={styles.header}>Junior Year (Spring)</th>
                    <th className={styles.header}>Senior Year (Spring)</th>
                </tr>
            </thead>
            <tbody>
                {springCells.map((row, rowIndex) => (
                    <tr key={`spring-${rowIndex}`}>
                        {row.map((cell, colIndex) => (
                            <td key={colIndex} id={`spring-cell-${rowIndex}-${colIndex}`} className={styles.cell}>
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) => handleInputChange(springCells, setSpringCells, rowIndex, colIndex, e.target.value)}
                                    placeholder={rowIndex === 0 && colIndex === 0 ? "ex: CMSC250H" : ""}
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    placeholder={rowIndex === 0 && colIndex === 0 ? "Credits" : ""}
                                    className={styles.creditInput}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CourseTable;
