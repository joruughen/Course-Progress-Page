import React from 'react';

const styles = {
    container: (isHovered) => ({
        fontFamily: "'Libre Franklin', sans-serif",
        backgroundColor: "#F2F2F2",
        border: "3px solid rgba(6, 51, 48, 0.08)",
        borderRadius: 8,
        padding: 16,
        maxWidth: 360,
        width: '100%',
        boxSizing: 'border-box',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.1)' : 'none',
        cursor: 'pointer',
    }),
    title: {
        color: "#063330",
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 8,
        marginTop: 0,
    },
    percentage: {
        fontFamily: "'DM Mono', monospace",
        color: "#063330",
        fontSize: 24,
        marginBottom: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#FC5C3A",
        color: "#FFFFFF",
        border: "none",
        padding: "6px 16px",
        borderRadius: "20px",
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: "12px",
        cursor: "pointer",
        fontWeight: "700",
        transition: 'background-color 0.2s ease',
    },
    barBackground: {
        backgroundColor: "#E0E0E0",
        borderRadius: 4,
        height: 8,
        overflow: "hidden",
        marginBottom: 12,
    },
    barFill: (progress) => ({
        width: `${progress}%`,
        height: "100%",
        backgroundColor: "#FC5C3A",
        transition: 'width 0.3s ease-in-out',
    }),
    message: {
        color: "#063330",
        fontSize: 14,
        margin: 0,
    },
};

function CourseProgress({ courseName, completedLessons, totalLessons }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const rawProgress = (completedLessons / totalLessons) * 100;

    const progress = Math.min(Math.max(Math.round(rawProgress), 0), 100);

    let message = "Estás iniciando el curso";
    if (progress >= 1 && progress < 80) message = "Estás avanzando";
    if (progress >= 80 && progress < 100) message = "Estás a un paso de terminar";
    if (progress === 100) message = "Curso completado";

    return (
        <div
            style={styles.container(isHovered)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 style={styles.title}>{courseName}</h3>

            <div style={styles.percentage}>
                <span>{progress}%</span>
                <button style={styles.button}>Continuar</button>
            </div>

            <div style={styles.barBackground}>
                <div style={styles.barFill(progress)} />
            </div>

            <p style={styles.message}>{message}</p>
        </div>
    );
}

export default CourseProgress;
