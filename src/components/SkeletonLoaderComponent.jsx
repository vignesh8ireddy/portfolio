import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      {/* Navbar Skeleton */}
      <div className="h-16 bg-gray-300 animate-pulse"></div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Content Skeleton */}
        <div className="flex-1 overflow-y-scroll no-scrollbar p-6">
          <div className="space-y-8">
            {/* About Section */}
            <div className="h-32 bg-gray-300 rounded-lg animate-pulse"></div>

            {/* Skills Section */}
            <div className="h-40 bg-gray-300 rounded-lg animate-pulse"></div>

            {/* Experience Section */}
            <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>

            {/* Projects Section */}
            <div className="h-56 bg-gray-300 rounded-lg animate-pulse"></div>

            {/* Certifications Section */}
            <div className="h-32 bg-gray-300 rounded-lg animate-pulse"></div>

            {/* Contact Section */}
            <div className="h-32 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Right Fixed Image Skeleton */}
        <div className="hidden md:block md:w-1/3 lg:w-1/3">
          <div className="sticky top-16 h-[calc(100vh-4rem)] bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;