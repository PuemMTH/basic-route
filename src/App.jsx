import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const userData = [
  {
    id: 1,
    username: 'johndoe',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    username: 'janedoe',
    email: 'janedoe@example.com',
  },
  {
    id: 3,
    username: 'samsmith',
    email: 'samsmith@example.com',
  },
];

const ExampleComponent = () => {
  const { id } = useParams();
  const user = userData.find((user) => user.id === Number(id));
  return (
    <div>
      <h1>Username: {user.username}</h1>
      <h2>Email: {user.email}</h2>
    </div>
  );
};

const ShowAllUsers = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr>
            <td>{user.username}</td>
            <td><a href={`/path/${user.id}`}>Detail</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// หน้า Home
import Home from './pages/Home';
// หน้า About
import About from './pages/About';

const App = () => (
  <Router>
    <Routes>
      {/* สำหรับการทำ Route */}
      <Route path="/" element={<ShowAllUsers />} />
      <Route path="/path/:id" element={<ExampleComponent />} />

      {/* หน้าของ navBar กับ Sidebar */}
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </Router>
);

export default App;
