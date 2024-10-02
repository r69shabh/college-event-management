// frontend/src/app/Home.jsx
import React from 'react';
import EventCard from '../../components/EventCard';

const events = [
  {
    id: '1',
    title: 'Event 1',
    date: '2023-10-01',
    category: 'Category 1',
    imageUrl: 'https://example.com/image1.jpg', // Provide imageUrl
  },
  {
    id: '2',
    title: 'Event 2',
    date: '2023-10-02',
    category: 'Category 2',
    imageUrl: 'https://example.com/image2.jpg', // Provide imageUrl
  },
  // Add more events as needed
];

const Home = () => {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="grid grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard 
            key={event.id} 
            id={event.id} 
            title={event.title} 
            date={event.date} 
            category={event.category} 
            imageUrl={event.imageUrl} // Pass imageUrl prop
          />
        ))}
      </div>
    </div>
  );
};

export default Home;