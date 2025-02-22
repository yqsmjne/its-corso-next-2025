import { getAllSchedule, createSchedule } from '../../../services/schedule';

export async function GET(request: Request) {
  const schedules = await getAllSchedule();
  return Response.json(schedules);
}

export async function POST(request: Request) {
  const newSchedule = await request.json();
  const schedules = await createSchedule(newSchedule);
  return Response.json(schedules);
}