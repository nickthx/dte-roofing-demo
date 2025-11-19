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
    fetch('https://n8n.whitflow.com/webhook/dte-reviews')
      .then(res => res.json())
      .then(data => {
        setReviewData(data);
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
