import Search from "components/search";
import avatar from "../../assets/avt.jpg";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 flex justify-between my-10 pl-96">
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
