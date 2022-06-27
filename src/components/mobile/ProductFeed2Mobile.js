import { React, useState } from "react";
import Product from "./ProductMobile.js";
import ImageFullWidth from "./ImageFullWidth";

function ProductFeed({ products }) {
  const [Filas, setFilas] = useState(true);

  if (Filas) {
    return (
      <div className=" text-center font-semibold">
        <div className="grid grid-flow-row-dense grid-cols-2 bg-white  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-0.5 mx-auto ">
          {/* la linea anterior es la que maneja el grid... jugar con el padding y el margin*/}
          {products
            .slice(0, 4)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
          <div className="md:col-span-2">
            {products
              .slice(4, 5)
              .map(
                ({ id, title, price, description, category, image, video }) => (
                  <div key={id}>
                    <Product
                      key={id}
                      id={id}
                      title={title}
                      price={price}
                      description={description}
                      category={category}
                      image={image}
                      video={video}
                    />
                  </div>
                )
              )}
          </div>
          {products
            .slice(5, products.length)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
        </div>
        <ImageFullWidth />
        <p>vestido tapizado color pieles</p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-flow-row-dense grid-cols bg-white  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 md:-mt-52 mx-auto ">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image, video }) => (
            <div key={id}>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                video={video}
              />
            </div>
          ))}

        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, video }) => (
                <div key={id}>
                  <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    video={video}
                  />
                </div>
              )
            )}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, video }) => (
            <div key={id}>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                video={video}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default ProductFeed;
