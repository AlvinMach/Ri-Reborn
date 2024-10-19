import { AuthContext } from "../utils/AuthContextProvider";
import React, { useContext, useEffect, useState } from "react";
import { teams, account, storage, client } from "../config/config";
import { TiDelete } from "react-icons/ti";


const Protective = () => {
    const [isadmin, setIsadmin] = useState(null);
    const { upload,uploadppe, setImagelist,setImagelists,imagelist,imagelists, handleImageChange,handleImageChangeppe } =
    useContext(AuthContext);

    useEffect(() => {
        const checkAdminStatus = async () => {
          try {
            const user = await account.get();
            const userid = user.$id;
    
            const memberships = await teams.listMemberships("66f81b3b002cda189895");
            const adminStatus = memberships.memberships.some(
              (member) => member.userId === userid && member.roles.includes("admin")
            );
            setIsadmin(adminStatus);
          } catch (error) {
            console.error(error);
          }
        };
    
        checkAdminStatus();
      }, []);



   
  return (
   <>
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
            className="h-64 w-full object-cover rounded-lg"
            src={storage.getFilePreview(
              "67069f2d0035a86f3223",
              image.$id
            )}
            alt="Preview"
          />
        </div>
      ))}
  </div>
   </>
  )
}

export default Protective
