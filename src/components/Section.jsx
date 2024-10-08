import React, { useContext, useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { db } from "../config/databases";
import { AuthContext } from "../utils/AuthContextProvider";
import { teams, account, storage, client } from '../config/config';
import { toast } from "react-toastify";

const Section = () => {
  const { texts, getTexts, setTexts } = useContext(AuthContext);
  const [isadmin, setIsadmin] = useState(null);
  const { upload, setImagelist, imagelist, handleImageChange } = useContext(AuthContext);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const user = await account.get();
        const userid = user.$id;

        const memberships = await teams.listMemberships('66f81b3b002cda189895');
        const adminStatus = memberships.memberships.some(
          (member) => member.userId === userid && member.roles.includes('admin')
        );
        setIsadmin(adminStatus);
      } catch (error) {
        console.error(error);
      }
    };

    checkAdminStatus();
  }, []);

  useEffect(() => {
    getTexts();

    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DATABASE_ID}.collections.${
        import.meta.env.VITE_COLLECTION_ID
      }.documents`,
      (response) => {
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          setTexts((prevState) => [response.payload, ...prevState]);
        }

        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.delete"
          )
        ) {
          setTexts((prevState) =>
            prevState.filter((i) => i.$id !== response.payload.$id)
          );
          toast.success("A Product was Removed");
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const Removeproduct = async (item_id) => {
    const confirm = window.confirm("Are You Sure You Want to Remove the Product");
    if (!confirm) {
      return;
    }
    await db.texts.delete(item_id);
  };

  const deleteImage = async (e, image_id) => {
    e.preventDefault();
    const confirm = window.confirm("Are You Sure You Want to Remove the Product");
    if (!confirm) {
      return;
    }

    await storage.deleteFile('66f5ac5b003a8ec046e8', image_id);
    setImagelist((prevState) => prevState.filter((image) => image.$id !== image_id));
    toast.success("Image deleted successfully");
  };

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold">Products</h1>
      <div className="max-w-[1640px] mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
        {imagelist &&
          imagelist.map((image) => (
            <div key={image.$id} className="relative">
              {isadmin && (
                <TiDelete
                  size={20}
                  className="text-red-800 cursor-pointer absolute top-2 right-2"
                  onClick={(e) => deleteImage(e, image.$id)}
                />
              )}
              <img
                className="hover:scale-105 duration-300 h-[380px] w-full object-cover rounded-lg"
                src={storage.getFilePreview("66f5ac5b003a8ec046e8", image.$id)}
                alt="Preview"
              />
            </div>
          ))}

        {texts && texts.length > 0 ? (
          texts.map((item) => (
            <div
              key={item.$id}
              className="bg-white shadow-lg hover:scale-105 duration-300 text-center max-h-[800px] max-w-full rounded-lg overflow-hidden relative p-6"
            >
              <h1 className="text-black font-semibold text-xl mb-4">{item.title}</h1>
              <p className="text-sm mb-4">{item.body}</p>
              <p className="text-red-600">{item.Location}</p>
              {isadmin && (
                <TiDelete
                  size={20}
                  className="text-red-500 cursor-pointer absolute top-2 right-2"
                  onClick={() => Removeproduct(item.$id)}
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No Products available at the moment</p>
        )}
      </div>
    </>
  );
};

export default Section;
