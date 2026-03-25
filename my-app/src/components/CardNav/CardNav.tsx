import { DotBackground } from "./DotBackground";
import { Navbar } from "./Navbar";

export const CardNav = () => {
  return (
    <div className="relative bg-amber-50 w-full min-h-screen">
      <DotBackground />

      <div className="relative z-10 flex justify-center pt-10">
        <Navbar />
      </div>
    </div>
  );
};
