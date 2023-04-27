export async function GET(request) {
  return new Response(
    JSON.stringify([
      { name: "Shohjahon", id: 1 },
      { name: "Suynov", id: 2 },
      { name: "John", id: 3 },
      { name: "Doe", id: 4 },
    ])
  );
}
