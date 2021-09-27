import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./styles.css";

export default function AppLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Sidebar />
      <div className=" min-h-screen ml-80 content">
        <Header />
        <div className="mt-32 h-screen p-10">Content</div>
      </div>
    </div>
  );
}
