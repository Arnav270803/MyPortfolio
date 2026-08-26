import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Routes,Route } from 'react-router-dom'
import Homee from './pages/Homee'
import BlogPage from './pages/BlogPage'
import ResumePage from './pages/ResumePage'
import WinterArcPage from './pages/WinterArcPage'

/* Ambient lofi. Served from /public so the browser streams it instead of
   pulling 3.5MB through the bundle. */
const TRACK = '/alex-morgan-lofi-coffee-shop-568150.mp3';
const AMBIENT_KEY = 'ambient-audio';
const PEAK_VOLUME = 0.22;
const FADE_IN = 4000;
const FADE_OUT = 900;

/* Browsers only unlock audio after a real user activation. Scroll is NOT one,
   so listening for it would burn the unlock without ever starting playback. */
const ACTIVATION_EVENTS = ['pointerdown', 'keydown', 'touchstart'];

/* ramp the volume rather than cutting it; a later fade supersedes an earlier one */
const fade = (audio, to, ms, done) => {
  const from = audio.volume;
  const startedAt = performance.now();
  const id = (audio.fadeToken = (audio.fadeToken || 0) + 1);

  const step = (now) => {
    if (audio.fadeToken !== id) return;
    const k = Math.min(1, (now - startedAt) / ms);
    audio.volume = Math.max(0, Math.min(1, from + (to - from) * k));
    if (k < 1) requestAnimationFrame(step);
    else if (done) done();
  };
  requestAnimationFrame(step);
};

const readPreference = () => {
  try {
    return localStorage.getItem(AMBIENT_KEY) !== 'off';
  } catch {
    return true;
  }
};

const App = () => {
    const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
  setIsDark(!isDark);
  };

  // Toggle theme function

  const [ambientOn, setAmbientOn] = useState(readPreference);   // what the visitor wants
  const [playing, setPlaying] = useState(false);                // what is actually audible
  const audioRef = useRef(null);
  const wantsRef = useRef(ambientOn);

  useEffect(() => {
    wantsRef.current = ambientOn;
  }, [ambientOn]);

  /* one element for the life of the app */
  useEffect(() => {
    const audio = new Audio(TRACK);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return Promise.reject(new Error('no audio'));
    return audio.play().then(() => fade(audio, PEAK_VOLUME, FADE_IN));
  }, []);

  /* intent drives playback */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      localStorage.setItem(AMBIENT_KEY, ambientOn ? 'on' : 'off');
    } catch {
      /* private mode — the preference just won't persist */
    }

    if (!ambientOn) {
      fade(audio, 0, FADE_OUT, () => audio.pause());
      return;
    }
    start().catch(() => {
      /* autoplay refused; the activation listener below retries */
    });
  }, [ambientOn, start]);

  /* Retry on the visitor's first real interaction, and keep listening until a
     play() actually succeeds. The speaker button is skipped so its own click
     is handled once, by toggleAmbient, rather than racing with this. */
  useEffect(() => {
    const onActivate = (event) => {
      if (event.target?.closest?.('[data-ambient-toggle]')) return;
      const audio = audioRef.current;
      if (!audio || !wantsRef.current || !audio.paused) return;
      start().then(stopListening).catch(() => {});
    };
    const stopListening = () =>
      ACTIVATION_EVENTS.forEach((e) => window.removeEventListener(e, onActivate));

    ACTIVATION_EVENTS.forEach((e) => window.addEventListener(e, onActivate, { passive: true }));
    return stopListening;
  }, [start]);

  const toggleAmbient = () => {
    const audio = audioRef.current;
    /* wanted but silent because autoplay was blocked — this click is the
       activation, so start it rather than reading the tap as a mute */
    if (ambientOn && audio && audio.paused) {
      start().catch(() => {});
      return;
    }
    setAmbientOn((on) => !on);
  };

  return (
    <div className=''>

      <Routes>
        <Route path='/' element={<Homee isDark={isDark} toggleTheme={toggleTheme} ambientOn={ambientOn && playing} toggleAmbient={toggleAmbient}/>} />
        <Route path='/bblog' element={<BlogPage isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='/resume' element={<ResumePage isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='WinterArc' element={<WinterArcPage isDark={isDark} toggleTheme={toggleTheme}/>} />
      </Routes>


    </div>
  )
}

export default App
