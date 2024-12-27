import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { creator } = req.query;

  if (!creator || typeof creator !== 'string') {
    res.status(400).json({ error: 'Invalid creator parameter' });
    return;
  }

  try {

    const response = await fetch(`https://note.com/api/v2/creators/${creator}/contents?kind=note&page=1`);

    if (!response.ok) {
      throw new Error('Failed to fetch data from the external API');
    }

    const apiData = await response.json();

    const articles = apiData.data.map((article: any) => ({
      id: article.id,
      title: article.name,
      createdAt: article.publish_at,
      thumbnailUrl: article.eyecatch_url || 'https://via.placeholder.com/150',
      url: article.note_url,
    }));

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    res.status(500).json({ error: 'Failed to fetch blog data' });
  }
}