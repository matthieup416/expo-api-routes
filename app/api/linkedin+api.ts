export function GET(request: Request) {
  console.log('in route')
  return Response.json({ Hi: 'LinkedIn' })
}
