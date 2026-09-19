import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
import { v2 as cloudinary } from 'cloudinary';
import { revalidateTag } from 'next/cache';

export async function GET() {
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 });
        return NextResponse.json(
            { success: true, data: events, message: "Events fetched successfully" },
            { status: 200 }
        );
    } catch (e) {
        console.error("Error fetching events:", e);
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : 'Unknown', message: "Failed to fetch events" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        let body;
        try {
            body = await req.json();
        }
        catch {
            return NextResponse.json({ success: false, message: "Invalid JSON data format" }, { status: 400 });
        }

        const { image, ...event } = body;
        if (!image) return NextResponse.json({ success: false, message: 'Image is required' }, { status: 400 });

        // Accepts a public URL or a base64 data URI (data:image/png;base64,...)
        const uploadResult = await cloudinary.uploader.upload(image, {
            resource_type: 'image',
            folder: 'DevEvent',
        });

        const createdEvent = await Event.create({
            ...event,
            image: uploadResult.secure_url,
        });

        revalidateTag('events', 'max');

        return NextResponse.json({ success: true, message: 'Event created successfully', event: createdEvent }, { status: 201 });

    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { success: false, message: 'Event Creation Failed', error: e instanceof Error ? e.message : 'Unknown' },
            { status: 500 }
        );

    }

}