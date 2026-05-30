import fs from 'fs';
import path from 'path';

export function getCmsData() {
  const filePath = path.join(process.cwd(), 'src/lib/cms-data.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to load CMS data", e);
    return null;
  }
}
