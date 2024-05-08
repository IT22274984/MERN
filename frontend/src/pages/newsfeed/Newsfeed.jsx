import React from 'react';

const NewsFeed = () => {
    // Dummy data for demonstration
    const newsData = [
        {
            title: "New Study Reveals Surprising Link Between Diet and Eye Health",
            description: "Researchers have discovered a compelling connection between diet and eye health, suggesting that certain foods may offer protection against age-related vision problems.",
            image: "https://www.codexdigital.com.au/assets/img/work/centre-for-eye-health/centre-for-eye-health-accordion-1.jpg",
            source: "Eye Health Journal",
            date: "May 1, 2024"
        },
        {
            title: "Latest Trends in Eyewear Fashion: What's Hot This Season",
            description: "Get ready to update your look with the latest eyewear trends for this season. From retro-inspired frames to bold colors, find out what's trending in the world of fashion eyewear.",
            image: "https://via.placeholder.com/300",
            source: "Fashion Eye Magazine",
            date: "April 28, 2024"
        },
        // Add more news items as needed
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.map((news, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                            <p className="text-gray-700 mb-4">{news.description}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600">{news.source}</p>
                                <p className="text-gray-600">{news.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;
