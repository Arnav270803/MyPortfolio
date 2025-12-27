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


{/*--------------------------------------------------------------day-4-------------------------------------------------------------------- */}

          {/* Day-4 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-4
            </div>

            <div className={goalItemClasses}>
              • Preparing Assessment for flowbit ai - haven't able to complete ,I am not familier with the technologies that they were asking.
            </div>      
                
            <div className={goalItemClasses}>
              • Watch (The Founder) - movie and eat junk (intentional decision)
            </div>  

            <div className={goalItemClasses}>
              • took a good 7hr sleep 
            </div>
            <div className={goalItemClasses}>
              • Gave Tuning Test for Js and Ts  
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
                <p>- complete assessment ,</p>
                <p>-- Aptitude (Quant)  ,</p>
                <p>-  Dsa specific for tcs practice. ,</p>

              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/A.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">6</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>



{/*--------------------------------------------------------------day-5-------------------------------------------------------------------- */}

          {/* Day-5 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-5
            </div>

            <div className={goalItemClasses}>
              • placement drive attended .
            </div>      
                
            <div className={goalItemClasses}>
              • travelling panchkula 
            </div>  

            <div className={goalItemClasses}>
              • 2.5hr workout seddion bcz next few days i'll be unable to so.
            </div>
            <div className={goalItemClasses}>
              • Practice Aptitude Extensively
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
                <p>- give tuning dsa test ,</p>
                <p>- travel to panchkula  ,</p>
                <p>- extensive aptitude practice ( for tcs) ,</p>
               <p>- Take a good sleep</p> 

              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/WSR.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
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






{/*--------------------------------------------------------------day-6-------------------------------------------------------------------- */}

          {/* Day-6 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-6
            </div>

            <div className={goalItemClasses}>
              • Taking a good rest because haven't took a proper sleep since 2 days 
            </div>      
                
            <div className={goalItemClasses}>
              • filling off campus role for Development and AI 
            </div>  

            <div className={goalItemClasses}>
              • Aptitude Practice 
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
                <p>- - just revise all these topics once , and relax</p>
                <p>- extensive aptitude practice ( for tcs) ,</p>
               <p>- Take a good sleep</p> 

              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/todo.jpg"
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






          



{/*--------------------------------------------------------------day-7-------------------------------------------------------------------- */}

          {/* Day-7 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-7
            </div>

            <div className={goalItemClasses}>
              • 
            </div>      
                
            <div className={goalItemClasses}>
              • DSA practice  PYQ for TCS
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
                <p>- Today's is completely focused on TCS PYQ DSA problems , Although they are easy so i am just going to revise all</p>


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
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>






          {/*--------------------------------------------------------------day-8-------------------------------------------------------------------- */}

          {/* Day-8 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-8
            </div>

            <div className={goalItemClasses}>
              - get a basic understanding on How LangChain Works 
            </div>      
                
            <div className={goalItemClasses}>
              • Do some DSA problems
            </div>  

            <div className={goalItemClasses}>
              • Restart your daily structure with new routine 
            </div>
            <div className={goalItemClasses}>
              •  Try to complete your Vynix (It's Been So Long ).
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
                href="https://x.com/Bokinsha/status/1989568655903060044" 
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
                <p>- get a basic understanding on How LangChain Works </p>
                <p>- 4-5 Good DSA Problems </p>
               <p>- Try to complete your Vynix (It's Been So Long ).</p> 

              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/G5xeIAhbkAIe0ZS.jpg"
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
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
              
            </div>

            <div className={`relative w-full lg:w-[48%] xl:w-[45%] rounded-lg sm:rounded-xl p-3 sm:p-4 border
              ${isDark 
                ? 'bg-gray-900/50 border-gray-800 shadow-lg' 
                : 'bg-white border-gray-200 shadow-md'
              }`}
            >
              {/* X Logo - Top Right */}
              <a 
                href="https://x.com/Bokinsha/status/1989609205289082925" 
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
                <p>- I love working on sunday on my projects  .😌</p>


              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/Laptop.jpg"
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
                  <span className="text-xs sm:text-sm">6</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
              
            </div>


            {/* Add more cards here - they'll wrap automatically */}
            
          </div>






