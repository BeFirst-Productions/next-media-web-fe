import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';

export async function POST(req) {
  try {
    const { email } = await req.json();

    await connectDB();

    // check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'Email already subscribed' },
        { status: 400 }
      );
    }

    // save new subscriber
    await Subscriber.create({ email });

    return NextResponse.json(
      { success: true, message: 'Subscription successful!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
