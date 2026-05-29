import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const bannerFilePath = path.join(process.cwd(), 'src/lib/banner.json');

export async function GET() {
  try {
    const data = fs.readFileSync(bannerFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ type: 'photo', url: '', title: '', subtitle: '' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    fs.writeFileSync(bannerFilePath, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update banner" }, { status: 500 });
  }
}
