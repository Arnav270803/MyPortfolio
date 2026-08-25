/* My Winter Arc — the daily log, lifted verbatim from the original entries.
   Dates derive from START, so day N is START + (N - 1). */

export const START = '2025-11-06';
export const TOTAL_DAYS = 46;

/* Day 19 is the instrumented example from the design reference — the only day
   carrying a headline, weather, work split and notes. */
export const FEATURED = {
  n: 19,
  headline: '13–14 HR WORK DAY',
  temp: '9°C',
  hours: '05:48 AM — 10:32 PM',
  goals: [
    'Refactored agent memory and tool orchestration',
    'Implemented RAG pipeline with pgvector',
    'Wrote tests & docs for deployment flow',
  ],
  tweet: {
    lines: [
      'Quiet progress > loud noise.',
      'Show up daily, ship consistently, and let the work compound.',
    ],
    tags: '#BuildInPublic #WinterArc',
    replies: 12,
    reposts: 31,
    likes: 142,
  },
  notes:
    'Integrated tool planner with fallbacks. Fixed edge cases in streaming and added evaluation logs.',
};

export const ALLOCATION = [
  { label: 'DSA', pct: 20, fill: 'url(#wa-diag)' },
  { label: 'BUILD', pct: 45, fill: 'url(#wa-diag-cobalt)' },
  { label: 'STUDY', pct: 20, fill: 'url(#wa-dots)' },
  { label: 'APPLY', pct: 15, fill: 'url(#wa-lines)' },
];

