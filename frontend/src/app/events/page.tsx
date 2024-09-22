import React from 'react';
import EventCard from '../../../components/EventCard';

const EventsPage = () => {
  const events = [
    { id: '1', title: 'Tech Fest 2024', date: '2024-04-15', category: 'Technology' },
    { id: '2', title: 'Cultural Night', date: '2024-05-01', category: 'Cultural' },
    { id: '3', title: 'Sports Meet', date: '2024-06-10', category: 'Sports' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;