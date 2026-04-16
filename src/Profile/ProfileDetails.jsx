import React, { useEffect, useState } from "react";

const ProfileDetails = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok) {
          setUser(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  // 🔥 image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-full p-6 text-black dark:text-white overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Profile Details</h2>

      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* 🔥 CLICKABLE IMAGE */}
          <label className="cursor-pointer inline-block mb-4">
            <img
              src={image || user.avatar}
              className="w-20 h-20 rounded-full border-2 border-green-500"
            />

            {/* hidden input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </>
      )}
    </div>
  );
};

export default ProfileDetails;