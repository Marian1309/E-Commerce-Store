import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json<string>('John Doe', { status: 200 });
};
