"use client";
import Link from "next/link";
import Courses from "./components/courses";
import { useState, useEffect } from "react";
import CourseSearch from "./components/courseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to My Site</h1>
      <CourseSearch getSearchCourses={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
