import React from 'react';

const EventCard = ({ id, title, date, category, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-105 relative overflow-hidden h-96">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{date}</p>
        <p className="text-gray-300">{category}</p>
      </div>
    </div>
  );
};

export default EventCard;