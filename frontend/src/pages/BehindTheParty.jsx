import React, { useState } from 'react';
import { Play, Clock, Calendar, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const BehindTheParty = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Making Traditional Kokedama - Step by Step",
      description: "Watch the complete process of creating a Bird's Nest Fern kokedama from scratch, including moss preparation and wrapping techniques.",
      thumbnail: "https://images.unsplash.com/photo-1425421598808-4a22ce59cc97",
      duration: "12:34",
      uploadDate: "2024-09-10",
      category: "Tutorial",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 2,
      title: "Preparing My Cargo Bike for Market Day",
      description: "Behind the scenes look at how I organize and load my cargo bike with plants and flowers for a day at Greenwich Park.",
      thumbnail: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
      duration: "8:15",
      uploadDate: "2024-09-05",
      category: "Behind the Scenes",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Sourcing Fresh Flowers in South London",
      description: "Join me as I visit local flower markets and growers to source the best seasonal blooms for my mobile stall.",
      thumbnail: "https://images.unsplash.com/photo-1659123087151-f8a9bde5c9c3",
      duration: "15:22",
      uploadDate: "2024-08-28",
      category: "Sourcing",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Creating Coco-Fibre Plant Wraps",
      description: "Learn my technique for preparing sustainable coconut fibre wrapping as an eco-friendly alternative to traditional moss.",
      thumbnail: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg",
      duration: "9:47",
      uploadDate: "2024-08-20",
      category: "Tutorial",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Setting Up at Blackheath Common",
      description: "Time-lapse of setting up my mobile plant stall at Blackheath, including display arrangement and customer interactions.",
      thumbnail: "https://images.unsplash.com/photo-1543168256-8133cc8e3ee4",
      duration: "6:33",
      uploadDate: "2024-08-15",
      category: "Behind the Scenes",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Bonsai Shaping Techniques for Beginners",
      description: "Detailed tutorial on basic bonsai shaping and pruning techniques that I use for the Chinese Elm trees in my collection.",
      thumbnail: "https://images.unsplash.com/photo-1447434108058-49f9248d09a5",
      duration: "18:12",
      uploadDate: "2024-08-10",
      category: "Tutorial",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const categories = ["All", "Tutorial", "Behind the Scenes", "Sourcing"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Behind <span className="font-medium">The Party</span>
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Go behind the scenes and learn how I create beautiful kokedama, prepare for market days, 
            and bring traditional Japanese plant artistry to South East London.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "bg-emerald-600 hover:bg-emerald-700" 
                : "border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="relative overflow-hidden rounded-t-lg"
                onClick={() => setSelectedVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
                <Badge className="absolute top-2 left-2 bg-emerald-600">
                  {video.category}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {video.description}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <div className="relative">
              <iframe
                width="100%"
                height="400"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allowFullScreen
                className="w-full"
              ></iframe>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
              >
                ✕
              </Button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <Badge>{selectedVideo.category}</Badge>
                <span>Uploaded {new Date(selectedVideo.uploadDate).toLocaleDateString()}</span>
                <span>{selectedVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BehindTheParty;