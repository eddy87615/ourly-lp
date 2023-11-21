import Image from 'next/image';
import Header from '@/Header/Header';
import Guide from '@/Guide/Guide';
import Slider from '@/Slider/Slider';
import Intro from '@/Intro/Intro';
import Main from '@/Main/Main';
import Sub from '@/Sub/Sub';
import Function from '@/Function/Function';
import Scrollnav from '@/Scrollnav/Scrollnav';
import Compare from '@/Compare/Compare';
import Form from '@/Form/Form';
import Footer from '@/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Guide />
      <Slider />
      <Scrollnav />
      <Intro />
      <Main />
      <Sub />
      <Function />
      <Compare />
      <Form />
      <Footer />
    </>
  );
}
