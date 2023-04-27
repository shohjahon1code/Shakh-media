import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filtered = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json("error occured")
  }
}
