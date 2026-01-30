"use client";

import Image from "next/image";
import React, { useState } from "react";

const UploadProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [prices, setPrices] = useState([]);
  const [dimensions, setDimensions] = useState([]);

  // Temporary input states
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [dimensionInput, setDimensionInput] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); // max 3 images
    setImages(files);
  };

  const handleAddSize = () => {
    if (sizeInput.trim() && !sizes.includes(sizeInput.trim())) {
      setSizes([...sizes, sizeInput.trim()]);
      setSizeInput("");
    }
  };
  const handleRemoveSize = (s) => setSizes(sizes.filter((item) => item !== s));

  const handleAddColor = () => {
    if (colorInput.trim() && !colors.includes(colorInput.trim())) {
      setColors([...colors, colorInput.trim()]);
      setColorInput("");
    }
  };
  const handleRemoveColor = (c) =>
    setColors(colors.filter((item) => item !== c));

  const handleAddPrice = () => {
    const p = parseFloat(priceInput);
    if (!isNaN(p)) {
      setPrices([...prices, p]);
      setPriceInput("");
    }
  };
  const handleRemovePrice = (p) =>
    setPrices(prices.filter((item) => item !== p));

  const handleAddDimension = () => {
    if (dimensionInput.trim() && !dimensions.includes(dimensionInput.trim())) {
      setDimensions([...dimensions, dimensionInput.trim()]);
      setDimensionInput("");
    }
  };
  const handleRemoveDimension = (d) =>
    setDimensions(dimensions.filter((item) => item !== d));

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, category, images, sizes, colors, prices, dimensions };
    console.log(data);
    alert("Product data submitted! Check console.");
  };

  return (
    <div className="flex-1 max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Upload Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Images */}
        <div>
          <label className="block font-semibold mb-2">Images (max 3)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full"
          />
          <div className="flex gap-3 mt-3">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-24 h-24 rounded-lg overflow-hidden border"
              >
                <Image
                  src={URL.createObjectURL(img)}
                  alt={`preview-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <label className="block font-semibold mb-2">Sizes</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value)}
              placeholder="e.g., S"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddSize}
              className="bg-black active:scale-95 text-white px-4 py-2 rounded-lg  transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {s}
                <button
                  type="button"
                  onClick={() => handleRemoveSize(s)}
                  className="text-red-500 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <label className="block font-semibold mb-2">Colors (hex codes)</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              placeholder="#ff0000"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddColor}
              className="bg-black active:scale-95 text-white px-4 py-2 rounded-lg  transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map((c, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <div
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: c }}
                  title={c}
                ></div>
                <button
                  type="button"
                  onClick={() => handleRemoveColor(c)}
                  className="text-red-500 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
         {/* Dimensions */}
         <div>
          <label className="block font-semibold mb-2">Dimensions (LxWxH)</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={dimensionInput}
              onChange={(e) => setDimensionInput(e.target.value)}
              placeholder="e.g., 20x40x30"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddDimension}
              className="bg-black active:scale-95 text-white px-4 py-2 rounded-lg transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {dimensions.map((d, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {d}
                <button
                  type="button"
                  onClick={() => handleRemoveDimension(d)}
                  className="text-red-500 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Prices */}
        <div>
          <label className="block font-semibold mb-2">Prices</label>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              placeholder="e.g., 100"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddPrice}
              className="bg-black active:scale-95 text-white px-4 py-2 rounded-lg  transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {prices.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                ${p}
                <button
                  type="button"
                  onClick={() => handleRemovePrice(p)}
                  className="text-red-500 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

       

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 active:scale-95 transition font-semibold text-lg"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
