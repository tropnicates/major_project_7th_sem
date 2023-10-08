import "./App.css";
import Main_page from "./components/main_page/main_page";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_dash from "./components/admin/admin_dash";
import AdminLogin from "./components/admin/admin_login/admin_login";
import FacultyLogin from "./components/faculty/facultyLogin/FacultyLogin";
import FacultyReg from "./components/faculty/facultyReg/FacultyReg";
import RegStudents from "./components/faculty/registerStudents/regStudents";
import Faculty_dash from "./components/faculty/facultyDashboard/facultyDash";
import AddQue from "./components/quiz/addQue";
import QuizzForm from "./components/faculty/quizzForm/QuizzForm";
import InActiveQuiz from "./components/faculty/quizzForm/inActive";
import QuizPage from "./components/student/quizPage";
import StudentDash from "./components/student_dashboard/StudentDash";
import StudentLogin from "./components/student/studentLogin";
import ActiveQuiz from "./components/student/quiz/active";
import AddCourse from "./components/course/addCourse";
import ManageAttendance from "./components/faculty/attendance/manageAttendance";
import TakeAttendance from "./components/faculty/attendance/takeAttendance";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main_page />} />
          <Route exact path="admin" element={<AdminLogin />} />
          <Route exact path="faculty" element={<FacultyLogin />} />
          <Route exact path="adminDashboard" element={<Admin_dash />} />
          <Route exact path="facultyReg" element={<FacultyReg />} />
          <Route exact path="regStudents" element={<RegStudents />} />
          <Route exact path="facultyDash" element={<Faculty_dash />} />
          <Route exact path="addQue" element={<AddQue />} />
          <Route exact path="quizzform" element={<QuizzForm />} />
          <Route exact path="inactive" element={<InActiveQuiz />} />
          <Route exact path="student" element={<StudentLogin />} />
          <Route exact path="studentDash" element={<StudentDash />} />
          <Route exact path="quizPage" element={<QuizPage />} />
          <Route exact path="active" element={<ActiveQuiz />} />
          <Route exact path="quiz" element={<QuizPage />} />
          <Route exact path="addcourse" element={<AddCourse />} />
          <Route exact path="manageattendance" element={<ManageAttendance />} />
          <Route
            exact
            path="manageattendance/takeattendance"
            element={<TakeAttendance />}
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
