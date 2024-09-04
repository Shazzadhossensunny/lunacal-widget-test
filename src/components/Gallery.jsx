import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import qusImg from "../assets/Vector.png";
import Dot from "./Dot";
import Divider from "./Divider";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  // Load images from local storage on component mount
  useEffect(() => {
    const savedImages = localStorage.getItem("uploadedImages");
    if (savedImages && savedImages !== "[]") {
      try {
        setImages(JSON.parse(savedImages));
      } catch (error) {
        console.error("Error parsing saved images from localStorage:", error);
        setImages([]);
      }
    }
  }, []);

  // Save images to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("uploadedImages", JSON.stringify(images));
  }, [images]);

  // Function to handle the image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const uniqueImage = {
          src: reader.result,
          id: `${file.name}-${new Date().getTime()}`,
        };
        setImages((prevImages) => [...prevImages, uniqueImage]);
      };
      reader.readAsDataURL(file);
    }

    // Reset the file input to allow re-uploading the same file
    event.target.value = "";
  };

  // Function to trigger the file input click
  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative">
      <Divider></Divider>
      <img className="absolute top-5 left-3" src={qusImg} alt="qus" />
      <div>
        <Dot></Dot>
      </div>
      <div className="gallery-body">
        <div className="flex justify-between items-center mb-10 flex-wrap">
          <div className="w-1/3">
            <h2 className="py-4 px-10 bg-[#171717] shadow-[0_4px_10px_2px_rgba(0,0,0,0.25)] rounded-[20px] text-xl text-white font-medium inline-block">
              Gallery
            </h2>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <button
                className="add-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={openFileDialog}
              >
                + Add Image
              </button>
              {/* Hidden File Input for Image Upload */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Swiper Navigation Arrows with React Icons */}
            <div className="flex justify-center items-center gap-3">
              <button
                className={`custom-prev ${
                  images.length === 0 ? "hidden" : "block"
                } p-2 rounded-full shadow arw-btn focus:outline-none`}
              >
                <FaArrowLeft className="text-base" />
              </button>
              <button
                className={`custom-next ${
                  images.length === 0 ? "hidden" : "block"
                } p-2 rounded-full shadow arw-btn focus:outline-none`}
              >
                <FaArrowRight className="text-base" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="swiper-container"
          onInit={(swiper) => {
            // Manually update Swiper to bind navigation correctly
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.id}
              className="swiper-slide flex justify-center items-center"
            >
              <img
                src={image.src}
                alt="Uploaded"
                className="w-full h-[200px] object-cover rounded"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
