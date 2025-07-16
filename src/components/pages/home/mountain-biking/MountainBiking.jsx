import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import CardTrail from "../../../partials/CardTrail";
import CardSkills from "../../../partials/CardSkills";

const MountainBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            {/* Hero Section */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-blue-900 opacity-60">
                <img
                  src="/images/mtb-banner.webp"
                  alt="Mountain biking hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      Mountain Biking
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                      Trails, adrenaline, and outdoor adventure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Featured Trails */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Must-Ride Trails
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Trail 1 */}
                  <CardTrail
                    image={"/images/ski.webp"}
                    alt={"Whistler Bike Park"}
                    title={"Whistler Bike Park"}
                    country={"British Columbia, Canada"}
                    level={"Expert"}
                    description={
                      "The world's premier mountain bike park with trails for all skill levels and legendary downhill courses."
                    }
                    trailCount={"Over 50 trails"}
                  />

                  {/* Trail 2 */}
                  <CardTrail
                    image={"/images/shoes.webp"}
                    alt={"Moab Slickrock"}
                    title={"Moab Slickrock"}
                    country={"Utah, USA"}
                    level={"Intermediate-Advanced"}
                    description={
                      "The iconic trail with grippy sandstone and rollercoaster-like terrain that defines mountain biking in the desert."
                    }
                    trailCount={"10.6 mile loop"}
                  />
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Essential MTB Skills
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Skill 1 */}
                  <CardSkills
                    svg={
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />{" "}
                      </svg>
                    }
                    title={"Body Position"}
                    description={
                      "Stay centered on the bike with bent elbows and knees to absorb impacts and maintain control."
                    }
                  />

                  {/* Skill 2 */}
                  <CardSkills
                    svg={
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    }
                    title={"Braking Control"}
                    description={
                      "Use both brakes evenly, with more front brake on descents. Avoid locking wheels."
                    }
                  />

                  {/* Skill 3 */}
                  <CardSkills
                    svg={
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    }
                    title={"Cornering"}
                    description={
                      "Look through the turn, lean the bike (not your body), and keep pedals level."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MountainBiking;
