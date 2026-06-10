'use client'

export function ChocolateDrip() {
  return (
    <div className="relative w-full bg-background overflow-hidden">
      {/* SVG Chocolate Drip */}
      <svg
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        className="w-full h-auto"
        style={{ minHeight: '120px' }}
      >
        {/* Define gradients */}
        <defs>
          {/* Main chocolate gradient */}
          <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5C3317" stopOpacity="1" />
            <stop offset="50%" stopColor="#4A2C1D" stopOpacity="1" />
            <stop offset="100%" stopColor="#3D2416" stopOpacity="0.95" />
          </linearGradient>

          {/* Highlight gradient for glossy effect */}
          <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5A3C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5A3C" stopOpacity="0" />
          </linearGradient>

          {/* Shimmer effect */}
          <linearGradient id="shimmer" x1="-200%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Background fill */}
        <rect width="1400" height="200" fill="url(#chocolateGradient)" />

        {/* Main drip path with multiple organic curves */}
        <path
          d="M 0 0 
             C 50 5, 100 15, 150 25
             Q 175 35, 200 50
             C 220 65, 210 90, 200 110
             C 190 130, 175 145, 160 155
             L 150 200
             
             M 200 0
             C 250 8, 280 20, 320 35
             Q 345 48, 360 70
             C 370 90, 350 120, 320 140
             C 300 155, 280 165, 260 175
             L 250 200
             
             M 380 0
             C 420 10, 450 25, 480 40
             Q 505 55, 520 80
             C 530 105, 510 135, 480 160
             C 460 175, 440 185, 420 195
             L 410 200
             
             M 560 0
             C 600 6, 640 18, 670 32
             Q 695 48, 710 75
             C 720 100, 700 130, 670 155
             C 650 170, 630 182, 610 192
             L 600 200
             
             M 750 0
             C 790 12, 820 28, 850 45
             Q 875 60, 890 85
             C 900 110, 880 140, 850 165
             C 830 180, 810 192, 790 200
             
             M 930 0
             C 970 8, 1000 22, 1030 38
             Q 1055 52, 1070 78
             C 1080 102, 1060 132, 1030 158
             C 1010 173, 990 185, 970 195
             L 960 200
             
             M 1110 0
             C 1150 10, 1180 25, 1210 40
             Q 1235 55, 1250 80
             C 1260 105, 1240 135, 1210 160
             C 1190 175, 1170 187, 1150 197
             L 1140 200
             
             M 1280 0
             C 1320 7, 1350 19, 1380 32
             Q 1400 42, 1400 60
             L 1400 200"
          fill="url(#chocolateGradient)"
          stroke="none"
        />

        {/* Highlight/shine effect */}
        <path
          d="M 0 0 
             C 50 5, 100 15, 150 25
             Q 175 35, 200 50
             C 220 65, 210 90, 200 110
             L 200 80
             C 210 70, 220 50, 200 35
             Q 180 20, 150 15
             C 100 8, 50 2, 0 0
             Z
             
             M 380 0
             C 420 10, 450 25, 480 40
             Q 505 55, 520 80
             L 520 50
             C 510 35, 490 20, 470 12
             C 450 5, 420 2, 380 0
             Z
             
             M 750 0
             C 790 12, 820 28, 850 45
             Q 875 60, 890 85
             L 890 55
             C 875 35, 850 18, 820 8
             C 790 2, 760 0, 750 0
             Z"
          fill="url(#highlightGradient)"
          opacity="0.7"
        />

        {/* Shimmer animation overlay */}
        <rect
          width="1400"
          height="200"
          fill="url(#shimmer)"
          className="animate-chocolate-shimmer"
        />
      </svg>

      {/* Logo centered in drip area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src="/arasan-logo.png"
          alt="Arasan Stores Logo"
          className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain drop-shadow-lg"
        />
      </div>
    </div>
  )
}
