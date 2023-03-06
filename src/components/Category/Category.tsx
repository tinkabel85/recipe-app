import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Category.scss";

function Category() {
  return (
    <div className="Category">
      <NavLink to={"/cuisine/Italian"} className="Category__type">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"} className="Category__type">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Asian"} className="Category__type">
        <GiNoodles />
        <h4>Asian</h4>
      </NavLink>
    </div>
  );
}

export default Category;
