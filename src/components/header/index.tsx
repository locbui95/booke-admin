import Search from "components/search";
import avatar from "../../assets/avt.jpg";

export default function Header() {
  return (
    <header className="relative flex items-center w-full justify-between p-10">
      <Search />
      <div className="realtive flex justify-center">
        <img className="w-10 h-10 rounded-full" alt="avatar" src={avatar} />
        <p className="text-xl ml-4"> Admin </p>
      </div>
    </header>
  );
}
