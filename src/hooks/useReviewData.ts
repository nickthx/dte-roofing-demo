import { useState, useEffect } from 'react';

interface ReviewData {
  totalReviews: number;
  averageRating: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  lastUpdated: string;
  businessName: string;
}

export const useReviewData = () => {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/1ZZ3-sLfyRXhls8tPGe6hxK_W5vEfkO0XnHCxbwBNtCY/gviz/tq?tqx=out:json&range=A2:D2')
      .then(res => res.text())
      .then(text => {
        const parsed = JSON.parse(text.slice(47, -2));
        const row = parsed.table.rows[0].c;

        const totalReviews = row[1]?.v || 86;
        const averageRating = row[2]?.v || 5.0;

        setReviewData({
          totalReviews: totalReviews,
          averageRating: averageRating,
          ratingBreakdown: { 5: totalReviews, 4: 0, 3: 0, 2: 0, 1: 0 },
          lastUpdated: new Date().toISOString(),
          businessName: 'DTE Roofing'
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load reviews:', err);
        setError(true);
        setLoading(false);
        setReviewData({
          totalReviews: 86,
          averageRating: 5.0,
          ratingBreakdown: { 5: 86, 4: 0, 3: 0, 2: 0, 1: 0 },
          lastUpdated: new Date().toISOString(),
          businessName: 'DTE Roofing'
        });
      });
  }, []);

  return { reviewData, loading, error };
};
