import { ReactNode } from "react";

import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
}
