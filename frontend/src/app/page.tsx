import React from 'react';
import Link from 'next/link';
import EventCard from '../../components/EventCard';

const HomePage = () => {
  const featuredEvents = [
    { id: '1', title: 'Tech Fest 2024', date: '2024-04-15', category: 'Technology' },
    { id: '2', title: 'Cultural Night', date: '2024-05-01', category: 'Cultural' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to College Event Management</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
      <Link href="/events" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        View All Events
      </Link>
    </div>
  );
};

export default HomePage;