import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductItem from "/components/ProductItem.jsx";
import { fetchDataFromApi } from "@/utils/api";

const ProductPage = ({addToCart}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const callCart = () => {
    addToCart({data});
  }

  const fetchData = async () => {
    const res = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$eq]=${slug}`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  useEffect(() => {
    fetchCategoryData();
  }, [data]);

  const fetchCategoryData = async () => {
    const category = data[0]?.attributes?.categories?.data[0]?.attributes?.slug;
    const res = await fetchDataFromApi(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${category}`
    );
    setCategoryData(res.data);
  };

  return (
    <div className="py-16 lg:px-16 px-4 max-w-6xl mx-auto">
      <div className="lg:flex gap-5">
        <div className="productImg w-[50%]">
          <img
            src={`http://localhost:1337${data[0]?.attributes?.thumbnail?.data?.attributes?.url}`}
            alt=""
            className="h-[80vh] w-full rounded-xl"
          />
        </div>
        <div className="productDescription p-4 w-[50%]">
          <div className="heading pb-4">
            <h1 className="text-4xl pb-2">{data[0]?.attributes?.name}</h1>
            <h2 className="text-2xl">{data[0]?.attributes?.subtitle}</h2>
          </div>
          <div className="priceBox">
            <span className="flex justify-between">
              <h1 className="text-xl font-bold">
                MRP : ₹{data[0]?.attributes?.price}
              </h1>
              <h1 className="text-lg text-primary">50% off</h1>
            </span>
            <p className="text-md">inclusive of all taxes</p>
          </div>
          <div>
            <h1 className="text-2xl pt-6">Sizes : </h1>
            <div className="sizes grid grid-cols-4 gap-4 text-center pt-4">
              {data[0]?.attributes?.size?.data?.map((element) => {
                if (element.enabled)
                  return (
                    <div className="p-2 bg-primary text-primary-content rounded-lg cursor-pointer font-bold">
                      <p className="text-xl">{element.size}</p>
                    </div>
                  );
              })}
            </div>
          </div>
          <div className="buttons pt-4">
            <div onClick={callCart} className="btn w-full bg-secondary text-secondary-content mb-3 outline-none border-none">
              Add to Cart
            </div>
            <div className="btn w-full bg-primary text-primary-content outline-none border-none">
              Wishlist
            </div>
          </div>
          <div className="details pt-8">
            <h1 className="text-xl font-bold">Product Details</h1>
            <p className="pt-3 text-sm">{data[0]?.attributes?.description}</p>
          </div>
        </div>
      </div>

      <div className="suggestions pt-12">
        <div className="suggestHeading">
          <h1 className="text-3xl">You might also like</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
          {categoryData.map((element) => {
            return (
              <ProductItem key={element.id} product={element.attributes} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
