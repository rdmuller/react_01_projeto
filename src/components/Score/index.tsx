import styles from './Score.module.css';

interface ScoreProps {
    title: string;
    score: number;
    color: 'blue' | 'purple';
}

export function Score({title, score, color}:ScoreProps) {
    return (
        <div className={styles.card}>
            <span className={(color === 'blue') ? styles.scoreTitleBlue : styles.scoreTitlePurple}>
                {title}
            </span>
            <span className={styles.score}>{score}</span>
        </div>
    )
}