import Navabar from "./navbar/Navabar";

const MainLayout = ({ children }: any) => {
  return (
    <main className="wrapper">
      <div className="main-lights-wrapper">
        <div className="lights-container">
          <div className="light-container left"></div>
          <div className="light-container left"></div>
          <div className="light-container center"></div>
          <div className="light-container right"></div>
          <div className="light-container last"></div>
        </div>
      </div>

      <Navabar />

      {children}
    </main>
  );
};

export default MainLayout;
