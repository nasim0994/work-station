import "./SettingSidebar.css";
import { NavLink } from "react-router-dom";

export default function SettingSidebar() {
  return (
    <ul className="SettingSidebar">
      <li>
        <NavLink to="edit-profile">Edit Profile</NavLink>
      </li>
      <li>
        <NavLink to="billing-address">Billing Address</NavLink>
      </li>
      <li>
        <NavLink to="email-notification">Email Notifications</NavLink>
      </li>
      <li>
        <NavLink to="reset-password">Reset Password</NavLink>
      </li>
      <li>
        <NavLink to="payout">Payouts Setting</NavLink>
      </li>
      <li>
        <NavLink to="manage-account">Manage Account</NavLink>
      </li>
    </ul>
  );
}
