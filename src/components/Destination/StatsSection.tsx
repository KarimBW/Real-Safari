
import React from "react";
import { Stats } from "../../data/destinationData";

interface StatsSectionProps {
  stats: Stats;
  editMode: boolean;
  onNestedTextChange: (category: string, field: string, value: string) => void;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, editMode, onNestedTextChange }) => {
  return (
    <section className="py-16 px-8 md:px-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {editMode ? (
            <input
              type="text"
              value="AWESOME DESTINATION"
              className="w-full border-b border-gray-300"
              readOnly
            />
          ) : (
            "AWESOME DESTINATION"
          )}
        </h2>
        <div className="flex justify-between max-w-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {editMode ? (
                <input
                  type="text"
                  value={stats.castles}
                  onChange={(e) => onNestedTextChange('stats', 'castles', e.target.value)}
                  className="w-24 text-center border-b border-gray-300"
                />
              ) : (
                stats.castles
              )}
            </h3>
            <p className="text-gray-600">Wildlife</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {editMode ? (
                <input
                  type="text"
                  value={stats.lakes}
                  onChange={(e) => onNestedTextChange('stats', 'lakes', e.target.value)}
                  className="w-24 text-center border-b border-gray-300"
                />
              ) : (
                stats.lakes
              )}
            </h3>
            <p className="text-gray-600">Lakes</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {editMode ? (
                <input
                  type="text"
                  value={stats.islands}
                  onChange={(e) => onNestedTextChange('stats', 'islands', e.target.value)}
                  className="w-24 text-center border-b border-gray-300"
                />
              ) : (
                stats.islands
              )}
            </h3>
            <p className="text-gray-600">Islands</p>
          </div>
        </div>
        <button className="mt-8 border border-gray-900 px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors">
          READ MORE
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Photo Area 1</div>}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-64 bg-gray-200 rounded overflow-hidden">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517825656053-95ab2b9609e6?ixlib=rb-4.0.3')" }}>
              {editMode && <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">Photo Area 2</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
