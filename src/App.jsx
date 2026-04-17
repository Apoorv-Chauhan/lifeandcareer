// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import VerifyHuman from "./pages/VerifyHuman";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<VerifyHuman />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyHuman from "./pages/VerifyHuman";

import MainLayout from "./layouts/MainLayout";
import VerifyIdentity from "./pages/VerifyIdentity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First Page (No Navbar/Footer) */}
        <Route path="/" element={<VerifyHuman />} />

        {/* Second Page (With Layout) */}
        <Route
          path="/verify-identity"
          element={
            <MainLayout>
              <VerifyIdentity />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
