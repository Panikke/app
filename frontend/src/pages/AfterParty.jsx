import React, { useState } from 'react';
import { Play, Clock, Calendar, BookOpen, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const AfterParty = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "The Fascinating Science Behind Air-Purifying Plants",
      description: "Discover how NASA's research revealed which houseplants are most effective at removing toxins from indoor air, and why plants like Snake Plants work 24/7.",
      thumbnail: "https://images.unsplash.com/photo-1425421598808-4a22ce59cc97",
      duration: "14:25",
      uploadDate: "2024-09-12",
      category: "Science",
      topic: "Air Purification",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Why Moss Balls Don't Need Soil: The Kokedama Mystery",
      description: "Explore the incredible biology of how plants can thrive in just moss and water, and the ancient Japanese techniques that make it possible.",
      thumbnail: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg",
      duration: "11:33",
      uploadDate: "2024-09-08",
      category: "Biology",
      topic: "Plant Adaptation",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "The Secret Life of Ferns: 400 Million Years of Evolution",
      description: "Journey through the ancient history of ferns, from prehistoric forests to modern houseplants, and their unique reproduction methods.",
      thumbnail: "https://images.unsplash.com/photo-1659123087151-f8a9bde5c9c3",
      duration: "16:48",
      uploadDate: "2024-09-03",
      category: "Evolution",
      topic: "Plant History",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Bonsai Trees: The Art of Stress and Survival",
      description: "Learn how controlled stress creates the beautiful miniature trees we love, and why bonsai can live for centuries in tiny containers.",
      thumbnail: "https://images.unsplash.com/photo-1447434108058-49f9248d09a5",
      duration: "13:17",
      uploadDate: "2024-08-29",
      category: "Horticulture",
      topic: "Bonsai Science",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Plant Communication: Do Plants Really Talk to Each Other?",
      description: "Fascinating research reveals how plants use chemical signals, underground networks, and even sound to communicate warnings and share resources.",
      thumbnail: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
      duration: "18:52",
      uploadDate: "2024-08-25",
      category: "Science",
      topic: "Plant Communication",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "The Psychology of Green Spaces: Why Plants Make Us Happy",
      description: "Scientific evidence showing how being around plants reduces stress, improves focus, and why humans have an innate connection to nature.",
      thumbnail: "https://images.unsplash.com/photo-1543168256-8133cc8e3ee4",
      duration: "12:06",
      uploadDate: "2024-08-20",
      category: "Psychology",
      topic: "Human-Plant Connection",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 7,
      title: "Carnivorous Plants: Nature's Most Efficient Hunters",
      description: "Explore the amazing adaptations of Venus flytraps, pitcher plants, and sundews - and why they evolved to eat insects.",
      thumbnail: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
      duration: "15:34",
      uploadDate: "2024-08-15",
      category: "Biology",
      topic: "Plant Adaptation",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "The Hidden Network: How Tree Roots Share Information",
      description: "Discover the 'wood wide web' - the underground fungal networks that connect forest trees and allow them to share nutrients and warnings.",
      thumbnail: "https://images.unsplash.com/photo-1425421598808-4a22ce59cc97",
      duration: "20:15",
      uploadDate: "2024-08-10",
      category: "Ecology",
      topic: "Forest Networks",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const categories = ["All", "Science", "Biology", "Evolution", "Horticulture", "Psychology", "Ecology"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-800 to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            After <span className="font-medium">The Party</span>
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Dive deep into the fascinating world of plants! Discover amazing facts, 
            scientific wonders, and the incredible properties that make plants so extraordinary.
          </p>
          <div className="flex justify-center items-center space-x-6 text-emerald-200">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5" />
              <span>Plant Science</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Educational Content</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="relative overflow-hidden rounded-t-lg"
                onClick={() => setSelectedVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <Badge className="absolute top-2 left-2 bg-emerald-600 text-xs">
                  {video.category}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 text-sm">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-xs text-emerald-600">
                    <BookOpen className="h-3 w-3" />
                    <span>{video.topic}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{video.duration}</span>
                    </div>
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
          <div className="bg-white rounded-lg max-w-5xl w-full overflow-hidden">
            <div className="relative">
              <iframe
                width="100%"
                height="450"
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
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedVideo.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <Badge>{selectedVideo.category}</Badge>
                    <span>{selectedVideo.topic}</span>
                    <span>Uploaded {new Date(selectedVideo.uploadDate).toLocaleDateString()}</span>
                    <span>{selectedVideo.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfterParty;