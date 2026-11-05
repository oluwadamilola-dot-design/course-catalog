import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="page-container">
        <h2>Course not found</h2>
        <p>The course you are looking for does not exist or has been removed.</p>
        <button className="back-button" onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    );
  }

  return (
    <div className="page-container detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <span className={`badge ${course.category.toLowerCase()}`}>{course.category}</span>
      <h1>{course.title}</h1>
      <p className="duration">Duration: {course.duration}</p>
      <p className="description">{course.description}</p>
      
      <h3>Topics Covered:</h3>
      <ul className="topics-list">
        {course.topics.map((topic, index) => (
          <li key={index}>✓ {topic}</li>
        ))}
      </ul>
    </div>
  );
}