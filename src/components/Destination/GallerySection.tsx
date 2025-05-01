
import React from "react";

interface GallerySectionProps {
  editMode: boolean;
}

const GallerySection: React.FC<GallerySectionProps> = ({ editMode }) => {
  return (
    <section className="py-16 px-8 md:px-16">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-3 md:col-span-1 h-64 bg-gray-200 rounded overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.0.3')" }}>
            {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 1</div>}
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 h-64 bg-gray-200 rounded overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?ixlib=rb-4.0.3')" }}>
            {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 2</div>}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="h-64 bg-gray-200 rounded overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3')" }}>
            {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 3</div>}
          </div>
        </div>
        <div className="h-64 bg-gray-200 rounded overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507915977619-6ccfe8003b22?ixlib=rb-4.0.3')" }}>
            {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 4</div>}
          </div>
        </div>
        <div className="h-64 bg-gray-200 rounded overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505778276668-26b3ff7af103?ixlib=rb-4.0.3')" }}>
            {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Gallery Photo 5</div>}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <button className="border border-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors">
          VIEW OUR PHOTO GALLERY →
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
