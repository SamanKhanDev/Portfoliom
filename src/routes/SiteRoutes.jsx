import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";
import ProjectDetails from "../components/ProjectsDetails";


export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/products" element={<Products />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
