export function PostData({data}: {data: FormData}): string {
    return `${data.get("name")}, ${data.get("email")}, ${data.get("message")}`;
}