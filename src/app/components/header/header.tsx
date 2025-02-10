import "./header.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="main-navbar w-nav">
      <div className="flex justify-between py-7">
        <div>
          <img
            className="logo-img"
            src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
            alt=""
          />
        </div>
        <div className="links-container">
          <div className="unclickable-links">
            <Link href="#">Unlisted Shares</Link>
            <Link href="#">Our Blogs</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
