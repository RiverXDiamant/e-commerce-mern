// components

import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

export default function Header() {
  return (
    <>
      <section className="header">
        <LeftSection />
        <RightSection />
      </section>
    </>
  );
}
