import Image from 'next/image';
import Header from '@/Header/Header';
import Slider from '@/Slider/Slider';
import Intro from '@/Intro/Intro';
import Main from '@/Main/Main';
import Sub from '@/Sub/Sub';
import Function from '@/Function/Function';
import Scrollnav from '@/Scrollnav/Scrollnav';
import Compare from '@/Compare/Compare';
import Form from '@/Form/Form';
import Fee from '@/Fee/Fee';

export default function App() {
  return (
    <>
      <Header />
      <Slider />
      <Scrollnav />
      <Intro />
      <Main />
      <Sub />
      <Function />
      <Compare />
      <Fee />
      <Form />
    </>
  );
}
