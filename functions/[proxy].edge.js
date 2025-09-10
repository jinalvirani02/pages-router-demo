
export default async function handler() {
  try {
    const response = await fetch(
      'https://nextjs-launch-challenge-test.devcontentstackapps.com/api/test'
    );

    // Check status first
    if (!response.ok) {
      console.error('API returned status:', response.status);
      return new Response('Error fetching API', { status: response.status });
    }

    let data;
    try {
      data = await response.json(); // Try parsing JSON
    } catch {
      const text = await response.text(); // Fallback if JSON fails
      console.warn('Response is not JSON:', text);
      data = text;
    }

    console.log('API response:', data);

    return new Response('Logged API response', { status: 200 });
  } catch (error) {
    console.error('Error fetching API:', error);
    return new Response('Error occurred', { status: 500 });
  }
}
