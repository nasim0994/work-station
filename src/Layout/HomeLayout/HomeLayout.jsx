import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function HomeLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
