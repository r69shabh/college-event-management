import Navbar from '../../components/Navbar';
import EventCard from '../../components/EventCard';
import { getEvents } from '../../utils/api';
import { FC } from 'react';

interface Event {
  id: string;
  name: string;
  date: string;
  category: string;
  // Add other event properties here
}

interface HomePageProps {
  events: Event[];
}

const HomePage: FC<HomePageProps> = ({ events }) => {
  return (
    <div>
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
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No upcoming events available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const events = await getEvents();
    return { props: { events } };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { props: { events: [] } }; // Return empty events if API fails
  }
}

export default HomePage;