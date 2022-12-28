import { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import Profile from "../components/profile";
import ProjectPreview from "../components/project_preview";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <div>
        <ProjectPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
