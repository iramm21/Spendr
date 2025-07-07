// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Spendr — Level Up Your Money Game</title>
      <meta
        name="description"
        content="Spendr - habit-building, streaks, and rewards for your finances."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#1e40af" />

      {/* Favicon and icons (optional but recommended) */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  );
}
