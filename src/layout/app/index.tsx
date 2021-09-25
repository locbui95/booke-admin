import Header from "components/header";
import Sidebar from "components/sidebar";

export default function AppLayout() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Sidebar />
      <Header />
    </div>
  );
}
