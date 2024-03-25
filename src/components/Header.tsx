import "../style/Header.css"
import { FaMoon } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

export const Header = () => {
  return <>
    <div className="header">
      <div className="logo">
        <FaMoon />
      </div>
      <div className="title">
        <h1>Expenses</h1>
      </div>
      <div className="login">
        <CiLogin />
      </div>
    </div>
  </>
}