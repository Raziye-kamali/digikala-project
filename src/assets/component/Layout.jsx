import { Link, Outlet} from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/login">ورود | ثبت نام</Link>
      </nav>
      <Outlet />
    </div>
  );
}
