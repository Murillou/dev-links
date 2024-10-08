import { Routes, Route } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
