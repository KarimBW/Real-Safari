
import { Header } from "@/components/Safari/Header";
import { Sidebar } from "@/components/Safari/Sidebar";

const Plan = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 relative">
        <Header />
        
        <div className="pt-32 px-16 h-full bg-gradient-to-r from-safari-dark-grey/90 to-safari-dark-grey/60">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl font-bold mb-8 text-safari-gold">Safari Plan</h1>
            
            <div className="space-y-8">
              <section className="bg-safari-dark-grey/50 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-3xl mb-4 font-semibold">Plan Your Safari Adventure</h2>
                <p className="text-lg mb-6">
                  Choose from our carefully curated safari packages or create a custom itinerary tailored to your preferences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-safari-gold p-6 rounded-md">
                    <h3 className="text-2xl mb-2 text-safari-gold">Okavango Experience</h3>
                    <p className="mb-4">7 days exploring the rich wildlife of the Okavango Delta.</p>
                    <button className="bg-safari-gold text-white py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
                      View Details
                    </button>
                  </div>
                  
                  <div className="border border-safari-gold p-6 rounded-md">
                    <h3 className="text-2xl mb-2 text-safari-gold">Kalahari Adventure</h3>
                    <p className="mb-4">5 days discovering the unique ecosystem of the Kalahari Desert.</p>
                    <button className="bg-safari-gold text-white py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </section>
              
              <section className="bg-safari-dark-grey/50 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-3xl mb-4 font-semibold">Custom Safari</h2>
                <p className="text-lg mb-6">
                  Contact us to create your personalized safari experience. Our experts will help you design the perfect adventure.
                </p>
                <button className="bg-safari-gold text-white py-2 px-4 rounded hover:bg-opacity-80 transition-colors">
                  Get Started
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
