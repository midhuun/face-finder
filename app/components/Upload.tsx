"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";

const UploadImageSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [fetchedImages, setFetchedImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      // Simulate fetching 5 random images
      const randomImages = Array.from({ length: 6 }, () =>
        `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`
      );
      setFetchedImages(randomImages);
      setIsUploading(false);
      setFile(null);
    }, 2000); // 2-second delay to mimic upload and fetch time
  };

  const resetUpload = () => {
    setFile(null);
    setFetchedImages([]);
  };

  return (
    <div id="upload" className="font-underline min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {/* Upload Section */}
      <div className="max-w-md w-full bg-[#121212] p-8 rounded-lg shadow-lg text-center">
        {!fetchedImages.length ? (
          <>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600">
              {isUploading ? "Uploading..." : "Upload Your Image"}
            </h2>

            {isUploading ? (
              <div className="flex flex-col items-center justify-center space-y-6">
                <FaSpinner className="text-5xl animate-spin text-yellow-400" />
                <p className="text-gray-300">Fetching images...</p>
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-6">
                  Drag & drop an image here, or click to select a file to upload to get your results
                </p>

                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-800 hover:border-yellow-400 transition-all duration-300">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400 mb-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3zm4 6a3 3 0 116 0 3 3 0 01-6 0zm7 5a5 5 0 00-10 0h10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-gray-400 font-medium">
                      {file ? file.name : "Click to Upload or Drag Here"}
                    </span>
                  </div>
                </label>

                {file && (
                  <div className="mt-6 relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Uploaded Preview"
                      className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                    />
                    <button
                      onClick={() => setFile(null)}
                      className="h-7 flex justify-center items-center text-white w-7 rounded-full absolute top-1 right-1 bg-red-400 font-semibold shadow-md hover:bg-red-600 transition duration-300"
                    >
                      <IoCloseOutline />
                    </button>
                    <button
                      onClick={handleUpload}
                      className="px-6 py-2 bg-blue-500 w-full rounded-md transition-all duration-300 hover:bg-blue-600"
                    >
                      Upload
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        ) : null}
      </div>

      {/* Full-Width Results Display */}
      {fetchedImages.length > 0 && (
        <div className="w-full mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600">
            Your Results
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {fetchedImages.map((img, index) => (
                <div className="relative transition-transform duration-300 hover:scale-105"  key={index}>
              <img
               
                src={img}
                alt={`Result ${index + 1}`}
                className="md:w-[450px] h-[150px] w-[150px] md:h-[350px] object-cover rounded-lg shadow-lg "
              />
              <a className="absolute p-3 flex justify-center items-center bg-yellow-500 bottom-0 left-0 w-full" href="#pricing">Get Premium</a>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={resetUpload}
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md transition-all duration-300 hover:bg-yellow-600"
            >
              Upload Another Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImageSection;
