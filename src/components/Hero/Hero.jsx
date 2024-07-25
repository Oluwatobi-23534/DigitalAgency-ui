import HeroImg from "../../assets/website/team.png";

const Hero = () => {
  return (
    <>
      <main className="bg-letter dark:bg-complex dark:text-letter duration-300">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 place-items-center">
            {/* image section */}
            <div className="order-1 sm:order-2 relative">
              <img src={HeroImg} alt="" />
              <div className="absolute bg-letter dark:bg-tertiary px-4 py-2 rounded-xl shadow-md -bottom-5 -right-8">
                <p>💎 Projects</p>
                <h1 className="font-bold">
                  600+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </div>
            {/* text content section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h1 className="text-4xl sm:text-5xl font-semibold">
                Building Brands in the <span className="text-primary">Digital Agency</span>
              </h1>
              <p >
                Your partner in navigating the ever-evolving landscape of
                digital marketing. From conceptualization to execution, we craft
                tailored solutions that drive results and elevate your brand to
                new heights.
              </p>
              <button className="btn-primary text-letter">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
