

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectPage from './selectPage';
import StudentBase from './student/student-auth/student-base';
import FacultyBase from './faculty/faculty-auth/faculty-base';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/student" element={<StudentBase />} />
        <Route path="/faculty" element={<FacultyBase />} />
      </Routes>
    </Router>
  );
}

export default App;
