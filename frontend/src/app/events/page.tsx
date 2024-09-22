import React from 'react';
import Link from 'next/link';
import EventCard from '../../../components/EventCard';

const EventsPage = () => {
  const allEvents = [
    { id: '1', title: 'Tech Fest 2024', date: '2024-04-15', category: 'Technology', imageUrl: '/images/tech-fest.jpg' },
    { id: '2', title: 'Cultural Night', date: '2024-05-01', category: 'Cultural', imageUrl: '/images/cultural-night.jpg' },
    { id: '3', title: 'Science Expo', date: '2024-06-10', category: 'Science', imageUrl: '/images/science-expo.jpg' },
    { id: '4', title: 'Art Exhibition', date: '2024-07-20', category: 'Art', imageUrl: '/images/art-exhibition.jpg' },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">All Events</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default EventsPage;