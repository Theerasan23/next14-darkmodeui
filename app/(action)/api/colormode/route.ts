
export async function GET(request: Request) {

    const data = {
        "colormode": "dark"
    }

    return new Response(JSON.stringify(data))

}