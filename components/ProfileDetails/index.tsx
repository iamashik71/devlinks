import { useState, ChangeEvent } from "react";

export default function ProfileDetails() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-2">Profile Details</h1>
      <p className="text-gray-600 mb-6">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="mb-6 flex items-center gap-6 bg-gray-100 p-4 rounded-md">
        <label htmlFor="profile-picture" className="block mb-2">
          Profile picture
        </label>
        <div className="relative w-40 h-40 bg-purple-100 rounded-lg overflow-hidden mx-auto">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <svg
                className="w-12 h-12 text-purple-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-purple-500 text-sm font-medium">
                + Upload Image
              </span>
            </div>
          )}
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Image must be below 1024x1024px.
          <br />
          Use PNG or JPG format.
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
        <form className="space-y-6">
          <div className="flex items-center">
            <label
              htmlFor="firstName"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              First name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="e.g. John"
              required
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="lastName"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Last name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="e.g. Appleseed"
              required
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="email"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. email@example.com"
              className="w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </form>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}
