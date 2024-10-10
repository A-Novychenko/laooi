import {headers} from "next/headers";

export const TestText: React.FC = () => {
  headers();
  console.log("SSR");

  return <p>SSR</p>;
};
