import CourseProgress from './components/CourseProgress';
import './App.css';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        backgroundColor: '#063330',
        width: '100%',
        padding: '60px 80px 40px 80px',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          color: '#F2F2F2',
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 400,
          textAlign: 'left',
          margin: 0,
          width: '100%'
        }}>Hola Jorge! Esta es tu lista de cursos.</h1>
      </div>

      <div style={{
        backgroundColor: '#F4F8F7',
        padding: '60px 80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 350px))',
        justifyContent: 'center',
        gap: '32px',
        width: '100%',
        boxSizing: 'border-box',
        flex: 1,
      }}>
        <CourseProgress
          courseName="Introducción a React"
          completedLessons={0}
          totalLessons={10}
        />

        <CourseProgress
          courseName="Diseño UX/UI Avanzado"
          completedLessons={4}
          totalLessons={10}
        />

        <CourseProgress
          courseName="Gestión de Proyectos Ágiles"
          completedLessons={18}
          totalLessons={20}
        />

        <CourseProgress
          courseName="Desarrollo Backend con Node.js"
          completedLessons={15}
          totalLessons={15}
        />
      </div>
    </div>
  );
}

export default App;
