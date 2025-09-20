import React from 'react';
import { Video, Users, Play, Eye, Heart, MessageCircle } from 'lucide-react';

const CreatorsPage = () => {
  const creators = [
    {
      id: 1,
      name: 'AG ???',
      realName: '???',
      role: 'Content Creator',
      image: 'https://i.imgur.com/VaS9bkm.png',
      platforms: {
        twitch: { followers: '0', avgViewers: '0' },
        youtube: { subscribers: '0', views: '0' },
        tiktok: { followers: '0', likes: '0' }
      },
      specialties: ['???', '???', '???'],
      bio: '???'
    },
    {
      id: 2,
      name: 'AG ???',
      realName: '???',
      role: 'Streamer',
      image: 'https://i.imgur.com/VaS9bkm.png',
      platforms: {
        twitch: { followers: '0', avgViewers: '0' },
        youtube: { subscribers: '0', views: '0' },
        tiktok: { followers: '0', likes: '0' }
      },
      specialties: ['???', '???', '???'],
      bio: '???'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Video className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Content <span className="text-red-500">Creators</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our talented content creators who entertain millions of viewers and build our community across all platforms
          </p>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {creators.map((creator) => (
              <div key={creator.id} className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  {/* Creator Header */}
                  <div className="flex items-center space-x-6 mb-6">
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{creator.name}</h3>
                      <p className="text-gray-400 mb-1">{creator.realName}</p>
                      <p className="text-red-400 font-semibold">{creator.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{creator.bio}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Content Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {creator.specialties.map((specialty, index) => (
                        <span key={index} className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Platform Stats */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold">Platform Statistics</h4>
                    
                    {/* Twitch */}
                    <div className="bg-black rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="bg-purple-600 p-2 rounded-lg mr-3">
                            <Play className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-semibold">Twitch</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Followers:</span>
                          <span className="text-white font-semibold ml-2">{creator.platforms.twitch.followers}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Avg Viewers:</span>
                          <span className="text-white font-semibold ml-2">{creator.platforms.twitch.avgViewers}</span>
                        </div>
                      </div>
                    </div>

                    {/* YouTube */}
                    <div className="bg-black rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="bg-red-600 p-2 rounded-lg mr-3">
                            <Eye className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-semibold">YouTube</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Subscribers:</span>
                          <span className="text-white font-semibold ml-2">{creator.platforms.youtube.subscribers}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Total Views:</span>
                          <span className="text-white font-semibold ml-2">{creator.platforms.youtube.views}</span>
                        </div>
                      </div>
                    </div>

                    {/* TikTok */}
                    <div className="bg-black rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="bg-pink-600 p-2 rounded-lg mr-3">
                            <Heart className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-semibold">TikTok</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Followers:</span>
                          <span className="text-white font-semibold ml-2">{creator.platforms.tiktok.followers}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Total Likes:</span>
                          <span className="text-white font-semibold ml-2">{creator.platforms.tiktok.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creator Network Impact</h2>
            <p className="text-gray-400 text-lg">Combined reach across all our content creators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Total Followers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Avg Live Viewers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Hours Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Creators */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect with fellow gamers, get the latest updates, and be part of the Atomic Gaming community.
          </p>
          <a
            href="https://discord.gg/fratomic"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
          >
            Join Discord Community
          </a>
        </div>
      </section>
    </div>
  );
};

export default CreatorsPage;