{/*--------------------------------------------------------------day-9-------------------------------------------------------------------- */}

          {/* Day-9 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-9
            </div>

            <div className={goalItemClasses}>
              • 2 dsa session (2 hour each)
            </div>      
                
            <div className={goalItemClasses}>
              • Aptitude (solves 2 sections from quant)
            </div>  

            <div className={goalItemClasses}>
              • Travel Back to flat (Near Collage )
            </div>  

            <div className={goalItemClasses}>
              • UFC Islam Main event - must watch
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
                href="https://x.com/Bokinsha/status/1989999900462063829" 
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
                <p>- dsa ( 2*2 deep hour sessions ) </p>
                <p>- Aptitude (solves 2 sections from quant) </p>
                <p>- vynix  (understand the frontend makes the backend llm connect and testing  ).- dsa ( 2*2 deep hour sessions ) </p>




              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1  </span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




{/*--------------------------------------------------------------day-10-------------------------------------------------------------------- */}

          {/* Day-10 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-10
            </div>

            <div className={goalItemClasses}>
              • Complete Comuter Network 100%
            </div>      
                
            <div className={goalItemClasses}>
              • Aptitude (solves 2 sections from quant)
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
                href="https://x.com/Bokinsha/status/1990402925823164819" 
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
                <p>- Prepare for Computer Network Exam  </p>
                <p>- Workout .</p>
                <p>- Had no time left to do anything else</p>





              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1  </span>
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





          {/*--------------------------------------------------------------day-11-------------------------------------------------------------------- */}

          {/* Day-11 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-11
            </div>

            <div className={goalItemClasses}>
              • Give Computer Networks Exam
            </div>      
                
            <div className={goalItemClasses}>
              • Boxing Sparring Session today 
            </div>  

            <div className={goalItemClasses}>
              • Prepare for Compiler Vision exam 
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
                href="https://x.com/Bokinsha/status/1990648069776630130" 
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
                <p>- Give Computer Networks Exam </p>
                <p>- Sql and DSA problem solving session </p>
               <p>- Prepare for the Compiler Design Exam</p> 

              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/fq.jpg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





          {/*--------------------------------------------------------------day-12-------------------------------------------------------------------- */}

          {/* Day-12 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-12
            </div>

            <div className={goalItemClasses}>
              • Attend hyundai Autoever Placement (cleared 2 round but out in 3rd one )
            </div>      
                
            <div className={goalItemClasses}>
              • Prepare for computer vision Exam 
            </div>  

            <div className={goalItemClasses}>
              • 1-2 Dsa Problems  
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
                href="https://x.com/Bokinsha/status/1991184269277024765" 
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
                <p>- Attend Hyundai AutoEver Placement Drive  </p>
                <p>- Daily Blog Update  </p>
                <p>- 1-2 dsa problems</p>





              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"> </span>
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




          {/*--------------------------------------------------------------day-13-------------------------------------------------------------------- */}

          {/* Day-13 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-13
            </div>

            <div className={goalItemClasses}>
              • Give Computer Vision Exam
            </div>      
                
            <div className={goalItemClasses}>
              • Back Workout 
            </div>  

            <div className={goalItemClasses}>
              • Watch the bear season-4 
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
                href="https://x.com/Bokinsha/status/1991376752703393998" 
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
                <p>- Give Computer Vision exam . </p>
                <p>- Workout (back)💪🏻</p>
               <p>- 4hr DSA and Sql session.</p> 

              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">6</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>



                    {/*--------------------------------------------------------------day-14-------------------------------------------------------------------- */}

          {/* Day-14 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-14
            </div>

            <div className={goalItemClasses}>
              •DSA 4-5 Problems
            </div>      
                
            <div className={goalItemClasses}>
              • 4-5 SQL problems 
            </div>  

            <div className={goalItemClasses}>
              • Back Workout
            </div>

              <div className={goalItemClasses}>
              • Update Blog
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
                href="https://x.com/Bokinsha/status/1991763232516940163" 
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
                <p>- Give Computer Networks Exam </p>
                <p>- Sql and DSA problem solving session </p>
               <p>- Prepare for the Compiler Design Exam</p> 

              </div>



              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">7</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




                    {/*--------------------------------------------------------------day-15-------------------------------------------------------------------- */}

          {/* Day-15 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-15
            </div>

            <div className={goalItemClasses}>
              •SQL leetcode Practice 
            </div>      
                
            <div className={goalItemClasses}>
              • Workout 
            </div>  

            <div className={goalItemClasses}>
              • Update Portfolio Blog 
            </div>

              <div className={goalItemClasses}>
              • - work on vynix and try to make it work ..🥸.
            </div>

              <div className={goalItemClasses}>
              • 3 codeforces and 3 leetcode dsa problems 

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
                href="https://x.com/Bokinsha/status/1992092774473380123" 
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
                <p>- Codeforces (3 problems) + Leetcode( 3 problems )</p>
                <p>- Aptitude practice ( Quantitative) </p>
               <p>- 4-5 sql problems .</p> 
               <p>- Workout</p> 
               <p>- work on vynix and try to make it work ..🥸.</p> 


              </div>



              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





                    {/*--------------------------------------------------------------day-16-------------------------------------------------------------------- */}

          {/* Day-16 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-16
            </div>

            <div className={goalItemClasses}>
              • DSA (3*3 leetcode + codeforces ) 
            </div>      
                
            <div className={goalItemClasses}>
              • Aptitude Practice 
            </div>  

            <div className={goalItemClasses}>
              • - Business Intelligence Exam Prep.

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
                href="https://x.com/Bokinsha/status/1992492224463110571" 
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
                <p>- Dsa 3*3 problems on codeforces and leetcode </p>
                <p>- Aptitude practice in Time constraints </p>
               <p>- Business Intelligence Exam Prep..</p> 
               <p>- vynix - lot's of bugs fixing.</p> 

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
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>



                   {/*--------------------------------------------------------------day-17-------------------------------------------------------------------- */}

          {/* Day-16 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-17
            </div>

            <div className={goalItemClasses}>
              • DSA (3+3) leetcode + codeforces 
            </div>      
                
            <div className={goalItemClasses}>
              • Give Business Intelligence Exam
            </div>  

            <div className={goalItemClasses}>
              • Workout ( Biceps and triceps)
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
                href="https://x.com/Bokinsha/status/1992838997908046304" 
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
                <p>- Give Business Intelligence exam </p>
                <p>- Workout ( Biceps and triceps) </p>
               <p>- Prepare for the Compiler design exam</p> 
               <p>- 3+3 dsa on Codeforces and leetcode .</p> 
               <p> - update blog at http://hayarnav.xyz</p>

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



{/*--------------------------------------------------------------day-18-------------------------------------------------------------------- */}

          {/* Day-16 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-18
            </div>

            <div className={goalItemClasses}>
              • Workout 
            </div>      
                
            <div className={goalItemClasses}>
              • Compiler Design And Routing & Switching Exam Prep  
            </div>  

            <div className={goalItemClasses}>
              • 3+3 DSA in Codeforces and Leetcode 

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
                href="https://x.com/Bokinsha/status/1993331566257619348" 
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
                <p>- Workout </p>
                <p>- Compiler Design & Routing and Switching Exam Prep  </p>
               <p>- Dsa 3 (Leetcode  + Codeforces) .</p> 
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





{/*--------------------------------------------------------------day-19-------------------------------------------------------------------- */}

          {/* Day-19 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-19 (13-14hr work day)
            </div>

            <div className={goalItemClasses}>
              • Complete Routing and switching Prepration 
            </div>      
                
            <div className={goalItemClasses}>
              • Prepare Unit-2 for compiler design 
            </div>  

            <div className={goalItemClasses}>
              • 3 + 3 codeforces and leetcode questions 

            </div>
            <div className={goalItemClasses}>
              • Workout
            </div>
            <div className={goalItemClasses}>
              • Working on adding chatbot to my portfolio http://hayarnav.xyz
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
                href="https://x.com/Bokinsha/status/1993562037386105075" 
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
                <p>-Complete Prep for Routing And Switching Exam </p>
                <p>- Prepare 2 Unit for Compiler Design </p>
               <p>- 3*3 Dsa on both platform Codeforces , Leetcode</p> 
               <p>- workout </p>
               <p>- Working on adding chatbot to my portfolio http://hayarnav.xyz</p>
              </div>



              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>






          {/*--------------------------------------------------------------day-20-------------------------------------------------------------------- */}

          {/* Day-20 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-20
            </div>

            <div className={goalItemClasses}>
              • Give Godaddy Assessment 
            </div>      
                
            <div className={goalItemClasses}>
              • - Give Routing & Switching Exam after assessment 

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
                href="https://x.com/Bokinsha/status/1994093591837479417" 
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
                <p>- Give GoDaddy Assessment .</p>
               <p>- Give Routing & Switching Exam </p> 
               <p>- Update Portfolio Blog </p>
               <p>- Understand Compiler Design</p>
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
                  <span className="text-xs sm:text-sm">8</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>






                    {/*--------------------------------------------------------------day-21-------------------------------------------------------------------- */}

          {/* Day-21 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-21
            </div>

            <div className={goalItemClasses}>
              • Attend JOSH Technology placement drive 
            </div>      
                
            <div className={goalItemClasses}>
              • Prepare for Compiler Design Exam (Final Prepration).
            </div>  
            <div className={goalItemClasses}>
              • Update daily blog at hayarnav.xyz
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
                href="https://x.com/Bokinsha/status/1994373949619319267" 
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
                <p>- Attend Placement Drive For Josh Technology for Software Developer role </p>
               <p>- Prepare for Compiler Design exam </p> 
               <p>- Update daily blog at <span className='text-blue-500'>http://hayarnav.xyz</span> </p>
              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




                    {/*--------------------------------------------------------------day-22-------------------------------------------------------------------- */}

          {/* Day-21 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-22
            </div>

            <div className={goalItemClasses}>
              • Give last exam of Compiler design  
            </div>      
                
            <div className={goalItemClasses}>
              • Take a good sleep (much needed) .
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
                href="https://x.com/Bokinsha/status/1994622491726393474" 
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
                <p>- final preparation and give my last Compiler Design exam of my last semester.</p>
               <p>- workout  </p> 
               <p>- Take a good sleep (much needed) .</p>
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
                  <span className="text-xs sm:text-sm">4</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>







                   {/*--------------------------------------------------------------day-23-------------------------------------------------------------------- */}

          {/* Day-23 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-23
            </div>

            <div className={goalItemClasses}>
              • Exam is over and i have took a good rest which is a coverup of wasting a day to be honest
            </div>      
                
            <div className={goalItemClasses}>
              •  Solve 3+2+2 of Leetcode SQL , Codeforces , leetcode DSA. 
            </div>  

            <div className={goalItemClasses}>
              • Listen to podcast of elon musk and nikhil kamath 
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
                href="https://x.com/Bokinsha/status/1995139149595377690" 
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
                <p>Exam is over and i have took a good rest which is a coverup of wasting a day to be honest  </p>
                <p>- Solve 3+2+2 of Leetcode SQL , Codeforces , leetcode DSA. </p>
               <p>- Listen to this</p> 

              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/pp.png"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




          {/*--------------------------------------------------------------day-24-------------------------------------------------------------------- */}

          {/* Day-24 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-24
            </div>

            <div className={goalItemClasses}>
              • Attended placement at HRS Groups (7 hour waiting just for 5 min interview)  
            </div>      
                
            <div className={goalItemClasses}>
              • Attend eazyDiner Test
            </div>  

            <div className={goalItemClasses}>
              • Take a good sleep
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
                href="https://x.com/Bokinsha/status/1995535659214454979" 
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
                <p>- attend HRS Groups placement drive(8hr drive for 5 min hr interview) </p>
               <p>- Give easydiner  test . </p> 
               <p>- start building assessment in python and flask (24 hr deadline) 💀.</p>
               <p>(Sleep in past 34hr - 3hr ) .</p>
               <p>( Don't take this as a complaint i am enjoying it)</p>
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
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>



          {/*--------------------------------------------------------------day-25-------------------------------------------------------------------- */}

          {/* Day-25 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-25
            </div>

            <div className={goalItemClasses}>
              • Give EazyDiner Frontend interview (Selected for the next round)
            </div>      
                
            <div className={goalItemClasses}>
              • 3+3 leetcode & codeforces
            </div>  

            <div className={goalItemClasses}>
              • Take a good sleep
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
                href="https://x.com/Bokinsha/status/1995986396323221917" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work done</p>
                <p>- give an interview for the frontend role </p>
               <p>- 3+3 leet code and codeforces problem solving </p> 

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
                  <span className="text-xs sm:text-sm">6</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




        {/*--------------------------------------------------------------day-26-------------------------------------------------------------------- */}

          {/* Day-26 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-26
            </div>

            <div className={goalItemClasses}>
              • Complete revision of react  
            </div>      
                
            <div className={goalItemClasses}>
              • Complete JavaScript Revision for interview
            </div>  

            <div className={goalItemClasses}>
              • 100 pushups , squats and core (not able to complete 200 ).
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
                href="https://x.com/Bokinsha/status/1996100219881320942" 
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
                <p>- complete revision of react interview prep.  </p>
               <p>- Javascript revision for interview  </p> 
               <p>- Oops revision for the interview</p>
               <p>- Build a basic to do list under 20-25 min . Revision </p>
               <p>- 200 pushups , squats and core + 3min *4 shadow boxing round (bory workout for today).</p>
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
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





          {/*--------------------------------------------------------------day-27-------------------------------------------------------------------- */}

          {/* Day-27 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-27
            </div>

            <div className={goalItemClasses}>
              •7+ dsa problem solved 
            </div>      
                
            <div className={goalItemClasses}>
              • Take a good sleep 
            </div>  

            <div className={goalItemClasses}>
              • 3 hr chess grind 
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
                href="https://x.com/Bokinsha/status/1996663283785539840" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's completed work </p>
                <p>- Solved 7+ dsa problems  </p>
               <p>- took a good sleep (needed)   </p> 
               <p>- 3hr chess grind</p>

              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>



          
          {/*--------------------------------------------------------------day-29-------------------------------------------------------------------- */}

          {/* Day-29 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-29
            </div>

            <div className={goalItemClasses}>
              •4 dsa problem 
            </div>      
                
            <div className={goalItemClasses}>
              • travel and wasted time alot today (not proud of )
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
                href="https://x.com/Bokinsha/status/1997020006354506064" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's completed work </p>
                <p>- DSA 4-6 problems .   </p>
               <p>- Travel and wasted time (mad at myself to be honest)</p> 
              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">8</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">13</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





          {/*--------------------------------------------------------------day-29-------------------------------------------------------------------- */}

          {/* Day-29 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-29
            </div>

            <div className={goalItemClasses}>
              •- 3+3 codeforces + leetcode 

            </div>      
                
            <div className={goalItemClasses}>
              • Oops (just small revision ).

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
                href="https://x.com/Bokinsha/status/1997576289268760830" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
                <p>- 3+3 codeforces + leetcode  </p>
               <p>- Oops (just small revision ). </p> 
               <p>- 3  SQL leetcode  </p>
               <p>- Vynix (make the backend working again (fix bugs)).</p>
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
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>








          {/*--------------------------------------------------------------day-30-------------------------------------------------------------------- */}

          {/* Day-30 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-30
            </div>

            <div className={goalItemClasses}>
              •3+3+3 codeforces , leetcode , sql 
            </div>      
                
            <div className={goalItemClasses}>
              • UPDATE BLOG
            </div>  

            <div className={goalItemClasses}>
              • work on vynix backend bugs    
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
                href="https://x.com/Bokinsha/status/1997951804601258414" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
                <p>--3+3 codeforces and leetcode</p>
               <p>- update blog at <span className='text-blue-400'>hayarnav.xyz</span> </p> 
               <p>- 4hr session (work on vynix backend bugs )  .</p>
               <p>- express and javascript (backend interview practice ) </p>
               <p>- if time left (work on my chat bot ).</p>
              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>




  {/*--------------------------------------------------------------day-31-------------------------------------------------------------------- */}

          {/* Day-31 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-31
            </div>

            <div className={goalItemClasses}>
              • Vynix debugging 
            </div>      
                
            <div className={goalItemClasses}>
              •   3+3+3 leetcode , codeforces, sql
            </div>  

            <div className={goalItemClasses}>
              • (If time left) practice backend interview problems for placements.
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
                href="https://x.com/Bokinsha/status/1998370338137325681" 
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
                <p>- Work on vynix backend(debugging ) </p>
                <p>- build a working chat agent for  </p>
               <p>- 3+3+3 leetcode , codeforces, sql</p> 
               <p>-(If time left) practice backend interview problems for placements.</p>
              </div>

              {/* Post Image */}
              <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src="/appa.jpeg"
                  alt="Deep Work"
                  className="w-full object-cover"
                />
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">8</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">12</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





                    {/*--------------------------------------------------------------day-32-------------------------------------------------------------------- */}

          {/* Day-32 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-32
            </div>

            <div className={goalItemClasses}>
              • Start Building chat agent for My Portfolio 
            </div>      
                
            <div className={goalItemClasses}>
              • 3+2+3 leetcode, codeforces, sql 
            </div>  

            <div className={goalItemClasses}>
              • Oops revision  
            </div>  

            <div className={goalItemClasses}>
             • if time left solve more dsa problems.
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
                href="https://x.com/Bokinsha/status/1998729957103525903" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
                <p>- work on  <span className='text-blue-400'>hayarnav.xyz</span> portfolio bot </p>
               <p>- 3+2+3 leetcode, codeforces, sql  </p> 
               <p>- Oops revision </p>
               <p>- express and javascript (backend interview practice ) </p>
               <p>- if time left solve more dsa problems.</p>
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
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





                    {/*--------------------------------------------------------------day-33-------------------------------------------------------------------- */}

          {/* Day-33 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-33
            </div>

            <div className={goalItemClasses}>
              • complete portfolio first iteration 
            </div>      
                
            <div className={goalItemClasses}>
              • 8 problem solve / revise on leetcode for tomorrow placement 
            </div>  

            <div className={goalItemClasses}>
              • give assessment.

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
                href="https://x.com/Bokinsha/status/1999177650531893279" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
               <p>- Complete Personal Agent For <span className='text-blue-400'>hayarnav.xyz</span>   </p> 
               <p>- 15 leetcode problem revision for tomorrow placement drive </p>
               <p>- give assessment.</p>
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
                  <span className="text-xs sm:text-sm">6</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>






                    {/*--------------------------------------------------------------day-34-------------------------------------------------------------------- */}

          {/* Day-34 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-34
            </div>

            <div className={goalItemClasses}>
              • 4 DP problems (Not able to complete btw)
            </div>      
                
            <div className={goalItemClasses}>
              • 3 sql problems
            </div>  

            <div className={goalItemClasses}>
              • Oops practice 

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
                href="https://x.com/Bokinsha/status/1999414269583249751" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
               <p>- Add leetcode and Codeforces link to <span className='text-blue-400'>hayarnav.xyz</span>   </p> 
               <p>- 4 DP leetcode problem , 2 codeforces 1000-1500 problem </p>
               <p>- SQL 3 problems (leetcode)</p>
               <p>- Oops practice Extensively . (solve tough MCQ Questions ).</p>
              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">9</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





{/*--------------------------------------------------------------day-35-------------------------------------------------------------------- */}

          {/* Day-35 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-35
            </div>

            <div className={goalItemClasses}>
              • Complete the assessment given by incubate (crucks: creating a dashboard using TDD method with authentication).
            </div>      
                
            <div className={goalItemClasses}>
              •  some leetcode and codeforces dsa problems .
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
                href="https://x.com/Bokinsha/status/1999717006027948463" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
               <p>- Complete the assessment given by incubate (crucks: creating a dashboard using TDD method with authentication). </p>
               <p>- some leetcode and codeforces dsa problems .</p>
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
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





{/*--------------------------------------------------------------day-36-------------------------------------------------------------------- */}

          {/* Day-36 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-36
            </div>

            <div className={goalItemClasses}>
              • complete the huge assessment by incubate.

            </div>      
                
            <div className={goalItemClasses}>
              •  6 leetcode problems 
            </div>  
             <div className={goalItemClasses}>
              •  3 sql problems 
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
                href="https://x.com/Bokinsha/status/2000254597068357759" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
               <p>- complete the huge assessment by incubate. </p>
               <p>- 4-8 leetcode problems .</p>
               <p>- 2-4 sql questions</p>
              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
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





{/*--------------------------------------------------------------day-37-------------------------------------------------------------------- */}

          {/* Day-37 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-37
            </div>

            <div className={goalItemClasses}>
              • Give last External VIVA 

            </div>      
                
            <div className={goalItemClasses}>
              •  6 leetcode problems (Revision)
            </div>  
             <div className={goalItemClasses}>
              •  140*3 (pushups , Lunges , core ) - Don't have time to go to the gym.

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
                href="https://x.com/Bokinsha/status/2000658078962970656" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work (Completed) </p>
               <p>- Give Last Year Project External VIVA  </p>
               <p>- DSA 8 Problems (Revisited).</p>
               <p>- 140*3 (pushups , Lunges , core ) - Don't have time to go to the gym.</p>
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
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





{/*--------------------------------------------------------------day-38-------------------------------------------------------------------- */}

          {/* Day-38 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-38
            </div>

            <div className={goalItemClasses}>
              • Attend HandWritten Adssessment in Varank (Bad experience , everybody is cheating )
            </div>      
                
            <div className={goalItemClasses}>
              • Last Computer Vision External 
            </div>  
             <div className={goalItemClasses}>
              •  1 AI Interview 👍🏻.

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
                href="https://x.com/Bokinsha/status/2001026584514584611" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's Completed work (Completed) </p>
               <p>- give hand written assessment. </p>
               <p>- Last computer vision Practical's </p>
               <p>- 1 interview 👍🏻.</p>
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
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>








          {/*--------------------------------------------------------------day-39-------------------------------------------------------------------- */}

          {/* Day-39 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-39
            </div>

            <div className={goalItemClasses}>
              • Update Portfolio http://hayarnav.xyz
            </div>      
                
            <div className={goalItemClasses}>
              • solved 5-7 leetcode problems 
            </div>  
             <div className={goalItemClasses}>
              •  Oops revision 
            </div>  
            <div className={goalItemClasses}>
              •  Project Corrections and Understanding Incubte assessment 
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
                href="https://x.com/Bokinsha/status/2001195107043958804" 
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
                <p className="font-semibold mb-1 sm:mb-2">Today's work </p>
               <p>- Update Portfolio http://hayarnav.xyz </p>
               <p>- solve 3 new problems and 10 old dsa leetcode problems .</p>
               <p>- DBMS and OOPS revision for interview </p>
               <p>- Project correction & understanding for incubate .</p>
               <p>- (if time left) - upload backend for portfolio AI Agent. </p>

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



          {/*--------------------------------------------------------------day-40-------------------------------------------------------------------- */}

          {/* Day-39 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-40
            </div>

            <div className={goalItemClasses}>
              • Null
            </div>      


          </div>

         



   
          {/*--------------------------------------------------------------day-41-------------------------------------------------------------------- */}

          {/* Day-41 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-41
            </div>

            <div className={goalItemClasses}>
              • DSA 4-6 old problem revision 
            </div>      
                
            <div className={goalItemClasses}>
              • In-depth Oops concept practice
            </div>  
             <div className={goalItemClasses}>
              •  Some SQL Practice (NOT COMPLETED)
            </div>  
            <div className={goalItemClasses}>
              •  Work on Projects  
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
                href="https://x.com/Bokinsha/status/2001906544175386938" 
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
                <p className="font-semibold mb-1 sm:mb-2">Work to cover today</p>
               <p>- intense javascript practice for 6hr (vynix project), assessment .</p>
               <p>- dsa 4 new problems 6 old problems .</p>
               <p>- SQL 3-5 problem solving .</p>
               <p>- 1hr oops concepts ..💪🏻</p>

              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">3</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">5</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>





          {/*--------------------------------------------------------------day-42-------------------------------------------------------------------- */}

          {/* Day-42 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-42
            </div>

            <div className={goalItemClasses}>
              • Oops In-depth Concepts understanding 
            </div>      
                
            <div className={goalItemClasses}>
              • Dbms revision 
            </div>  
             <div className={goalItemClasses}>
              •  DSA Problem Solving 
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
                href="https://x.com/Bokinsha/status/2003408863119442270" 
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
                <p className="font-semibold mb-1 sm:mb-2">Work to cover today</p>
               <p>- Oops In-depth Practice </p>
               <p>- DBMS revision </p>
               <p>- Update Winter ARC blog at hayarnav.xyz</p>
               <p>- DSA Problem Revision . 8-10</p>

              </div>


              {/* Engagement Buttons */}
              <div className="flex items-center justify-around mt-3 sm:mt-4 pt-2 border-t border-gray-700/30">
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">1</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Repeat2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm"></span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">6</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>


          




                    {/*--------------------------------------------------------------day-43-------------------------------------------------------------------- */}

          {/* Day-43 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-43
            </div>

            <div className={goalItemClasses}>
              10 dsa problems 
            </div>     
            <div className={goalItemClasses}>
              • Update blog at hayarnav.xyz
            </div>  
             <div className={goalItemClasses}>
              •  DBMS quick revision  (TBH wasted my leftover time & not proud of that )
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
                href="https://x.com/Bokinsha/status/2003891187070185674" 
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
               <p>DEEP WORK  </p>
               <p>- 10 DSA problems Revisited </p>
               <p>- Update Blog at http://hayarnav.xyz</p>
               <p>- DBMS Quick Revision </p>
               <p>FUN TIME</p>
               <p>- Work on Vynix , Try to stream successfully from backend </p>
               <p>- Find and Apply for Internships (1hr)</p>

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
                  <span className="text-xs sm:text-sm">2</span>
                </button>
                
                <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Share size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Add more cards here - they'll wrap automatically */}
            
          </div>






                    {/*--------------------------------------------------------------day-44-------------------------------------------------------------------- */}

          {/* Day-44 Section */}
          <div className={`border-t mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 ${isDark ? 'border-zinc-600' : 'border-neutral-400'}`}>
            <div 
              className={`font-bold text-lg sm:text-xl md:text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Day-44
            </div>

            <div className={goalItemClasses}>
              DSA and SQL
            </div>     
            <div className={goalItemClasses}>
              • Update blog at hayarnav.xyz
            </div>  
             <div className={goalItemClasses}>
              •  Worked extensively on Vynix streaming 
            </div>  
            <div className={goalItemClasses}>
              •  Oops and dbms revision
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
                href="https://x.com/Bokinsha/status/2003891187070185674" 
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
               <p>DEEP WORK  </p>
               <p>- Leetcode DSA and SQL </p>
               <p>- Update Blog at http://hayarnav.xyz</p>
               <p>- Work on Vynix Extensively and try to complete it </p>
               <p>- Oops and DBMS Revisions.</p>

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
                  <span className="text-xs sm:text-sm">2</span>
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