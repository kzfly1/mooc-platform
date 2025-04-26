import "./App.scss";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import CourseCardList from "./components/coursecard-list";
import { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch("/mock-data/course-list.mock.json");
      const data = await res.json();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    <div className="App" data-bs-theme="dark">
      <NavBar />
      <div className="container main-container">
        <CourseCardList courses={courses} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
