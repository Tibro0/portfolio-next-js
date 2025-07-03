import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Aside() {
  return (
    <>
      <aside className="asideleft active">
        <ul>
          <Link href="/">
            <li className="navactive">
              <IoHome />
              <span>Dashboard</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
}