export const DAYS = [
  {
    n: 1,
    goals: [
      "Give Placement Test (unable to solve any dsa question (dp, 2-d array, bitwise))",
      "Start blog",
      "DSA (bit and dp) - 2 questions each",
      "Aptitude extensively",
    ],
    tweet: {
      lines: [
        "give placement test .",
        "Start blog",
        "dsa ( bit and dp) -2 questions each .",
        "Aptitude extensively",
      ],
      image: "/Deepwork.jpg",
      replies: 12,
      reposts: 8,
      likes: 45,
    },
  },
  {
    n: 2,
    goals: [
      "Give Placement Test (going good and then the glitch hits the System).",
      "Solve 4-5 leetcode problems",
      "Aptitude Practice more then previous days",
      "take a good sleep , it's been 3 days i haven't sleep properly",
    ],
    tweet: {
      lines: [
        "give a placement exam .",
        "Dsa : leetcode daily + dp 2 problem + 2 string problem",
        "project work : update day 2 blog + vynix ( connect the backend architecture with frontend ).",
      ],
      image: "/Quote.jpg",
      replies: 2,
      reposts: 3,
    },
  },
  {
    n: 3,
    goals: [
      "Preparing Assessment for flowbit ai (whole day went there)",
      "Must did workout",
      "take good sleep",
    ],
    tweet: {
      lines: [
        "Company Assessment , Had to create this assessment and showcase it also include AI which is like a bot that generates SQL database in the reply , deadline 10-11-2025 ,",
      ],
      image: "/dashboard.jpg",
      replies: 4,
    },
  },
  {
    n: 4,
    goals: [
      "Preparing Assessment for flowbit ai - haven't able to complete ,I am not familier with the technologies that they were asking.",
      "Watch (The Founder) - movie and eat junk (intentional decision)",
      "took a good 7hr sleep",
      "Gave Tuning Test for Js and Ts",
    ],
    tweet: {
      lines: [
        "complete assessment ,",
        "- Aptitude (Quant) ,",
        "Dsa specific for tcs practice. ,",
      ],
      image: "/A.jpg",
      replies: 1,
      reposts: 6,
    },
  },
  {
    n: 5,
    goals: [
      "placement drive attended .",
      "travelling panchkula",
      "2.5hr workout seddion bcz next few days i'll be unable to so.",
      "Practice Aptitude Extensively",
    ],
    tweet: {
      lines: [
        "give tuning dsa test ,",
        "travel to panchkula ,",
        "extensive aptitude practice ( for tcs) ,",
        "Take a good sleep",
      ],
      image: "/WSR.jpg",
      replies: 1,
      reposts: 4,
    },
  },
  {
    n: 6,
    goals: [
      "Taking a good rest because haven't took a proper sleep since 2 days",
      "filling off campus role for Development and AI",
      "Aptitude Practice",
    ],
    tweet: {
      lines: [
        "- just revise all these topics once , and relax",
        "extensive aptitude practice ( for tcs) ,",
        "Take a good sleep",
      ],
      image: "/todo.jpg",
      replies: 4,
    },
  },
  {
    n: 7,
    goals: [
      "",
      "DSA practice PYQ for TCS",
    ],
    tweet: {
      lines: [
        "Today's is completely focused on TCS PYQ DSA problems , Although they are easy so i am just going to revise all",
      ],
      replies: 3,
    },
  },
  {
    n: 8,
    goals: [
      "get a basic understanding on How LangChain Works",
      "Do some DSA problems",
      "Restart your daily structure with new routine",
      "Try to complete your Vynix (It's Been So Long ).",
    ],
    tweet: {
      lines: [
        "get a basic understanding on How LangChain Works",
        "4-5 Good DSA Problems",
        "Try to complete your Vynix (It's Been So Long ).",
      ],
      image: "/G5xeIAhbkAIe0ZS.jpg",
      replies: 2,
      reposts: 2,
      likes: 6,
    },
  },
  {
    n: 9,
    goals: [
      "2 dsa session (2 hour each)",
      "Aptitude (solves 2 sections from quant)",
      "Travel Back to flat (Near Collage )",
      "UFC Islam Main event - must watch",
    ],
    tweet: {
      lines: [
        "dsa ( 2*2 deep hour sessions )",
        "Aptitude (solves 2 sections from quant)",
        "vynix (understand the frontend makes the backend llm connect and testing ).- dsa ( 2*2 deep hour sessions )",
      ],
      replies: 2,
    },
  },
  {
    n: 10,
    goals: [
      "Complete Comuter Network 100%",
      "Aptitude (solves 2 sections from quant)",
    ],
    tweet: {
      lines: [
        "Prepare for Computer Network Exam",
        "Workout .",
        "Had no time left to do anything else",
      ],
      replies: 3,
    },
  },
  {
    n: 11,
    goals: [
      "Give Computer Networks Exam",
      "Boxing Sparring Session today",
      "Prepare for Compiler Vision exam",
    ],
    tweet: {
      lines: [
        "Give Computer Networks Exam",
        "Sql and DSA problem solving session",
        "Prepare for the Compiler Design Exam",
      ],
      image: "/fq.jpg",
      replies: 1,
      reposts: 1,
    },
  },
  {
    n: 12,
    goals: [
      "Attend hyundai Autoever Placement (cleared 2 round but out in 3rd one )",
      "Prepare for computer vision Exam",
      "1-2 Dsa Problems",
    ],
    tweet: {
      lines: [
        "Attend Hyundai AutoEver Placement Drive",
        "Daily Blog Update",
        "1-2 dsa problems",
      ],
      replies: 4,
    },
  },
  {
    n: 13,
    goals: [
      "Give Computer Vision Exam",
      "Back Workout",
      "Watch the bear season-4",
    ],
    tweet: {
      lines: [
        "Give Computer Vision exam .",
        "Workout (back)\ud83d\udcaa\ud83c\udffb",
        "4hr DSA and Sql session.",
      ],
      replies: 3,
      reposts: 6,
    },
  },
  {
    n: 14,
    goals: [
      "DSA 4-5 Problems",
      "4-5 SQL problems",
      "Back Workout",
      "Update Blog",
    ],
    tweet: {
      lines: [
        "Give Computer Networks Exam",
        "Sql and DSA problem solving session",
        "Prepare for the Compiler Design Exam",
      ],
      replies: 1,
      reposts: 7,
    },
  },
  {
    n: 15,
    goals: [
      "SQL leetcode Practice",
      "Workout",
      "Update Portfolio Blog",
      "- work on vynix and try to make it work ..\ud83e\udd78.",
      "3 codeforces and 3 leetcode dsa problems",
    ],
    tweet: {
      lines: [
        "Codeforces (3 problems) + Leetcode( 3 problems )",
        "Aptitude practice ( Quantitative)",
        "4-5 sql problems .",
        "Workout",
        "work on vynix and try to make it work ..\ud83e\udd78.",
      ],
      replies: 1,
      reposts: 5,
    },
  },
  {
    n: 16,
    goals: [
      "DSA (3*3 leetcode + codeforces )",
      "Aptitude Practice",
      "- Business Intelligence Exam Prep.",
    ],
    tweet: {
      lines: [
        "Dsa 3*3 problems on codeforces and leetcode",
        "Aptitude practice in Time constraints",
        "Business Intelligence Exam Prep..",
        "vynix - lot's of bugs fixing.",
      ],
      replies: 3,
    },
  },
  {
    n: 17,
    goals: [
      "DSA (3+3) leetcode + codeforces",
      "Give Business Intelligence Exam",
      "Workout ( Biceps and triceps)",
    ],
    tweet: {
      lines: [
        "Give Business Intelligence exam",
        "Workout ( Biceps and triceps)",
        "Prepare for the Compiler design exam",
        "3+3 dsa on Codeforces and leetcode .",
        "update blog at http://hayarnav.xyz",
      ],
      replies: 4,
    },
  },
  {
    n: 18,
    goals: [
      "Workout",
      "Compiler Design And Routing & Switching Exam Prep",
      "3+3 DSA in Codeforces and Leetcode",
      "Complete Routing and switching Prepration",
      "Prepare Unit-2 for compiler design",
      "3 + 3 codeforces and leetcode questions",
      "Workout",
      "Working on adding chatbot to my portfolio http://hayarnav.xyz",
    ],
    tweet: {
      lines: [
        "Workout",
        "Compiler Design & Routing and Switching Exam Prep",
        "Dsa 3 (Leetcode + Codeforces) .",
      ],
      replies: 4,
      reposts: 1,
      likes: 5,
    },
  },
  {
    n: 20,
    goals: [
      "Give Godaddy Assessment",
      "- Give Routing & Switching Exam after assessment",
    ],
    tweet: {
      lines: [
        "Give GoDaddy Assessment .",
        "Give Routing & Switching Exam",
        "Update Portfolio Blog",
        "Understand Compiler Design",
      ],
      replies: 2,
      reposts: 8,
    },
  },
  {
    n: 21,
    goals: [
      "Attend JOSH Technology placement drive",
      "Prepare for Compiler Design Exam (Final Prepration).",
      "Update daily blog at hayarnav.xyz",
    ],
    tweet: {
      lines: [
        "Attend Placement Drive For Josh Technology for Software Developer role",
        "Prepare for Compiler Design exam",
        "Update daily blog at http://hayarnav.xyz",
      ],
      replies: 3,
      reposts: 5,
    },
  },
  {
    n: 22,
    goals: [
      "Give last exam of Compiler design",
      "Take a good sleep (much needed) .",
    ],
    tweet: {
      lines: [
        "final preparation and give my last Compiler Design exam of my last semester.",
        "workout",
        "Take a good sleep (much needed) .",
      ],
      replies: 2,
      reposts: 4,
    },
  },
  {
    n: 23,
    goals: [
      "Exam is over and i have took a good rest which is a coverup of wasting a day to be honest",
      "Solve 3+2+2 of Leetcode SQL , Codeforces , leetcode DSA.",
      "Listen to podcast of elon musk and nikhil kamath",
    ],
    tweet: {
      lines: [
        "Exam is over and i have took a good rest which is a coverup of wasting a day to be honest",
        "Solve 3+2+2 of Leetcode SQL , Codeforces , leetcode DSA.",
        "Listen to this",
      ],
      image: "/pp.png",
      replies: 1,
      reposts: 1,
    },
  },
  {
    n: 24,
    goals: [
      "Attended placement at HRS Groups (7 hour waiting just for 5 min interview)",
      "Attend eazyDiner Test",
      "Take a good sleep",
    ],
    tweet: {
      lines: [
        "attend HRS Groups placement drive(8hr drive for 5 min hr interview)",
        "Give easydiner test .",
        "start building assessment in python and flask (24 hr deadline) \ud83d\udc80.",
        "(Sleep in past 34hr - 3hr ) .",
        "( Don't take this as a complaint i am enjoying it)",
      ],
      replies: 2,
    },
  },
  {
    n: 25,
    goals: [
      "Give EazyDiner Frontend interview (Selected for the next round)",
      "3+3 leetcode & codeforces",
      "Take a good sleep",
    ],
  },
  {
    n: 26,
    goals: [
      "Complete revision of react",
      "Complete JavaScript Revision for interview",
      "100 pushups , squats and core (not able to complete 200 ).",
    ],
    tweet: {
      lines: [
        "complete revision of react interview prep.",
        "Javascript revision for interview",
        "Oops revision for the interview",
        "Build a basic to do list under 20-25 min . Revision",
        "200 pushups , squats and core + 3min *4 shadow boxing round (bory workout for today).",
      ],
      replies: 2,
      reposts: 5,
    },
  },
  {
    n: 27,
    goals: [
      "7+ dsa problem solved",
      "Take a good sleep",
      "3 hr chess grind",
    ],
  },
  {
    n: 28,
    goals: [
      "- 3+3 codeforces + leetcode",
      "Oops (just small revision ).",
    ],
  },
  {
    n: 29,
    goals: [
      "4 dsa problem",
      "travel and wasted time alot today (not proud of )",
    ],
  },
  {
    n: 30,
    goals: [
      "3+3+3 codeforces , leetcode , sql",
      "UPDATE BLOG",
      "work on vynix backend bugs",
    ],
  },
  {
    n: 31,
    goals: [
      "Vynix debugging",
      "3+3+3 leetcode , codeforces, sql",
      "(If time left) practice backend interview problems for placements.",
    ],
    tweet: {
      lines: [
        "Work on vynix backend(debugging )",
        "build a working chat agent for",
        "3+3+3 leetcode , codeforces, sql",
        "(If time left) practice backend interview problems for placements.",
      ],
      image: "/appa.jpeg",
      replies: 8,
      reposts: 1,
      likes: 12,
    },
  },
  {
    n: 32,
    goals: [
      "Start Building chat agent for My Portfolio",
      "3+2+3 leetcode, codeforces, sql",
      "Oops revision",
      "if time left solve more dsa problems.",
    ],
  },
  {
    n: 33,
    goals: [
      "complete portfolio first iteration",
      "8 problem solve / revise on leetcode for tomorrow placement",
      "give assessment.",
    ],
  },
  {
    n: 34,
    goals: [
      "4 DP problems (Not able to complete btw)",
      "3 sql problems",
      "Oops practice",
    ],
  },
  {
    n: 35,
    goals: [
      "Complete the assessment given by incubate (crucks: creating a dashboard using TDD method with authentication).",
      "some leetcode and codeforces dsa problems .",
    ],
  },
  {
    n: 36,
    goals: [
      "complete the huge assessment by incubate.",
      "6 leetcode problems",
      "3 sql problems",
    ],
  },
  {
    n: 37,
    goals: [
      "Give last External VIVA",
      "6 leetcode problems (Revision)",
      "140*3 (pushups , Lunges , core ) - Don't have time to go to the gym.",
    ],
  },
  {
    n: 38,
    goals: [
      "Attend HandWritten Adssessment in Varank (Bad experience , everybody is cheating )",
      "Last Computer Vision External",
      "1 AI Interview \ud83d\udc4d\ud83c\udffb.",
    ],
  },
  {
    n: 39,
    goals: [
      "Update Portfolio http://hayarnav.xyz",
      "solved 5-7 leetcode problems",
      "Oops revision",
      "Project Corrections and Understanding Incubte assessment",
    ],
  },
  {
    n: 40,
    goals: [
      "Null",
    ],
  },
  {
    n: 41,
    goals: [
      "DSA 4-6 old problem revision",
      "In-depth Oops concept practice",
      "Some SQL Practice (NOT COMPLETED)",
      "Work on Projects",
    ],
  },
  {
    n: 42,
    goals: [
      "Oops In-depth Concepts understanding",
      "Dbms revision",
      "DSA Problem Solving",
    ],
  },
  {
    n: 43,
    goals: [
      "10 dsa problems",
      "Update blog at hayarnav.xyz",
      "DBMS quick revision (TBH wasted my leftover time & not proud of that )",
    ],
    tweet: {
      lines: [
        "DEEP WORK",
        "10 DSA problems Revisited",
        "Update Blog at http://hayarnav.xyz",
        "DBMS Quick Revision",
        "FUN TIME",
        "Work on Vynix , Try to stream successfully from backend",
        "Find and Apply for Internships (1hr)",
      ],
      replies: 2,
    },
  },
  {
    n: 44,
    goals: [
      "DSA and SQL",
      "Update blog at hayarnav.xyz",
      "Worked extensively on Vynix streaming",
      "Oops and dbms revision",
    ],
    tweet: {
      lines: [
        "Leetcode DSA and SQL",
        "Update Blog at http://hayarnav.xyz",
        "Work on Vynix Extensively and try to complete it",
        "Oops and DBMS Revisions.",
      ],
      replies: 2,
      reposts: 5,
    },
  },
  {
    n: 45,
    goals: [
      "DSA practice with AI interview",
      "Correct backend of hayarnav.xyz for personal bot",
      "try to figure out what is worng with the video streaming",
      "DBMS and Oops if time left",
    ],
    tweet: {
      lines: [
        "Daily DSA 2 hour straight practice , 1hr SQL.",
        "Connect Backend of http://hayarnav.xyz for Personal bot",
        "figure out what is wrong with vynix video streaming .",
        "(if time left) DBMS and Oops Revision.",
      ],
      replies: 1,
      reposts: 4,
    },
  },
  {
    n: 46,
    goals: [
      "DSA with AI interview",
      "JavaScript and express in-depth understanding , reading docs and interview style discussion with (AI).",
      "work on Vynix || work on http://hayarnav.xyz bot bug fixing .",
      "Completed the most important goal which is to get placed which i achieve so for now the winter arc is finished till next year.",
    ],
    tweet: {
      lines: [
        "DSA Problem solving (Interview style with AI)",
        "JavaScript and express in-depth understanding , reading docs and interview style discussion with (AI).",
        "work on Vynix || work on http://hayarnav.xyz bot bug fixing .",
      ],
      replies: 1,
      reposts: 6,
    },
  },
];
