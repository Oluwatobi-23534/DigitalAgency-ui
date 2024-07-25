import { FaArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types";

const BlogCard = ({ image, title, description }) => {

    BlogCard.propTypes = {
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    };
  return (
    <>
      <div className="dark:text-letter group">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
          />
          <div className="space-y-2 ml-6 bg-letter dark:bg-secondary -translate-y-16n">
            <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
            <h1 className="line-clamp-4 text-slate text-sm">{description}</h1>
            <div className="flex justify-end pr-4 text-gray-500">
              <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
