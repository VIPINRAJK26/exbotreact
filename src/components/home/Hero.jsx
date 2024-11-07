import IconSection from "./IconSection";
import LeftTextSection from "./LeftTextSection";
import RightImageSection from "./RightImageSection";

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="flex flex-col lg:flex-row justify-center relative md:top-[50px]">
          <div className="md:w-1/2 flex justify-end relative md:left-[40px] md:top-[30px] ">
            <LeftTextSection />
          </div>
          <div className="md:w-1/3 flex justify-center relative md:left-[20px]">
            <RightImageSection />
          </div>
        </div>
        <div className="relative md:bottom-[250px] z-1 ">
          <IconSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
