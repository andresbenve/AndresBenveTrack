import router from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function validate(input) {
  const errors = {};
  if (!input.title) {
    errors.title = "Completar title *";
  }

  if (!input.price) {
    errors.price = "Completar price *";
  }
  if (!input.description) {
    errors.description = "Completar description *";
  }
  if (!input.category) {
    errors.category = "Completar category *";
  }
  if (!input.image) {
    errors.image = "Completar image *";
  }
  if (!input.rating) {
    errors.rating = "Completar rating *";
  }
  if (!input.video) {
    errors.video = "Completar video *";
  }

  return errors;
}
const CreateDress = () => {
  const createnewDress = async () => {
    try {
      await fetch("http:/localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [input, setInput] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    rating: "",
    video: "",
  });
  const [errors, setErrors] = useState({});

  let Avanti = false;
  // NOTA: este useeffect no esta funcionando - revisar mas tarde con mas inspiracion

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <form className=" items-center justify-center content-center">
      <div className="ml-6 mt-1 text-sm">title *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="title"
        type="text"
        name="title"
        value={input.title}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.title && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.title}</p>
      )}
      <div className="ml-6 mt-1 text-sm">price *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="price"
        type="text"
        name="price"
        value={input.price}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.price && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.price}</p>
      )}
      <div className="ml-6 mt-1 text-sm">description *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="description"
        type="text"
        name="description"
        value={input.description}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.description && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.description}
        </p>
      )}

      <div className="ml-6 mt-1 text-sm">category *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="category"
        type="text"
        name="category"
        value={input.category}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.category && (
        <p className="flex danger mr-16 text-xs justify-end">
          {errors.category}
        </p>
      )}
      <div className="ml-6 mt-1 text-sm">image *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="image"
        type="text"
        name="image"
        value={input.image}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.image && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.image}</p>
      )}
      <div className="ml-6 mt-1 text-sm">image1 *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="image1"
        type="text"
        name="image1"
        value={input.image1}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.image1 && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.image1}</p>
      )}
      <div className="ml-6 mt-1 text-sm">image2 *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="image2"
        type="text"
        name="image2"
        value={input.image2}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.image2 && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.image2}</p>
      )}
      <div className="ml-6 mt-1 text-sm">image3 *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="image3"
        type="text"
        name="image3"
        value={input.image3}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.image3 && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.image3}</p>
      )}
      <div className="ml-6 mt-1 text-sm">image4 *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="image4"
        type="text"
        name="image4"
        value={input.image4}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.image4 && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.image4}</p>
      )}
      <div className="ml-6 mt-1 text-sm">image5 *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="image5"
        type="text"
        name="image5"
        value={input.image5}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.image5 && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.image5}</p>
      )}
      <div className="ml-6 mt-1 text-sm">rating *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="rating"
        type="text"
        name="rating"
        value={input.rating}
        onChange={(e) => handleInputChange(e)}
      />
      {errors.rating && (
        <p className="flex danger mr-16 text-xs justify-end">{errors.rating}</p>
      )}
      <div className="ml-6 mt-1 text-sm">video *</div>
      <input
        className="mx-4 w-full inputStyle flex items-center justify-center  "
        placeholder="video"
        type="text"
        name="video"
        value={input.video}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        onClick={() => {
          createnewDress();
        }}
        type="submit"
        primary
      >
        Sumbit New Dress
      </button>
      {/* NOTA: cuando la persona hace la compra mando un post con los datos del formulario | lo que la persona compro | el metodo de envio que la persona alla elegido */}
    </form>
  );
};

export default CreateDress;
