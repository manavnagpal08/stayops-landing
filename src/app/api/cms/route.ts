import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const cmsFilePath = path.join(process.cwd(), 'src/lib/cms-data.json');

export async function GET() {
  try {
    const data = fs.readFileSync(cmsFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to load" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    fs.writeFileSync(cmsFilePath, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update CMS" }, { status: 500 });
  }
}
