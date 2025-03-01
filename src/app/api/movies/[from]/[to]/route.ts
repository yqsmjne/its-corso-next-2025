import { findMovieFromTo } from '@/services/movie';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { from: string; to: string } }
) {
  const { from, to } = await params;

  if (!from || !to) {
    return NextResponse.json(
      { message: 'I parametri "from" e "to" sono obbligatori' },
      { status: 400 }
    );
  }

  console.log('GET request from:', from);
  console.log('GET request to:', to);

  const movie = await findMovieFromTo(from , to);

  return Response.json(movie);
}
