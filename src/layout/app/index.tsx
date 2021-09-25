import Header from "components/header";
import Sidebar from "components/sidebar";
import "./styles.css";

export default function AppLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Sidebar />
      <div className="fixed top-0 right-0 left-80 content">
        <Header />
        <div className="m-10 min-h-screen">Contents</div>
      </div>
    </div>
  );
}
