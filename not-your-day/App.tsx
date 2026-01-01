import React from 'react';
import { MediaPlayer } from './components/MediaPlayer';
import { LaserBackground } from './components/LaserBackground';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans bg-black">
      <LaserBackground />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <MediaPlayer 
          gifSrc="https://raw.githubusercontent.com/bmeekins93/jayF-durdayup/adb2fa3b5a7e6b3ca3961c6b9fbe376b9364616c/animated_sprite_transparent.gif"
          audioSrc="https://raw.githubusercontent.com/bmeekins93/jayF-durdayup/adb2fa3b5a7e6b3ca3961c6b9fbe376b9364616c/Dwayne.mp3"
        />
      </main>
      
      <footer className="absolute bottom-4 text-xs text-white/30 text-center w-full z-10">
        <p>Built with React & Tailwind</p>
      </footer>
    </div>
  );
}