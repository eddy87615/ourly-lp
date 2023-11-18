import Image from 'next/image';
import Header from '@/Header/Header';
import Slider from '@/Slider/Slider';
import Intro from '@/Intro/Intro';
import Main from '@/Main/Main';
import Sub from '@/Sub/Sub';
import Function from '@/Function/Function';

export default function App() {
  return (
    <>
      <Header />
      <Slider />
      <Intro />
      <Main />
      <Sub />
      <Function />
    </>
  );
}
