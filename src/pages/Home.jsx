import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

export default function Home() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Explore Our Courses</h1>
        <p>Master modern web development step-by-step with our comprehensive curriculum.</p>
      </header>

      <div className="course-grid">
        {courses.map(course => (
          <Link to={`/courses/${course.slug}`} key={course.id} className="course-card">
            <span className={`badge ${course.category.toLowerCase()}`}>{course.category}</span>
            <h3>{course.title}</h3>
            <p className="card-desc">{course.description.substring(0, 90)}...</p>
            <span className="duration">⏱ {course.duration}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}