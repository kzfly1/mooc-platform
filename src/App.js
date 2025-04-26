import "./App.scss";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import CourseCardList from "./components/coursecard-list";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <NavBar />
      <div className="container main-container">
        <CourseCardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
