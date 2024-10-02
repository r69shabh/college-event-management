"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import EventCard from '../../components/EventCard';
import { getEvents } from '../../utils/api';

const imageUrls = {
  Technology: '/images/tech-fest.jpg',
  Cultural: '/images/cultural-night.jpg',
  Science: '/images/science-expo.jpg',
  Art: '/images/art-exhibition.jpg',
  // Add more categories and their image URLs as needed
};

const HomePage = ({ events }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
        {events && events.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {events.map(event => (
              <EventCard 
                key={event.id} 
                id={event.id} 
                title={event.name} 
                date={event.date} 
                category={event.category}
                imageUrl={imageUrls[event.category]} // Use imageUrls object to get image URL
              />
            ))}
          </div>
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;