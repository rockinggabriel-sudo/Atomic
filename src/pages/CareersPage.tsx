import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, Users, Mail } from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Content Director',
      department: 'Content & Media',
      location: 'Online',
      type: 'Part-time',
      experience: '3+ years',
      description: 'Seeking a skilled Content Director to drive our daily media plans and provide insights of our content',
      requirements: [
        'Oversee content strategy for all Atomic Gaming video projects, including both short-form and long-form content.',
        'Collaborate with internal teams to conceptualize, plan, and execute high-impact content campaigns.',
        'Lead and manage a team of editors, writers, and creative contributors.',
        'Ensure brand consistency across all published content.',
        'Analyze content performance and adjust strategies to optimize reach and engagement.',
        'Stay current with gaming content trends and platform-specific innovations.'
      ],
      responsibilities: [
        'Proven leadership experience in content strategy within esports or gaming.',
        'Expertise in video production, editing, and content ideation.',
        'Understanding of platform-specific content success (YouTube, TikTok, Twitter).',
        'Excellent creative vision and communication skills.',
        'Ability to manage multiple content pipelines under tight deadlines.'
      ]
    },
    {
      id: 2,
      title: 'Roster Director',
      department: 'Roster Management',
      location: 'Online',
      type: 'Part-time',
      experience: '5+ years',
      description: 'Lead our competitive teams as an experienced roster manager / tool. Guide players through strategic development and performance optimization.',
      requirements: [
        'Scout, recruit, and manage competitive Fortnite players.',
        'Monitor player performance and provide support to improve results.',
        'Organize tryouts and track player development metrics.',
        'Coordinate player schedules for events, scrims, and tournaments.',
        'Serve as the liaison between players and executive leadership.'
      ],
      responsibilities: [
        'In-depth knowledge of the Fortnite competitive ecosystem.',
        'Previous experience managing esports players or teams.',
        'Strong communication and conflict-resolution skills.',
        'Ability to handle high-pressure situations professionally.',
        'Familiarity with Fortnite tournament structures and scoring systems.'
      ]
    },
    {
      id: 3,
      title: 'Events Director',
      department: 'Community Marketing',
      location: 'Online',
      type: 'Part-time',
      experience: '2+ years',
      description: 'Create engaging content across multiple platforms to build our brand presence and connect with the gaming community.',
      requirements: [
        'Plan and execute community tournaments, giveaways, and Discord events.',
        'Collaborate with the content and social teams for event promotion.',
        'Drive community engagement across all platforms.',
        'Maintain and moderate Discord and other community platforms.',
        'Track event metrics and report on success and areas of improvement.'
      ],
      responsibilities: [
        'Prior experience organizing and hosting community events.',
        'Strong knowledge of Discord and community management tools.',
        'Creative mindset with an eye for engaging experiences.',
        'Excellent organizational and time-management skills.',
        'Passion for gaming and creating fun, inclusive spaces.'
      ]
    },
    {
      id: 4,
      title: 'General Manager',
      department: 'Operations',
      location: 'Online',
      type: 'Part-time',
      experience: '3+ years',
      description: 'Oversee daily operations of our competitive teams, handling logistics, scheduling, and player support.',
      requirements: [
        'Oversee day-to-day operations across all departments within Atomic Gaming.',
        'Develop internal processes, track KPIs, and implement growth strategies.',
        'Provide guidance and support to department leads.',
        'Handle conflict resolution, team structure, and long-term planning.',
        'Represent Atomic Gaming professionally in all official communications.'
      ],
      responsibilities: [
        'Strong leadership background, preferably in esports or entertainment.',
        'Proven ability to manage teams and coordinate multiple projects.',
        'Exceptional organizational and decision-making skills.',
        'Familiarity with gaming culture and the esports business model.',
        'Strategic thinker with a growth-oriented mindset.'
      ]
    },
    {
      id: 5,
      title: 'Partnership Manager',
      department: 'Brand Partnerships',
      location: 'Online',
      type: 'Part-time',
      experience: '2+ years',
      description: 'Connect and build brand deals with corporations and mutual companies.',
      requirements: [
        'Identify and secure brand partnerships and sponsorship opportunities.',
        'Build and maintain strong relationships with external partners.',
        'Collaborate with leadership to develop partnership proposals and decks.',
        'Track deliverables and ensure sponsor satisfaction.',
        'Represent Atomic Gaming in partnership negotiations and industry events.'
      ],
      responsibilities: [
        'Experience in sales, partnerships, or influencer marketing.',
        'Excellent verbal and written communication skills.',
        'Strong understanding of esports branding and value proposition.',
        'Proficiency in presentation tools such as Google Slides or PowerPoint.',
        'Ability to work independently and meet partnership goals.'
      ]
    },
    {
      id: 6,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Online',
      type: 'Part-time',
      experience: '3+ years',
      description: 'Drive our social media strategy and build our community across all platforms.',
      requirements: [
        'Develop and execute Atomic Gaming’s social content strategy across TikTok, Twitter, and other short-form platforms, aligning with brand tone and audience growth goals.',
        'Create and script engaging short-form content (TikTok, Reels, Shorts), including high-retention intros, strong hooks, and story-driven ideas.',
        'Collaborate with editors, designers, players, and creators to plan, produce, and post multimedia content that drives engagement.',
        'Manage and optimize posting schedules and live coverage of key events while maintaining consistent branding and voice across platforms.',
        'Track analytics and trends, iterating based on performance data to improve engagement, retention, and follower growth.'
      ],
      responsibilities: [
        'Proven experience managing social media platforms (especially TikTok and Twitter) with measurable success in follower growth and engagement.',
        'Strong writing and scripting skills tailored to short-form video, with a deep understanding of hooks, pacing, and watch time.',
        'Proficiency with editing tools and scheduling software, such as CapCut, Premiere, TweetDeck, and platform-native editors.',
        'Thorough knowledge of gaming and esports culture, with the ability to adapt content to resonate with the audience.',
        'Quick, creative, and trend-aware mindset, able to work under tight deadlines in a fast-paced digital environment.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Join <span className="text-red-500">Atomic Gaming</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build your career in esports with one of the leading gaming organizations. We're always looking for talented individuals to join our team.
          </p>
          <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Why Work With Us?</h3>
            <p className="text-gray-300">
              Competitive salaries, comprehensive benefits, flexible work arrangements, and the opportunity to be part of esports history.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg">Discover your next career opportunity</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-red-600/30"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.experience} experience
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {job.description}
                </p>

                <button
                  className="animated-button w-full bg-red-600 text-white py-2 rounded-lg font-semibold text-center"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-gray-400 text-lg">How to join the Atomic Gaming team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Apply Online</h3>
              <p className="text-gray-400">Submit your application through our portal with all required documents.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Initial Review</h3>
              <p className="text-gray-400">Our HR team reviews your application and qualifications.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interview Process</h3>
              <p className="text-gray-400">Multiple rounds of interviews with team members and management.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Welcome Aboard</h3>
              <p className="text-gray-400">Join the team and begin your journey with Atomic Gaming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Don't see a position that fits? Send us your resume anyway - we're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@fratomic.org"
              className="animated-button bg-red-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              contact@fratomic.org
            </a>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-800">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" />{selectedJob.department}</span>
                    <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{selectedJob.location}</span>
                    <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{selectedJob.experience}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Job Description</h3>
                <p className="text-gray-300">{selectedJob.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:contact@fratomic.org"
                  className="animated-button bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex-1 text-center"
                >
                  Apply Now
                </a>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="animated-button border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;