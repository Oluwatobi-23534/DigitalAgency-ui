import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";

const BrandLogo = () => {
  return (
    <>
      <div className="dark:bg-brand dark:text-letter">
        <div className="container py-12 ">
          <h1 className="text-center">Powering next-gen companies</h1>
          <div className="flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-32">
            <img src={Brand1} alt="" />
            <img src={Brand2} alt="" />
            <img src={Brand3} alt="" />
            <img src={Brand4} alt="" />
            <img src={Brand5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogo;
