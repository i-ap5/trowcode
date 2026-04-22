import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, details } = req.body;

    // The Google Form URL and field IDs are now securely stored on the server
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfS1HTZPQOuhBzNBYqCO8j45irN-x3YLIiC-Q-HFArDGCPdIw/formResponse";

    const params = new URLSearchParams();
    params.append('entry.1463047857', firstName || '');
    params.append('entry.1841059139', lastName || '');
    params.append('entry.530502212', email || '');
    params.append('entry.1969543785', phone || '');
    params.append('entry.132442811', details || '');

    // Forward the request to Google Forms
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    // Google Forms returns a successful status even for no-cors, 
    // so we just check if the fetch didn't throw.
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
