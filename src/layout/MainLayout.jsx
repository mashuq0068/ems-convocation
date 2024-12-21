import PropTypes from "prop-types";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <header className=" lg:px-12 lg:py-6 rounded-xl">
        <Navbar />
      </header> */}
      <main className="">{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
