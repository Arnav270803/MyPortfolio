import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Repeat2, MessageCircle, Share } from 'lucide-react'

const WinterArc = ({isDark}) => {

  const navigate = useNavigate();

  // Colors for lord-icon
  const colors = {
    twitter: 'primary:#1d9bf0'
  };

  // Helper function for consistent shadow styling
  const getButtonShadow = () => {
    return isDark 
      ? 'inset 0 0 0 1px rgba(75, 85, 99, 0.4), inset 0 2px 4px rgba(0, 0, 0, 0.2)' 
      : 'inset 0 0 0 1px rgba(156, 163, 175, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1)';
  };

  // Common button classes
  const buttonClasses = `
    px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap
    ${isDark 
      ? 'border border-gray-800/30 text-gray-300 hover:bg-white hover:text-black hover:border-white/50' 
      : 'border border-gray-300/30 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900/50'
    }
  `;

  const tagButtonClasses = `
    px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold 
    text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap
    ${isDark 
      ? 'border border-gray-800/30 text-gray-300 hover:bg-white hover:text-black hover:border-white/50' 
      : 'border border-gray-300/30 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900/50'
    }
  `;

  const goalItemClasses = `
    ml-6 mt-3 text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className="min-h-screen">
        {/* Back Button */}
        <div className="mt-10 ml-6">
          <button 
            className={`flex items-center gap-2 ${buttonClasses}`}
            style={{ boxShadow: getButtonShadow() }}
            onClick={() => navigate('/bblog')}
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>blogs</span>
          </button>
        </div>

        {/* Main Content Container */}
        <div className="mt-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="relative w-full h-[40vh] sm:h-[53vh] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Winter arc image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex items-center mt-6 gap-2">
            <button 
              className={tagButtonClasses}
              style={{ boxShadow: getButtonShadow() }}
            >
              Personal Journey
            </button>
            <button 
              className={tagButtonClasses}
              style={{ boxShadow: getButtonShadow() }}
            >
              Winter
            </button>
          </div>

          {/* Title */}
          <div 
            className={`mt-8 font-bold text-3xl sm:text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            My Winter Arc
          </div>

          {/* Description */}
          <div className={`mt-4 text-sm sm:text-base max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}> 
            This blog is all about my winter progress and growth content from my twitter.
          </div>

          {/* Date */}
          <div className="mt-5 text-lg">
            November 6, 2025
          </div>

          {/* Goals Section */}
          <div className={`border-t mt-6 pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-3xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Hey, Welcome to my Winter Arc ❄️
            </div>

            <div 
              className={`mt-10 font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Goals:
            </div>

            <div className={goalItemClasses}>
              • Learn Python | Learn RAG along with Langchain | Build 1-2 AI Agents Completely
            </div>

            <div className={goalItemClasses}>
              • Backend Focused | Complete Vynix Project as a whole
            </div>

            <div className={goalItemClasses}>
              • Get a Placement
            </div>

            <div className={goalItemClasses}>
              • Improve English speaking fluency and accent/certain pronunciation 
            </div>

            <div className={goalItemClasses}>
              • Get to 240+ Twitter Followers
            </div>

            <div className={goalItemClasses}>
              • Get comfortable with - System Design, OOPs, DBMS, Computer Networks, SQL
            </div>
       
            <div className={goalItemClasses}>
              • Daily DSA streak till the end + DP and Graph Along With Complete Neetcode
            </div>
          </div>




{/*---------------------------------------------------day1------------------------------------------------------------------------------- */}
          {/* Day-1 Section */}
          <div className={`border-t mt-10 pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-1
            </div>

            <div className={goalItemClasses}>
              • Give Placement Test (unable to solve any dsa question (dp, 2-d array, bitwise))
            </div>      
                
            <div className={goalItemClasses}>
              • Start blog
            </div>  

            <div className={goalItemClasses}>
              • DSA (bit and dp) - 2 questions each
            </div>

            <div className={goalItemClasses}>
              • Aptitude extensively
            </div>
          </div>


          

          {/*----------------------------------------------- Twitter Post Section ------------------------------------------------------*/}
          <div className="mt-8 flex flex-wrap gap-4 pb-10">
            {/* Twitter Card */}
            <div className={`relative w-full lg:w-[48%] xl:w-[45%] rounded-xl p-4 border
              ${isDark 
                ? 'bg-gray-900/50 border-gray-800 shadow-lg' 
                : 'bg-white border-gray-200 shadow-md'
              }`}
            >
              {/* X Logo - Top Right */}
              <a 
                href="https://x.com/Bokinsha/status/1986362685240582611" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 hover:opacity-70 transition-opacity"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  stroke="bold"
                  colors={colors.twitter}
                  style={{ width: '20px', height: '20px' }}>
                </lord-icon>
              </a>

              {/* Profile Header */}
              <div className="flex items-center gap-3">
                <img 
                  src="/cropped_circle_image.png" 
                  alt="Profile" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Arnav Sharma
                  </h3>
                  <p className="text-sm text-gray-500">
                    @<span className="text-blue-500">Bokinsha</span> · 1h
                  </p>
                </div>
              </div>

              {/* Post Content */}
              <div className={`mt-3 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                <p className="font-semibold mb-2">Today's work</p>
                <p>- give placement test .</p>
                <p>- Start blog</p>
                <p>- dsa ( bit and dp) -2 questions each .</p>
                <p>- Aptitude extensively</p>
              </div>

              {/* Post Image */}
              <div className="mt-3 rounded-xl overflow-hidden">
                <img 
                  src="/Deepwork.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} />
                  <span className="text-sm">12</span>
                </button>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={18} />
                  <span className="text-sm">8</span>
                </button>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                  <span className="text-sm">45</span>
                </button>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={18} />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>
      {/*-------------------------------------Day1 and twitter card ends here -------------------------------------------------------------------- */}
      


        </div>
      </div>
    </>
  )
}

export default WinterArc