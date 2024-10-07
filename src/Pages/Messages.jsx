import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/AuthContextProvider";
import { db } from "../config/databases";
import { MdDeleteForever } from "react-icons/md";
import { client } from "../config/config";
import { toast } from "react-toastify";
import { Role, Permission } from "appwrite";

const Messages = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newmssg, setNewmssg] = useState("");

  const createMessages = async (e) => {
    e.preventDefault();
    const response = await db.messages.create(payload, permissions);
    //setMessages((prevState) => [response, ...prevState]);
  };

  let payload = {
    texts: newmssg,
    user_id: user.$id,
    username: user.name,
  };

  let permissions = [Permission.write(Role.user(user.$id))];

  useEffect(() => {
    getMessages();

    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DATABASE_ID}.collections.${
        import.meta.env.VITE_COLLECTION_ID_MESSAGES
      }.documents`,
      (response) => {
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          setMessages((prevState) => [response.payload, ...prevState]);
        }

        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.delete"
          )
        ) {
          setMessages((prevState) =>
            prevState.filter((i) => i.$id !== response.payload.$id)
          );
          toast.success("Message Deleted");
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const getMessages = async () => {
    try {
      const response = await db.messages.list();
      setMessages(response.documents);
    } catch (error) {
      console.error("Error fetching texts:", error);
    }
  };

  const deleteMssgs = async (mssg_id) => {
    const confirm = window.confirm("Are you sure you want to delete this message?");
    if (!confirm) {
      return;
    }

    await db.messages.delete(mssg_id);
  };

  return (
    <section className="h-screen w-full overflow-y-scroll bg-gray-100">
      <div className="flex justify-center mx-auto container items-center px-4">
        <div className="w-full max-w-4xl">
          {/* Chat Header */}
          <div className="sticky top-0 z-20 flex flex-col space-y-4 text-center mb-6 bg-white py-6 shadow-md">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black">Ri Reborn</h1>
            <p className="text-lg font-semibold text-black border-b-4">Chat Room</p>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4">
            {Array.isArray(messages) && messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-semibold text-black">
                      {message.username || "Anonymous"}
                    </h1>
                    <p className="text-sm text-gray-500">
                      {new Date(message.$createdAt).toLocaleString()}
                    </p>
                    {message.$permissions.includes(`delete(\"user:${user.$id}\")`) && (
                      <MdDeleteForever
                        onClick={() => deleteMssgs(message.$id)}
                        size={20}
                        className="text-red-600 cursor-pointer"
                      />
                    )}
                  </div>
                  <p className="bg-blue-600 text-white text-lg rounded-lg px-4 py-2 max-w-full md:max-w-lg">
                    {message.texts}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-black font-semibold text-3xl text-center">Start Chatting</p>
            )}
          </div>

          {/* Chat Input */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-6">
            <textarea
              placeholder="Enter your message..."
              onChange={(e) => setNewmssg(e.target.value)}
              className="w-full md:w-[75%] h-32 md:h-20 p-4 border border-gray-300 rounded-lg resize-none"
            />
            <button
              onClick={createMessages}
              className="mt-4 md:mt-0 w-full md:w-auto bg-red-500 text-white rounded-lg px-6 py-2 hover:bg-red-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
