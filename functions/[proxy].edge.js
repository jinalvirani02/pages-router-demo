export default async function handler(request, context) {
  try {
    // Call the external API
    const response = await fetch(
      'https://nextjs-launch-challenge-test.devcontentstackapps.com/api/test'
    );

    // Parse its body
    const responseBody = await response.json();

    // Add extra field before returning
    const modifiedResponse = new Response(
      JSON.stringify({
        ...responseBody,
        time: new Date().toISOString(), // add server time
      }),
      {
        status: response.status,
        headers: { ...Object.fromEntries(response.headers) },
      }
    );

    // Add custom header
    modifiedResponse.headers.set('X-Message', 'Modified response headers');

    return modifiedResponse;
  } catch (error) {
    console.error('Error fetching API:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch API', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
