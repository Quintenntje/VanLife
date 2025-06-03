import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
}
