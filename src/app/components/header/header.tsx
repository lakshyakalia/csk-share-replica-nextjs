import "./header.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="main-navbar w-nav">
      <div className="flex">
        <div>
          <img
            src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
            alt=""
          />
        </div>
        <div>
          <div>
            <Link href="#">Unlisted Shares India</Link>
            <Link href="#">Our Blogs</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
