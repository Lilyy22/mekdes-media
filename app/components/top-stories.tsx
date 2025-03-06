"use client";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

// Updated top stories with the YouTube videos provided
const topStories = [
  {
    title:
      "አስደናቂው ሊቅ ዓሊ ... ወትን እንጄ ፈተለትን ባለ ብቸኝነት ትሩ መሰለኝ..//ወጋ እና ፈተቻ ከመቅዴ ጋር//በአዲስ ቤቲ",
    author: "Mekdiye media",
    timeAgo: "3 days ago",
    image: "https://i.ytimg.com/vi/_kbqUohJEOg/hqdefault.jpg",
    videoId: "_kbqUohJEOg",
  },
  {
    title: "ከዘሀ በኋላ ኢህአዴግ አይ አስተዋቂ ... በተሰቃ በቁቆቹ መጥቻለሁ ያለችበት ሚስጥርዊ ቤቲ",
    author: "Mekdiye media",
    timeAgo: "10 days ago",
    image: "https://i.ytimg.com/vi/sZuJFMS-N-k/hqdefault.jpg",
    videoId: "sZuJFMS-N-k",
    startTime: "829", // 13:49 mark
  },
  {
    title: "የሰና ጀራርዲ...ሆኖን ተራቁቶብሃል እንጋጋው ባለ ፍርቻ አዲስ ኢት ኮሜዲ ቀስቃሽ",
    author: "Mekdiye media",
    timeAgo: "5 days ago",
    image: "https://i.ytimg.com/vi/DlpvrPRHTQ8/hqdefault.jpg",
    videoId: "DlpvrPRHTQ8",
  },
  {
    title: "ሰብስቤ ያመጣሁት ነው ከዚህ በኋላ ሁሉም ነገር ይለወጣል",
    author: "Anchor Media",
    timeAgo: "4 days ago",
    image: "https://i.ytimg.com/vi/sNI0aJec3uE/hqdefault.jpg",
    videoId: "sNI0aJec3uE",
  },
  {
    title: "ጉራጌ ከዚህ ያለፈው አገዛዝ ኮሜዲ የጉንዳን ዘመን ለአስተዋይ",
    author: "DMN - Diaspora Media Network",
    timeAgo: "3 days ago",
    image: "https://i.ytimg.com/vi/iTWXfm9R3x4/hqdefault.jpg",
    videoId: "iTWXfm9R3x4",
  },
];

export default function TopStories() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    videoId: "DlpvrPRHTQ8",
    startTime: "315", // Default start time for main video
  });
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleStoryClick = (videoId: string, startTime?: string) => {
    setCurrentVideo({
      videoId,
      startTime: startTime || "0",
    });
    setIsPlaying(true);
    // Scroll to top on mobile
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-8 md:py-12 rounded-3xl">
      <div className="container mx-auto px-6">
        {/* Use flex-col on small screens, flex-row on md and up */}
        <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
          {/* Main Feature - Full width on small screens, 2/3 on md and up */}
          <div className="w-full md:w-[65%]">
            <div className="relative rounded-2xl overflow-hidden bg-yellow-400 p-[2px] h-full">
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden h-full">
                {/* Use aspect-video only on small screens, h-full on md and up */}
                <div className="aspect-video md:aspect-auto md:h-full w-full">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&start=${currentVideo.startTime}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute inset-0"
                    ></iframe>
                  ) : (
                    <div ref={thumbnailRef} className="relative w-full h-full">
                      {/* Use a div with background image instead of Next.js Image component */}
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-gray-600"
                        style={{
                          backgroundImage: `url(https://i.ytimg.com/vi/${currentVideo.videoId}/maxresdefault.jpg)`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
                          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                            MEKDIYE MEDIA
                          </h1>
                          <div className="space-y-3 md:space-y-4">
                            <button
                              onClick={handlePlayClick}
                              className="flex items-center gap-2 bg-yellow-600 hover:bg-white/20 transition-colors px-4 md:px-6 py-2 md:py-3 rounded-full mx-auto backdrop-blur-sm cursor-pointer"
                            >
                              <Play
                                className="w-4 h-4 md:w-5 md:h-5 text-white"
                                fill="currentColor"
                              />
                              <span className="text-white font-medium text-sm md:text-base">
                                Watch Now
                              </span>
                            </button>
                          </div>
                          {/* Navigation Dots */}
                          <div className="flex justify-center gap-1 md:gap-2 mt-2 md:mt-4">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-6 md:w-12 h-1 rounded-full ${
                                  topStories[i]?.videoId ===
                                  currentVideo.videoId
                                    ? "bg-white"
                                    : "bg-white/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Top Stories - Full width on small screens, 1/3 on md and up */}
          <div className="w-full md:w-1/3 md:flex md:flex-col">
            <h2 className="text-xl font-bold mb-6 text-black">TOP STORIES</h2>
            <div className="flex flex-col gap-6 md:flex-grow md:overflow-auto md:pr-2">
              {topStories.map((story, index) => (
                <div
                  key={index}
                  className={`flex gap-4 group cursor-pointer ${
                    story.videoId === currentVideo.videoId
                      ? "bg-gray-200/80 rounded-lg p-2 -ml-2"
                      : ""
                  }`}
                  onClick={() =>
                    handleStoryClick(story.videoId, story.startTime)
                  }
                >
                  <div className="flex-shrink-0 relative">
                    <div
                      className="w-20 h-20 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${story.image})` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                        <Play
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium group-hover:text-blue-600 transition-colors line-clamp-2 text-gray-800">
                      {story.title}
                    </h3>
                    <div className="text-sm text-gray-400">
                      By {story.author} | {story.timeAgo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
