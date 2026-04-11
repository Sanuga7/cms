import React from "react";

interface AnnounceProps {
  title: string;
  date: string;
}

const AnnounceCard = ({ title, date }: AnnounceProps) => (
  <div className="bg-[#f3f4f6] border-l-4 border-[#020617] hover:bg-[#020617] hover:text-white transition-colors duration-300 rounded-r-lg p-4 mt-3 shadow-sm group">
    <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-200 uppercase tracking-wider">
      {date}
    </span>
    <p className="font-sans font-medium mt-1">
      {title}
    </p>
  </div>
);

const Details = () => {
  const notices = [
    { title: "Grade 1 Admission Interviews - 2026", date: "Oct 12, 2025" },
    { title: "Annual Inter-House Sports Meet Update", date: "Oct 10, 2025" },
    { title: "G.C.E. (O/L) Seminar Series Schedule", date: "Oct 05, 2025" },
    { title: "School Holiday Notice: Poya Day", date: "Oct 01, 2025" },
    { title: "Prefects' Guild Applications Open", date: "Sep 28, 2025" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-8 w-full p-5 max-w-7xl mx-auto">
      {/* Notices Section */}
      <div className="md:col-span-4">
        <h1 className="text-2xl font-bold text-[#020617] border-b-2 border-[#020617] pb-2 uppercase tracking-tight mb-6">
          Latest Notices
        </h1>
        <div className="flex flex-col">
          {notices.map((item, index) => (
            <AnnounceCard key={index} title={item.title} date={item.date} />
          ))}
        </div>
        <button className="mt-4 text-[#020617] font-bold text-sm hover:underline">
          View All Notices →
        </button>
      </div>

      {/* Location Section */}
      <div className="md:col-span-6">
        <h1 className="text-2xl font-bold text-[#020617] border-b-2 border-[#020617] pb-2 uppercase tracking-tight mb-6">
          Find Us
        </h1>
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Lumbini College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.963471015697!2d79.87321687587483!3d6.894982618733235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2598379051793%3A0x6b63d6f734493393!2sLumbini%20College!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-4 text-gray-700">
          <p className="font-bold">Lumbini College</p>
          <p className="text-sm">Havelock Road, Colombo 05, Sri Lanka.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;