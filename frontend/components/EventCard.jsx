import React from 'react';
import Link from 'next/link';
import Button from './Button';

const EventCard = ({ id, title, date, category }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-blue-500 mb-4">{category}</p>
      <Link href={`/events/${id}`}>
        <Button>View Details</Button>
      </Link>
    </div>
  );
};

export default EventCard;