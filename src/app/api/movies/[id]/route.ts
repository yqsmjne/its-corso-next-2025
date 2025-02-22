import {  findMovieById } from '../../../../services/movie';

export async function GET(request: Request) {
  const id = await request.json();
  const movie = await findMovieById(id);
  return Response.json(movie);
}