import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

export default function CategoryPage() {
  const { category } = useParams();
  
  const filteredCourses = courses.filter(
    c => c.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{category} Courses</h1>
        <p>Showing all courses tailored for {category.toLowerCase()} level developers.</p>
      </header>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <Link to={`/courses/${course.slug}`} key={course.id} className="course-card">
              <span className={`badge ${course.category.toLowerCase()}`}>{course.category}</span>
              <h3>{course.title}</h3>
              <p className="card-desc">{course.description.substring(0, 90)}...</p>
              <span className="duration">⏱ {course.duration}</span>
            </Link>
          ))
        ) : (
          <p>No courses found in this category.</p>
        )}
      </div>
    </div>
  );
}