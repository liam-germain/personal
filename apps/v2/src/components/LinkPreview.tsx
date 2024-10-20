'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LinkPreviewProps {
  url: string;
}

interface PreviewData {
  title: string;
  description: string;
  image: string;
}

export function LinkPreview({ url }: LinkPreviewProps) {
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPreviewData() {
      try {
        const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch preview data');
        }
        const data = await response.json();
        setPreviewData(data);
      } catch (err) {
        setError('Failed to load preview');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPreviewData();
  }, [url]);

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-32 rounded-md"></div>;
  }

  if (error || !previewData) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        {url}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="flex">
        {previewData.image && (
          <div className="w-1/3 relative">
            <Image
              src={previewData.image}
              alt={previewData.title}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-4 flex-1">
          <h3 className="font-semibold text-lg mb-2">{previewData.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{previewData.description}</p>
          <p className="text-xs text-gray-500 mt-2">{new URL(url).hostname}</p>
        </div>
      </div>
    </a>
  );
}
