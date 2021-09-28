import avatar from "assets/avt.jpg";
import "./header.styles.css";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 flex justify-end h-24 items-center content shadow-sm">
      <div className="flex mr-10">
        <div className="realtive w-10 h-10 rounded-full overflow-hidden">
          <img alt="avatar" src={avatar} />
        </div>
        <p className="text-xl ml-4"> Admin </p>
      </div>
    </div>
  );
}
