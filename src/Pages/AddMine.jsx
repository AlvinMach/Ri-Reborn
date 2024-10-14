import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../utils/AuthContextProvider";
import { account } from "../config/config";


const AddMine = () => {
  const {
    createTexts,
    setNewbody,
    setTitle,
    setLocation,
    upload,
    handleImageChange,
  } = useContext(AuthContext);

  const getSessions = async () => {
    const sessions = await account.getSessions();
    console.log(sessions)

  }



  return (
    <>
      <div className="flex justify-center flex-col mx-auto items-center mt-10 bg-white shadow-lg h-full sm:h-[700px] w-[90%] sm:w-[600px] max-w-[600px] p-6">
        <h1 className="font-bold text-2xl sm:text-3xl mb-6 sm:mb-8">
          Add New Product
        </h1>

        <div className="m-4 w-full">
          <label className="block mb-2 sm:mb-4 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            className="px-4 py-2 border w-full sm:w-[450px] rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="m-4 w-full">
          <label className="block mb-2 sm:mb-4 font-semibold">Body</label>
          <input
            type="text"
            name="body"
            placeholder="Enter product description"
            className="px-4 py-2 border w-full sm:w-[450px] rounded-md"
            onChange={(e) => setNewbody(e.target.value)}
          />
        </div>

        <div className="m-4 w-full">
          <label className="block mb-2 sm:mb-4 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="px-4 py-2 border w-full sm:w-[450px] rounded-md"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <form onSubmit={upload} className="mb-11 px-4 w-full text-center">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="mb-6 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 w-full sm:w-[450px] text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
        </form>

        <button
          onClick={createTexts}
          type="submit"
          className="bg-red-500 px-6 py-3 w-full sm:w-[450px] text-white font-semibold rounded-md hover:bg-red-600"
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddMine;
