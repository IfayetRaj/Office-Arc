"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const product = {
  name: "Modern Office Chair",
  price: "$249",
  description:
    "A sleek modern office chair with adjustable height and ergonomic design.",
  colors: ["black", "white", "gray", "blue"],
  sizes: ["Small", "Medium", "Large"],
  images: [
    "/chair1.jpg",
    "/chair2.jpg",
    "/chair3.jpg",
    "/chair4.jpg",
  ],
  details: {
    Material: "Leather and Metal",
    Weight: "15kg",
    Dimensions: "24 x 24 x 40 inches",
    Warranty: "2 years",
  },
  reviews: [
    { id: 1, name: "Alice", rating: 5, comment: "Super comfortable!" },
    { id: 2, name: "Bob", rating: 4, comment: "Great chair, good support." },
  ],
};

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [reviews, setReviews] = useState(product.reviews);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleAddReview = () => {
    // if (!newComment || newRating === 0) return;
    const newReview = {
      id: Date.now(),
      name: "Anonymous",
      rating: newRating,
      comment: newComment,
    };
    setReviews([newReview, ...reviews]);
    setNewComment("");
    setNewRating(0);
  };

  // Calculate average rating
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Images */}
        <div className="md:w-1/2">
          <div className="border rounded-lg overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={`Product Image ${selectedImage}`}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                  selectedImage === index ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-xl text-gray-700 mt-2">{product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>

            {/* Color selection */}
            <div className="mt-6">
              <h2 className="font-medium mb-2">Color</h2>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border-2 focus:outline-none ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            

            {/* Size selection */}
            <div className="mt-6">
              <h2 className="font-medium mb-2">Size</h2>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* availability */}
            <p>Available: 30pc</p>

            {/* Reviews */}
            <div className="mt-6">
              <h2 className="font-medium mb-2">Reviews</h2>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 ml-2">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
              </div>

              {/* Add Review */}
              <div className="mt-4">
                <h3 className="font-medium mb-2">Leave a Review</h3>
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`cursor-pointer ${
                        star <= newRating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => setNewRating(star)}
                    />
                  ))}
                </div>
                <textarea
                  rows={3}
                  placeholder="Write your review..."
                  className="w-full border rounded-lg p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                  onClick={handleAddReview}
                  className="px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>

              {/* Reviews List */}
              <div className="mt-4 space-y-4 max-h-64 overflow-y-auto">
                {reviews.map((r) => (
                  <div key={r.id} className="border p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < r.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 font-medium">{r.name}</span>
                    </div>
                    <p className="text-gray-700">{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="mt-6">
              <h2 className="font-medium mb-2">Product Details</h2>
              <ul className="list-disc list-inside text-gray-700">
                {Object.entries(product.details).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Add to Cart */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full py-3 bg-black text-white font-semibold rounded-lg transition-colors hover:bg-gray-800"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
}