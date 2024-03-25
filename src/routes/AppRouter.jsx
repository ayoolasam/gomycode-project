import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "../pages/recipeList";
import UserProfile from "../pages/userProfile";
import RecipeDetails from "../pages/recipeDetails";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="appRouter">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={() => "404 NOT FOUND"} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
