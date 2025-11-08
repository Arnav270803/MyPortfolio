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
    px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md font-semibold 
    text-xs sm:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap
    ${isDark 
      ? 'border border-gray-800/30 text-gray-300 hover:bg-white hover:text-black hover:border-white/50' 
      : 'border border-gray-300/30 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900/50'
    }
  `;

  // Added font-medium, tracking-wide for texture and boldness
  const goalItemClasses = `
    ml-3 sm:ml-6 mt-2 sm:mt-3 text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed 
    font-medium tracking-wide antialiased
    ${isDark ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      
      <div className="min-h-screen">
        {/* Back Button */}
        <div className="mt-6 sm:mt-8 md:mt-10 ml-3 sm:ml-4 md:ml-6">
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
        <div className="mt-6 sm:mt-8 md:mt-12 px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[53vh] rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Winter arc image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex items-center flex-wrap mt-4 sm:mt-6 gap-2">
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
            className={`mt-6 sm:mt-8 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            My Winter Arc
          </div>

          {/* Description - Textured and bolder */}
          <div className={`mt-3 sm:mt-4 text-[9px] sm:text-[10px] md:text-[11px] max-w-2xl 
            font-medium tracking-wide antialiased
            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}> 
            This blog is all about my winter progress and growth content from my twitter.
          </div>

          {/* Date */}
          <div className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg">
            November 6, 2025
          </div>

          {/* Goals Section */}
          <div className={`border-t mt-5 sm:mt-6 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-xl sm:text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Hey, Welcome to my Winter Arc ❄️
            </div>

            <div 
              className={`mt-6 sm:mt-8 md:mt-10 font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
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
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
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
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 pb-8 sm:pb-10">
            {/* Twitter Card */}
            <div className={`relative w-full lg:w-[48%] xl:w-[45%] rounded-lg sm:rounded-xl p-3 sm:p-4 border
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
                className="absolute top-3 right-3 sm:top-4 sm:right-4 hover:opacity-70 transition-opacity"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  stroke="bold"
                  colors={colors.twitter}
                  style={{ width: '18px', height: '18px' }}>
                </lord-icon>
              </a>

              {/* Profile Header */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src="/cropped_circle_image.png" 
                  alt="Profile" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Arnav Sharma
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    @<span className="text-blue-500">Bokinsha</span> · 1h
                  </p>
                </div>
              </div>

              {/* Post Content - Textured and bolder */}
              <div className={`mt-2 sm:mt-3 text-[9px] sm:text-[10px] md:text-[11px]
                font-medium tracking-wide antialiased
                ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                <p className="font-semibold mb-1 sm:mb-2">Today's work</p>
                <p>- give placement test .</p>
                <p>- Start blog</p>
                <p>- dsa ( bit and dp) -2 questions each .</p>
                <p>- Aptitude extensively</p>
              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/Deepwork.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">12</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">8</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">45</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>
          {/*-------------------------------------Day1 and twitter card ends here -------------------------------------------------------------------- */}
       
       
       {/*----------------------------------------------------------------day-2--------------------------------------------------------------------- */}
          {/* Day-2 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-2
            </div>

            <div className={goalItemClasses}>
              • Give Placement Test (going good and then the glitch hits the System).
            </div>      
                
            <div className={goalItemClasses}>
              • Solve 4-5 leetcode problems 
            </div>  

            <div className={goalItemClasses}>
              • Aptitude Practice more then previous days
            </div>

            <div className={goalItemClasses}>
              • take a good sleep , it's been 3 days i haven't sleep properly
            </div>
          </div>




          {/*----------------------------------------------- Twitter Post Section ------------------------------------------------------*/}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 pb-8 sm:pb-10">
            {/* Twitter Card */}
            <div className={`relative w-full lg:w-[48%] xl:w-[45%] rounded-lg sm:rounded-xl p-3 sm:p-4 border
              ${isDark 
                ? 'bg-gray-900/50 border-gray-800 shadow-lg' 
                : 'bg-white border-gray-200 shadow-md'
              }`}
            >
              {/* X Logo - Top Right */}
              <a 
                href="https://x.com/Bokinsha/status/1986774363916665164" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 hover:opacity-70 transition-opacity"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  stroke="bold"
                  colors={colors.twitter}
                  style={{ width: '18px', height: '18px' }}>
                </lord-icon>
              </a>

              {/* Profile Header */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src="/cropped_circle_image.png" 
                  alt="Profile" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Arnav Sharma
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    @<span className="text-blue-500">Bokinsha</span> · 1h
                  </p>
                </div>
              </div>

              {/* Post Content - Textured and bolder */}
              <div className={`mt-2 sm:mt-3 text-[9px] sm:text-[10px] md:text-[11px]
                font-medium tracking-wide antialiased
                ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                <p className="font-semibold mb-1 sm:mb-2">Today's work</p>
                <p>- give a placement exam .</p>
                <p>- Dsa : leetcode daily + dp 2 problem + 2 string problem</p>
                <p>- project work : update day 2 blog + vynix ( connect the backend architecture with frontend ). </p>
              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/Quote.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




{/*-------------------------------------------------------------day-3--------------------------------------------------------------------- */}


          {/* Day-3 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-3
            </div>

            <div className={goalItemClasses}>
              • Preparing Assessment for flowbit ai (whole day went there)
            </div>      
                
            <div className={goalItemClasses}>
              • Must did workout
            </div>  

            <div className={goalItemClasses}>
              • take good sleep
            </div>

          </div>




          {/*----------------------------------------------- Twitter Post Section ------------------------------------------------------*/}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 pb-8 sm:pb-10">
            {/* Twitter Card */}
            <div className={`relative w-full lg:w-[48%] xl:w-[45%] rounded-lg sm:rounded-xl p-3 sm:p-4 border
              ${isDark 
                ? 'bg-gray-900/50 border-gray-800 shadow-lg' 
                : 'bg-white border-gray-200 shadow-md'
              }`}
            >
              {/* X Logo - Top Right */}
              <a 
                href="https://x.com/Bokinsha/status/1987174368359899584" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 hover:opacity-70 transition-opacity"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  stroke="bold"
                  colors={colors.twitter}
                  style={{ width: '18px', height: '18px' }}>
                </lord-icon>
              </a>

              {/* Profile Header */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src="/cropped_circle_image.png" 
                  alt="Profile" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Arnav Sharma
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    @<span className="text-blue-500">Bokinsha</span> · 1h
                  </p>
                </div>
              </div>

              {/* Post Content - Textured and bolder */}
              <div className={`mt-2 sm:mt-3 text-[9px] sm:text-[10px] md:text-[11px]
                font-medium tracking-wide antialiased
                ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                <p className="font-semibold mb-1 sm:mb-2">Today's work</p>
                <p>- Company Assessment , Had to create this assessment and showcase it also include AI which is like a bot that generates SQL database in the reply  , deadline 10-11-2025 ,</p>
              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/dashboard.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">4</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>

          
       
        </div>
      </div>
    </>
  )
}

export default WinterArc