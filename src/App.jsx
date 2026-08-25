import React, { useState, useRef, useEffect } from 'react'
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

  const [ambientOn, setAmbientOn] = useState(readPreference);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(TRACK);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    audioRef.current = audio;
    return () => audio.pause();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    try {
      localStorage.setItem(AMBIENT_KEY, ambientOn ? 'on' : 'off');
    } catch {
      /* private mode — the preference just won't persist */
    }

    if (!ambientOn) {
      fade(audio, 0, FADE_OUT, () => audio.pause());
      return undefined;
    }

    const rise = () => fade(audio, PEAK_VOLUME, FADE_IN);
    let detach = () => {};

    /* browsers refuse to autoplay audio until the visitor has interacted,
       so fall back to starting on their first gesture */
    audio.play().then(rise).catch(() => {
      const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
      const onGesture = () => {
        detach();
        audio.play().then(rise).catch(() => {});
      };
      events.forEach((e) => window.addEventListener(e, onGesture, { once: true, passive: true }));
      detach = () => events.forEach((e) => window.removeEventListener(e, onGesture));
    });

    return () => detach();
  }, [ambientOn]);

  const toggleAmbient = () => setAmbientOn((on) => !on);

  return (
    <div className=''>

      <Routes>
        <Route path='/' element={<Homee isDark={isDark} toggleTheme={toggleTheme} ambientOn={ambientOn} toggleAmbient={toggleAmbient}/>} />
        <Route path='/bblog' element={<BlogPage isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='/resume' element={<ResumePage isDark={isDark} toggleTheme={toggleTheme}/>} />
        <Route path='WinterArc' element={<WinterArcPage isDark={isDark} toggleTheme={toggleTheme}/>} />
      </Routes>


    </div>
  )
}

export default App
