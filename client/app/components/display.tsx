import React from 'react';

// 1. Reusable Card Component to keep UI consistent
const NewsCard = ({ category, date, title }: { category: string; date: string; title: string }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
    <div className="relative h-40 w-full bg-gray-200 overflow-hidden">
      <img
        src="/no-result.jpg"
        alt="News"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className="absolute top-3 left-3 bg-[#F6BE00] text-[#020617] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
        {category}
      </span>
    </div>
    <div className="p-4">
      <p className="text-[#006400] text-xs font-semibold mb-1 uppercase tracking-wide">
        {date}
      </p>
      <h3 className="text-[#020617] font-bold text-base leading-tight mb-3 line-clamp-2">
        {title}
      </h3>
      <button className="text-sm font-bold text-gray-600 group-hover:text-[#020617] transition-colors flex items-center gap-1">
        Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  </div>
);

const NewsDisplay = () => {
  // 2. Data structure for your sections
  const sections = [
    { id: 1, title: "School News", category: "General" },
    { id: 2, title: "Student News", category: "Students" },
    { id: 3, title: "Sports News", category: "Sports" },
    { id: 4, title: "Society News", category: "Societies" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Grid: 1 col on mobile, 2 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {sections.map((section) => (
          <div key={section.id} className="space-y-6">
            {/* Section Header matching your school colors */}
            <h2 className="text-2xl font-bold text-[#020617] border-b-2 border-[#020617] pb-2 uppercase tracking-tight">
              {section.title}
            </h2>
            
            {/* Two cards per section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NewsCard 
                category={section.category} 
                date="Oct 24, 2024" 
                title="Latest updates regarding the upcoming semester events." 
              />
              <NewsCard 
                category={section.category} 
                date="Oct 20, 2024" 
                title="Achievements and milestones reached by our community." 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDisplay;