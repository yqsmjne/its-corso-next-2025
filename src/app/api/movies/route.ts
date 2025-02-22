import { getAllMovie, storeMovie } from '../../../services/movie';

export async function GET(request: Request) {
  const movie = await getAllMovie();
  return Response.json(movie);
}

export async function POST(request: Request) {
  const newMovie = await request.json();
  const movie = await storeMovie(newMovie);
  return Response.json(movie);
}