export async function GET(request: Request) {
  // TODO: Fetch movies from a database
  // using https://orm.drizzle.team/docs/get-started/sqlite-new

  return Response.json([
    { id: 1, title: 'Shrek' },
    { id: 2, title: 'Shrek 2' },
  ]);
}
