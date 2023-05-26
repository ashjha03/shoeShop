import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchDataFromApi } from "@/utils/api";

const Categories = ({ showCategories }) => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!showCategories || !categories) return <></>;
  return (
    <div className="fixed top-5 mt-10 bg-primary text-primary-content border-2 py-2 z-20 shadow-lg">
      <ul className="flex flex-col">
        {categories.map((element) => {
          return (
            <Link
              href={`/category/${element?.attributes?.slug}`}
              key={element.id}
              className="border-b py-2 px-4 border-dotted flex justify-between"
            >
              <p className="pr-3"> {element?.attributes?.name}</p>
              <p className="pr-3"> ( {element?.attributes?.products?.data?.length} )</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
