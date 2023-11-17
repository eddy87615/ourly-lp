import Image from 'next/image';
import Header from '@/Header/Header';
import Slider from '@/Slider/Slider';
import Intro from '@/Intro/Intro';
import Main from '@/Main/Main';

export default function App() {
  return (
    <>
      <Header />
      <Slider />
      <Intro />
      <Main />
    </>
  );
}
