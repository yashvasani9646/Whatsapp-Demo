import { useState } from "react";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ tokens save
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refresh_token);

        // ✅ login success
        setIsLoggedIn(true);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      alert("API error");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0b141a]">

      <div className="w-[360px] bg-[#111b21] rounded-2xl shadow-xl p-8 text-white">

        {/* HEADER */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold">
            W
          </div>
          <h2 className="text-xl font-semibold mt-3">Welcome Back</h2>
          <p className="text-sm text-gray-400">Login to continue</p>
        </div>

        {/* INPUTS */}
        <div className="space-y-4">
          <input
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#202c33] outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full p-3 rounded-lg bg-[#202c33] outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-medium"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default LoginPage;