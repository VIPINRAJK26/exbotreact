

const IconSection = () => {
  return (
    <div className="mb-7 md:mb-0 z-0">
      <div className="bg-custom-gradient p-6 lg:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-start min-h-[40vh]">
        {[
          { label: "Chat bot", icon: "/Chat bot Icon-01.svg" },
          { label: "Broadcast", icon: "/Broadcast Icon-01.svg" },
          { label: "API Integration", icon: "/API Integration Icon-01.svg" },
          { label: "Chat widget", icon: "/chat widget Icon-01.svg" },
        ].map((item, index) => (
          <div key={index} className="end-icon flex flex-col items-center text-white md:w-1/6">
            <img src={item.icon} alt={item.label} className="md:w-24  mb-2" />
            <p className="text-lg font-light">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconSection