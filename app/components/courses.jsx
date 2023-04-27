import Link from "next/link";

const Courses = async({courses}) => {
  console.log(courses)
  return <div className="courses">
    {courses.map(course=> (
      <div key={course.id} className="card">
        <h3>{course.title}</h3>
        <small>Level: {course.level}</small>
        <p>{course.description}</p>
        <Link href={course.link} target="_blank" className="btn">Go to course</Link>
      </div>
    ))}
  </div>;
};

export default Courses;
