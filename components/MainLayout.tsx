import Contact from "./Contact";
import Header from "./navbar/Header";

const MainLayout = ({ children, light = false }: any) => {
  return (
    <main className="wrapper">
      <div className="main-lights-wrapper pointer-events-none">
        <div className="lights-container">
          <div className="light-container left"></div>
          <div className="light-container left"></div>
          <div className="light-container center"></div>
          <div className="light-container right"></div>
          <div className="light-container last"></div>
        </div>
      </div>

      <Header light={light} />

      {children}

      <Contact />
    </main>
  );
};

export default MainLayout;
