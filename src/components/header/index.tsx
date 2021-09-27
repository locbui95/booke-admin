import Search from "components/search";
import avatar from "../../assets/avt.jpg";
import "../../layout/app/styles.css";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 flex justify-between py-10 px-10 bg-gray-100 content">
      <Search />
      <div className="relative flex items-center mr-10">
        <div className="realtive w-10 h-10 rounded-full overflow-hidden">
          <img alt="avatar" src={avatar} />
        </div>
        <p className="text-xl ml-4"> Admin </p>
      </div>
    </div>
  );
}
