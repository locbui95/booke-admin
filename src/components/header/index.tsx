import avatar from "assets/avt.jpg";
import "./header.module.css";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 flex left-80 bg-white z-40 justify-end h-24 items-center content shadow-sm">
      <div className="flex mr-10">
        <div className="realtive w-10 h-10 rounded-full overflow-hidden">
          <img alt="avatar" src={avatar} />
        </div>
      </div>
    </div>
  );
}
