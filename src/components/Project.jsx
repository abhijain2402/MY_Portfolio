import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { assetUrl } from "../constants";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-y-4 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8">
        <div className="min-w-0">
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex w-fit items-center gap-1 whitespace-nowrap cursor-pointer hover-animation sm:justify-self-end"
        >
          Read More
          <img src={assetUrl("assets/arrow-right.svg")} alt="" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
