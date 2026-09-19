import ExploreBtn from '@/components/ExploreBtn'
import EventCard from '@/components/EventCard'
import { IEvent } from '@/database';
import { getAllEvents } from '@/lib/actions/event.actions';

const page = async () => {
  const events = await getAllEvents();
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

      <ExploreBtn />

      <div id="events" className='mt-20 space-y-7 scroll-mt-20'>
        <h3>featured Events</h3>

        <ul className='events'>
          {events && events.length > 0 && events.map((event: IEvent) => (
            <li key={event.title} className='list-none'>
              <EventCard {...event} />
            </li>
          )
          )}
        </ul>
      </div>
    </section>
  )
}
export default page