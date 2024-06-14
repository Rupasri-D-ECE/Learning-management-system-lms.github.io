import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Correct import for the new CSS

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses and videos from the backend
        fetch('/api/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching courses:', error));
    }, []);

    return (
        <div className="container">
            <header className="header">
                <h1>My Courses</h1>
                <button>Enroll in a Course</button>
            </header>
            <div className="course-list">
                {courses.map((course) => (
                    <div className="course-card" key={course.id}>
                        <img src={course.thumbnailUrl} alt={course.title} />
                        <div className="card-body">
                            <h4>{course.title}</h4>
                            <p>{course.description}</p>
                            <a href={course.videoUrl} target="_blank" rel="noopener noreferrer">
                                Watch Video
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
