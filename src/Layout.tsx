import { Outlet, Link } from "react-router-dom";
import { challengesBySection } from "./challenges";

export const Layout = () => {
  return (
    <div>
      <h1 className="py-8 px-4">React Challenges</h1>
      <nav>
        <div className="flex justify-evenly">
          {challengesBySection.map((section) => (
            <div key={section.sectionName} className="flex flex-col">
              <h4 className="text-cyan-600 font-bold text-lg">
                {section.sectionName}
              </h4>
              <ul className="flex gap-1 flex-wrap">
                {section.challenges.map((challenge) => (
                  <li key={challenge.name}>
                    <Link
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                      to={`/${challenge.name}`}
                    >
                      {challenge.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <hr />
      <div className={"p-4"}>
        <Outlet />
      </div>
    </div>
  );
};
