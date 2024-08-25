import { useEffect, useState } from "react";
import SectionHeadingText from "./SectionHeadingText";
import axios from "axios";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/bb0f563c-b851-4f6a-be74-1ad6ca76ed67")
      .then((response) => setCategories(response.data));
  }, []);
  const title = "Job Category List";
  const subtitle =
    "Explore thousands of job opportunities with all the information you need. Its your future";
  return (
    <section className="mt-[130px]">
      <SectionHeadingText
        title={title}
        subtitle={subtitle}
      ></SectionHeadingText>
      <div className="w-[1320px] mx-auto mt-[32px]">
        <div className="grid grid-cols-4 gap-[25px]">
          {categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
