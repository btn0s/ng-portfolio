import { useRouter } from "next/router";

const FeaturedProject = ({ title, url, imagePath }) => {
  const router = useRouter();

  const navigate = (url) => {
    router.push(url);
  };

  return (
    <div
      className="FeaturedProject flex flex-col px-2 mb-10 md:mb-0 cursor-pointer"
      onClick={() => navigate(url)}
    >
      <img src={imagePath} alt="" className="object-cover mb-2" />
      <h3 className="h3">{title}</h3>
    </div>
  );
};

export default FeaturedProject;
