import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState(products);
  const [productCategories, setProductCategories] = useState([{}]);
  const clientId = "ck_67be766358b025ed43770916c0e8450c9e705235";
  const clientSecret = "cs_fc0e5e15f879142da51396be6e25f65f1dc71ebe";
  const authString = `${clientId}:${clientSecret}`;
  const encodedAuth = btoa(authString);

  const [showMenu, setShowMenu] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const sortType = {
    newest: "Newest - Oldest",
    priceIncreasing: "Price: Low - High",
    priceDecreasing: "Price: High - Low",
  };
  const [selectedSortType, setSelectedSortType] = useState(sortType.reset);

  const handleSort = (type) => {
    let initialProducts = [...products];
    let sortedProducts = [...products];

    switch (type) {
      case sortType.priceIncreasing:
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);

        break;
      case sortType.priceDecreasing:
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);

        break;
      case sortType.newest:
        sortedProducts = sortedProducts.sort(
          (a, b) =>
            new Date(a.date_created).getTime() -
            new Date(b.date_created).getTime()
        );
        setProducts(sortedProducts);

        break;
      default:
        setProducts(initialProducts);
        break;
    }

    setSelectedSortType(type);
    // setFilteredProducts(sortedProducts);
  };

  const openFilter = () => {
    setShowMenu(!showMenu);
    setShowSort(false);
  };

  const openSort = () => {
    setShowSort(!showSort);
    setShowMenu(false);
  };

  const getProducts = () => {
    fetch("https://tues-store.dev.uxperience.eu/wp-json/wc/v3/products", {
      method: "GET",
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // setFilteredProducts(products);
        const categories = data.map((product) => product.categories);
        setProductCategories(categories);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  // console.log(filteredProducts)
  return (
    <div className="col-span-8 order-3 lg:order-none">
      <div className="relative z-10 items-baseline flex justify-between transition ease-in duration-75 border-b-2 pl-5 border-solid border-[#6ECEB2] lg:py-2.5">
        <span className="font-normal font-['avenir']-medium not-italic text-base text-black ">
          <strong>Found:</strong>
          <span className="font-['avenir'] pl-1">
            {products.length} results
          </span>
        </span>
        <div className="col-start-1 row-start-1 font-['avenir']-book">
          <div className="flex justify-end items-center pl-4 flex-wrap">
            <h3
              className="px-7 capitalize h-full font-['avenir'] text-[16px] flex items-center cursor-pointer"
              onClick={openFilter}
            >
              Colour
              {showMenu ? (
                <span className="arrow up flex-shrink-0-mr-1 mt-[6px] ml-2"></span>
              ) : (
                <span className="arrow down flex-shrink-0-mr-1 mb-[1px] ml-2"></span>
              )}
            </h3>
            <h3 className="px-7 capitalize h-full font-['avenir'] text-[16px] flex items-center cursor-pointer">
              Brand
              <span className="arrow down flex-shrink-0-mr-1 mb-1 ml-2"></span>
            </h3>
            <h3 className="px-7 capitalize h-full font-['avenir'] text-[16px] flex items-center cursor-pointer">
              Design Style
              <span className="arrow down flex-shrink-0-mr-1 mb-1 ml-2"></span>
            </h3>
            <div className="relative inline-block pr-4">
              <div className="flex leading-8">
                <button
                  className="group inline-flex justify-center items-center text-pantone font-medium"
                  type="button"
                  onClick={openSort}
                >
                  Sort
                  {showSort ? (
                    <span className="arrow up flex-shrink-0-mr-1 mt-[6px] ml-2"></span>
                  ) : (
                    <span className="arrow down flex-shrink-0-mr-1 mb-[1px] ml-2"></span>
                  )}
                </button>
              </div>
            </div>
          </div>
          {showSort && (
            <div className="origin-top-right absolute right-0 w-40 bg-white font-medium text-pantone border border-bombay transform opacity-100 scale-100">
              <button
                className="cursor-pointer text-gray-700  block indent-1.5 leading-30 pr-6 pl-0.5 py-0 text-pantone font-thin hover:bg-gray-200"
              >
                Sort
              </button>
              <button
                className="text-gray-700 cursor-pointer block indent-1.5 leading-30 pr-6 pl-0.5 py-0 text-pantone font-thin hover:bg-gray-200"
                onClick={() => handleSort(sortType.priceDecreasing)}
              >
                Price: High - Low
              </button>
              <button
                className="text-gray-700 cursor-pointer block indent-1.5 leading-30 pr-6 pl-0.5 py-0 text-pantone font-thin hover:bg-gray-200"
                onClick={() => handleSort(sortType.priceIncreasing)}
              >
                Price: Low - High
              </button>
              <button
                className="text-gray-700 cursor-pointer block indent-1.5 leading-30 pr-6 pl-0.5 py-0 text-pantone font-thin hover:bg-gray-200"
                onClick={() => handleSort(sortType.newest)}
              >
                Newest - Oldest
              </button>
            </div>
          )}
        </div>
      </div>
      {showMenu && (
        <div className="relative border-b-2 border-[#6ECEB2] pb-5 ">
          <div className="w-full">
            <ul className="flex w-full px-9 flex-wrap">
              {Array.from(
                new Set(
                  productCategories.flatMap((category) =>
                    category.map((pc) => pc.name)
                  )
                )
              ).map((name) => (
                <li
                  key={name}
                  className="rounded-full border-2 px-9 py-1.5 mt-5 mr-[18px] cursor-pointer hover:text-sky-800 hover:underline border-gray-400"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5 px-2.5 pt-3 md:pt-8 md:px-4 md:grid-cols-4 md:gap-6 grid-cols-1">
        {products.map((product) => (
          <article
            key={product.id}
            className="p-4 flex flex-col justify-center gap-y-4"
          >
            <img
              src={product.images[0].src}
              alt="Product Logo"
              className="cursor-pointer"
            />
            <p className="cursor-pointer flex items-center text-lg justify-between pt-3 lg:pt-0  hover:underline">
              {product.name}
            </p>
            <div className="flex">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                      ratingValue <= product.average_rating
                        ? "text-amber-500"
                        : "text-slate-600"
                    }
                  />
                );
              })}
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="font-medium">£{product.price} </p>
              <button className="underline cursor-pointer text-base">
                Order example
              </button>
            </div>
            <p className="text-base uppercase">Per roll</p>
          </article>
        ))}
      </div>
    </div>
  );
}
export default Main;
