// functions/hello.js

export default function handler(request, response) {
    response.status(200).json({
    body: "from eleventy-app functions",
    query: request.query,
    cookies: request.cookies,
  });
}
