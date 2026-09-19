import { cacheLife, cacheTag } from 'next/cache';

import Event, { IEvent } from '@/database/event.model';
import connectDB from '@/lib/mongodb';

// Mongoose lean docs carry ObjectId/Date instances; round-trip through JSON so
// results are plain objects that "use cache" can serialize.
const serialize = <T>(doc: T): T => JSON.parse(JSON.stringify(doc));

export const getAllEvents = async (): Promise<IEvent[]> => {
    'use cache';
    cacheLife('hours');
    cacheTag('events');

    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 }).lean();
        return serialize(events) as IEvent[];
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

export const getEventBySlug = async (slug: string): Promise<IEvent | null> => {
    'use cache';
    cacheLife('hours');
    cacheTag('events');

    try {
        await connectDB();
        const event = await Event.findOne({ slug: slug.trim().toLowerCase() }).lean();
        return event ? (serialize(event) as IEvent) : null;
    } catch (error) {
        console.error('Error fetching event:', error);
        return null;
    }
}

export const getSimilarEventsBySlug = async (slug: string): Promise<IEvent[]> => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug });
        if (!event) return [];

        const events = await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags } }).lean();
        return serialize(events) as IEvent[];
    } catch {
        return [];
    }
}
