import type { APIRoute } from "astro"
import { createClient } from "@vercel/kv"

const kv = createClient({
  url: import.meta.env.KV_REST_API_URL,
  token: import.meta.env.KV_REST_API_TOKEN,
})

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  console.log(body)
  const included: string[] = []
  Object.keys(body).forEach((key) => {
    if (key in body) included.push(key)
  })
  await kv.set("services", JSON.stringify(included))
  return new Response(
    JSON.stringify({
      included,
    })
  )
}
