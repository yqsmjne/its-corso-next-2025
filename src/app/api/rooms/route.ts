import { getAllRooms, createRooms } from '../../../services/rooms';

export async function GET(request: Request) {
  const rooms = await getAllRooms();
  return Response.json(rooms);
}

export async function POST(request: Request) {
  const newRooms = await request.json();
  const rooms = await createRooms(newRooms);
  return Response.json(rooms);
}