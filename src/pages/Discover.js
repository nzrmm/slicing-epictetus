import { useEffect } from 'react';
import TheDiscover from '../templates/TheDiscover';

export default function Discover() {
  useEffect(() => {
    document.title = 'Discover - The Epictetus';
  });

  return (
    <>
      <TheDiscover />
    </>
  );
}
