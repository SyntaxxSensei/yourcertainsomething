import { promises as fs } from 'fs';

export function PostData({data}: {data: FormData}): string {
    return `${data.get("name")}, ${data.get("email")}, ${data.get("message")}`;
}

export async function GetData() {
        const data = await fs.readFile(process.cwd() + '/jsonData/images.json', 'utf8')
        const json = JSON.parse(data);
        return json.images;
}