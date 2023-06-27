import { useNavigate } from "react-router-dom";
import { Logo } from "../../../assets";
import { ABOUT_VIEW, MARKETPLACE_VIEW, TEAM_VIEW } from "../../../consts";

const headerOptions = [
  {
    title: "About",
    link: ABOUT_VIEW,
  },
  {
    title: "Team",
    link: TEAM_VIEW,
  },
  {
    title: "Marketplace",
    link: MARKETPLACE_VIEW,
  },
];

// TODO: Revert nav to hidden menu on smaller devices

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="grid grid-cols-2 items-center justify-center pb-12">
      <Logo className="cursor-pointer" onClick={() => navigate("/")} />
      <section className="mt-4 flex items-center justify-between gap-x-4">
        {headerOptions.map((option) => (
          <p
            key={option.title}
            className="cursor-pointer font-nav text-2xl font-bold italic text-nav shadow-black text-shadow"
            onClick={() => navigate(option.link)}
          >
            {option.title}
          </p>
        ))}
      </section>
    </nav>
  );
};

// /* About */

// position: absolute;
// width: 58px;
// height: 37px;
// left: 879px;
// top: 71px;

// font-family: 'Titillium Web';
// font-style: italic;
// font-weight: 700;
// font-size: 24px;
// line-height: 37px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-align: center;

// color: #C6FFD6;
