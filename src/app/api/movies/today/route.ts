import { getMovieToday } from '@/services/movie';

export async function GET() {
  const movie = await getMovieToday();
  return Response.json(movie);
}

