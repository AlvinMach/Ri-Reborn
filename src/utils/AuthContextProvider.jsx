import React from "react";
import { useState, createContext, useEffect } from "react";
import { account, storage } from "../config/config";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { db } from "../config/databases";
import DotLoader from "react-spinners/DotLoader";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading to true
  const navigate = useNavigate();
  const [imagelist, setImagelist] = useState();
  const [imagelists, setImagelists] = useState();
  const [texts, setTexts] = useState([]);
  const [newbody, setNewbody] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [imageppe, setImageppe] = useState(null);
  const [messages, setMessages] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    useronload();
  }, []);

  const useronload = async () => {
    try {
      let accountdetails = await account.get();
      setUser(accountdetails);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Ensure loading is set to false after try/catch
    }
  };

  const handlelogin = async (e, credentials) => {
    e.preventDefault();
    try {
      const response = await account.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );
      const accountdetails = await account.get();
      setUser(accountdetails);
      navigate("/");
      toast.success("Login Sucessfully");
    } catch (error) {
      console.error(error);
      alert("invalid credentials");
    }
  };

  const handlelogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleregister = async (e, credentials) => {
    e.preventDefault();

    // Check if passwords match
    if (credentials.password1 !== credentials.password2) {
      alert("Passwords don't match");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credentials.email)) {
      alert("Invalid email address");
      return;
    }

    try {
      const response = await account.create(
        ID.unique(),
        credentials.email,
        credentials.password1,
        credentials.name
      );

      await account.createEmailPasswordSession(
        credentials.email,
        credentials.password1
      );
      const accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
      toast.success("Login Sucessfully");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  let payload = {
    body: newbody,
    title: title,
    Location: location,
  };

  const createTexts = async (e) => {
    e.preventDefault();
    const response = await db.texts.create(payload);
    //setTexts((prevState) => [response, ...prevState]);
    navigate("/");
    toast.success("A Product Was Added");
  };

  useEffect(() => {
    getTexts();
  }, []);

  const getTexts = async () => {
    try {
      const response = await db.texts.list();
      setTexts(response.documents);
    } catch (error) {
      console.error("Error fetching texts:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageChangeppe = (e) => {
    setImageppe(e.target.files[0]);
  };

  const getImage = async () => {
    const images = await storage.listFiles("66f5ac5b003a8ec046e8");
    setImagelist(images.files);
  };

  useEffect(() => {
    getImage();
  }, []);

  const getImageppe = async () => {
    const images = await storage.listFiles("67069f2d0035a86f3223");
    setImagelists(images.files);
  };

  useEffect(() => {
    getImageppe();
  }, []);

  const upload = async (e) => {
    e.preventDefault();

    try {
      const user = await account.getSession("current");

      if (user) {
        const newImage = await storage.createFile(
          "66f5ac5b003a8ec046e8",
          "unique()",
          image
        );
        console.log(newImage);
      } else {
        await account.createAnonymousSession();
        const newImage = await storage.createFile(
          "66f5ac5b003a8ec046e8",
          "unique()",
          image
        );
        console.log(newImage);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const uploadppe = async (e) => {
    e.preventDefault();

    try {
      const user = await account.getSession("current");

      if (user) {
        const newImage = await storage.createFile(
          "67069f2d0035a86f3223",
          "unique()",
          image
        );
        console.log(newImage);
      } else {
        await account.createAnonymousSession();
        const newImage = await storage.createFile(
          "67069f2d0035a86f3223",
          "unique()",
          image
        );
        console.log(newImage);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };





  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev) => ({...prev ,[itemId]:1}));
    }else{
      setCartItems((prev) => ({...prev ,[itemId]:prev[itemId]+1}));
    }
   
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextdata = {
    user,
    handlelogin,
    handlelogout,
    handleregister,
    texts,
    getTexts,
    createTexts,
    setNewbody,
    setTitle,
    setLocation,
    setTexts,
    upload,
    uploadppe,
    handleImageChange,
    handleImageChangeppe,
    setImagelist,
    imagelist,
    setImagelists,
    imagelists,
    addToCart,
    clearCart,
    setCartItems,
    cartItems,
  };

  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])

  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <AuthContext.Provider value={contextdata}>
      {loading ? (
        <>
           <DotLoader
          color={"#808080"}
          loading={loading}
          cssOverride={override}
          size={40}
        />
       <h1> Ri Reborn</h1>
        </>
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
