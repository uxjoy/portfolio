import BottomNav from "./navbar/BottomNav";
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

      {/* <Navabar /> */}

      {/* <div className="bottom-nav fixed bottom-0 p-3 z-50 w-screen">
        <BottomNav />
      </div> */}

      {children}
    </main>
  );
};

export default MainLayout;
