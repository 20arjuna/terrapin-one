"use client";

import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';

const CourseTable: React.FC = () => {
    const initialTableState = Array.from({ length: 5 }, () => Array(4).fill(''));
    const [fallCells, setFallCells] = useState<string[][]>(initialTableState);
    const [springCells, setSpringCells] = useState<string[][]>(initialTableState);
    const [major, setMajor] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [chatResponse, setChatResponse] = useState<string>('');

    const handleInputChange = (cells: string[][], setCells: React.Dispatch<React.SetStateAction<string[][]>>, rowIndex: number, colIndex: number, value: string) => {
        const newCells = cells.map((row, rIndex) =>
            row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? value : cell))
        );
        setCells(newCells);
    };

    const checkDegreeRequirements = () => {
        // Placeholder for degree requirements check
        setFeedback("Your schedule doesn't meet the requirements because...");
    };

    const handlePromptClick = (prompt: string) => {
        // Placeholder for LLM chat response
        setChatResponse(`Response to: ${prompt}`);
    };

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('footer');
            if (footer) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.offsetHeight;
                if (windowHeight + scrollTop >= documentHeight) {
                    footer.classList.remove(styles.fixedFooter);
                } else {
                    footer.classList.add(styles.fixedFooter);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
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
            <footer id="footer" className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.requirementsCheck}>
                        <input
                            type="text"
                            placeholder="Enter your major"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            className={styles.majorInput}
                        />
                        <button className={styles.checkButton} onClick={checkDegreeRequirements}>Check Degree Requirements</button>
                        <div className={styles.feedback}>{feedback}</div>
                    </div>
                    <div className={styles.chatInterface}>
                        <h2 className={styles.chatHeader}>Ask your 4 year plan a question!</h2>
                        <button className={styles.promptButton} onClick={() => handlePromptClick("Generate me a plan that will prepare me for a career in Quantum computing")}>
                            <span role="img" aria-label="quantum">🧠</span> Generate me a plan that will prepare me for a career in Quantum computing
                        </button>
                        <button className={styles.promptButton} onClick={() => handlePromptClick("Is it a good idea to take CMSC417 and CMSC412 in the same semester")}>
                            <span role="img" aria-label="courses">📚</span> Is it a good idea to take CMSC417 and CMSC412 in the same semester?
                        </button>
                        <div className={styles.chatResponse}>{chatResponse}</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CourseTable;
