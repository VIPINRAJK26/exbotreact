

const IconSection = () => {
  return (
    <div>
      <section className="pt-16 relative   -translate-y-80  bg-gradient-to-r from-green-500 to-teal-600 min-h-[35vh] z-[-10]">
        <div className="container mx-auto">
          <div className="md:flex md:justify-start justify-center text-white text-center gap-20 lg:pl-20 lg:ml-20 flex-wrap">
            <div className=" relative w-1/4 md:w-auto animate-[riseIn_1s_ease-out_forwards] delay-500">
              <img
                src="/Chat bot Icon-01.svg"
                alt="Chat Bot"
                className="mx-auto w-[90px] h-[90px] animate-[pulse2_1.5s_infinite]"
              />
              <p>Chat Bot</p>
            </div>

            <div className="end-icon relative w-1/4 md:w-auto animate-[riseIn_1s_ease-out_forwards] delay-1000">
              <img
                src="/Broadcast Icon-01.svg"
                alt="Broadcast"
                className="mx-auto w-[90px] h-[90px] animate-[pulse2_1.5s_infinite]"
              />
              <p>Broadcast</p>
            </div>

            <div className="end-icon relative w-1/4 md:w-auto animate-[riseIn_1s_ease-out_forwards] delay-1500">
              <img
                src="/API Integration Icon-01.svg"
                alt="API Integration"
                className="mx-auto w-[90px] h-[90px] animate-[pulse2_1.5s_infinite]"
              />
              <p>API Integration</p>
            </div>

            <div className="end-icon relative w-1/4 md:w-auto animate-[riseIn_1s_ease-out_forwards] delay-2000">
              <img
                src="/chat widget Icon-01.svg"
                alt="Chat Widget"
                className="mx-auto w-[90px] h-[90px] animate-[pulse2_1.5s_infinite]"
              />
              <p>Chat Widget</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IconSection