import { createTags } from '../../../services/tags';

/* export async function GET(request: Request) {
  const schedules = await getAllSchedule();
  return Response.json(schedules);
} */

export async function POST(request: Request) {
  const newTags = await request.json();
  const tags = await createTags(newTags);
  return Response.json(tags);
}