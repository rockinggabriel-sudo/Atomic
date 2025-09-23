import React from 'react';
import { Sword, Trophy, Target, Calendar, Users } from 'lucide-react';

const CompetitivePage = () => {
  const competitiveTeams = [
    {
      id: 1,
      game: 'Fortnite',
      rank: '#47 NAC',
      image: 'https://i.imgur.com/Jz82nly.png',
      players: [
        { 
          name: 'AG Hajuu', 
          role: 'Pro Fortnite', 
          country: 'NAW',
          image: 'https://i.imgur.com/JkQPS6c.png',
          stats: { pr: '83K', earnings: '$10K', grands: '8' }
        },
        { 
          name: 'AG ???', 
          role: 'Pro Fortnite', 
          country: 'NAC',
          image: 'https://i.imgur.com/Tb7E068.jpeg',
          stats: { pr: '55K', earnings: '$10.1K', grands: '5' }
        },
        { 
          name: 'AG ???', 
          role: 'Pro Fortnite', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
        { 
          name: 'AG ???', 
          role: 'Pro Fortnite', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
        { 
          name: 'AG ???', 
          role: 'Pro Fortnite', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
      ],
      recentResults: [
        { tournament: 'FNCS Major 3 Group Stage', placement: '6th', prize: '2,325' },
        { tournament: 'Performance Eval Cup', placement: '7th', prize: '750' },
        { tournament: 'FNCS Grand Finals', placement: '?', prize: '$?' }
      ],
      upcomingMatch: 'FNCS Grand Finals - August 2 & 3, 2025'
    },
    {
      id: 3,
      game: 'Call of Duty',
      rank: '#?',
      image: 'https://i.imgur.com/Jz82nly.png',
      players: [
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { pr: '0', earnings: '0', grands: '0' }
        },
      ],
      recentResults: [
        { tournament: '???', placement: '0', prize: '$???' },
        { tournament: '???', placement: '0', prize: '$???' },
        { tournament: '???', placement: '0', prize: '$???' }
      ],
      upcomingMatch: '???'
    },
    {
      id: 2,
      game: 'VALORANT',
      rank: '#?',
      image: 'https://i.imgur.com/Jz82nly.png',
      players: [
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { adr: '0', earnings: '0', hs: '0%' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { adr: '0', earnings: '0', hs: '0%' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { adr: '0', earnings: '0', hs: '0%' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { adr: '0', earnings: '0', hs: '0%' }
        },
        { 
          name: 'AG ???', 
          role: '???', 
          country: 'NA',
          image: 'https://i.imgur.com/2ciq90X.png',
          stats: { adr: '0', earnings: '0', hs: '0%' }
        },
      ],
      recentResults: [
        { tournament: '???', placement: '0', prize: '$???' },
        { tournament: '???', placement: '0', prize: '$???' },
        { tournament: '???', placement: '0', prize: '$???' }
      ],
      upcomingMatch: '???'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sword className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-5xl font-bold">
              Competitive <span className="text-red-500">Teams</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our elite competitive rosters competing at the highest level in professional esports tournaments worldwide
          </p>
        </div>
      </section>

      {/* Teams Detailed View */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {competitiveTeams.map((team) => (
              <div key={team.id} className="bg-gray-900 rounded-2xl overflow-hidden">
                {/* Team Header */}
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${team.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                          {team.rank}
                        </span>
                        <div className="flex items-center text-yellow-400">
                          <Trophy className="h-5 w-5 mr-2" />
                          <span className="text-sm">Active Champions</span>
                        </div>
                      </div>
                      <h2 className="text-4xl font-bold text-white mb-2">{team.game}</h2>
                      <div className="flex items-center text-gray-300">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{team.players.length} Professional Players</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Players Grid */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Active Roster</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
                    {team.players.map((player, index) => (
                      <div key={index} className="bg-black rounded-lg p-4 text-center hover:bg-gray-800 transition-colors duration-300">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h4 className="text-white font-bold mb-1">{player.name}</h4>
                        <p className="text-red-400 text-sm mb-2">{player.role}</p>
                        <p className="text-gray-400 text-xs mb-3">{player.country}</p>
                        
                        <div className="space-y-1 text-xs">
                          {Object.entries(player.stats).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-400 uppercase">{key}:</span>
                              <span className="text-white font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Team Stats & Results */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Results */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-6">Recent Results</h4>
                      <div className="space-y-4">
                        {team.recentResults.map((result, index) => (
                          <div key={index} className="bg-black rounded-lg p-4 flex items-center justify-between">
                            <div>
                              <h5 className="text-white font-semibold">{result.tournament}</h5>
                              <p className="text-gray-400 text-sm">Prize: {result.prize}</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                              result.placement === '1st' ? 'bg-yellow-600 text-white' :
                              result.placement === '2nd' ? 'bg-gray-400 text-white' :
                              result.placement === '3rd' ? 'bg-orange-600 text-white' :
                              'bg-gray-600 text-white'
                            }`}>
                              {result.placement}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming Match */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-6">Next Event</h4>
                      <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-6">
                        <div className="flex items-center text-red-400 mb-3">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span className="font-semibold">Major 3</span>
                        </div>
                        <p className="text-white text-lg font-semibold mb-4">{team.upcomingMatch}</p>
                        <button className="animated-button bg-red-600 text-white px-6 py-2 rounded-lg font-semibold w-full">
                          Set Reminder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Competitive Performance</h2>
            <p className="text-gray-400 text-lg">Our teams' achievements across all competitive titles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Tournament Wins</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Prize Money</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">x</div>
              <div className="text-gray-400">Match Victories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitivePage;