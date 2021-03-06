import Link from "next/link";

const FeaturedProject = ({ title, url, imagePath }) => {
  return (
    <Link href={url}>
      <div className="FeaturedProject flex flex-col mb-10 md:mb-0 cursor-pointer">
        <img src={imagePath} alt="" className="object-cover mb-4" />
        <h3 className="h3">{title}</h3>
      </div>
    </Link>
  );
};

export default FeaturedProject;
