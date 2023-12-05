import Header from '@/Header/Header';
import Guide from '@/Guide/Guide';
import Slider from '@/Slider/Slider';
import Intro from '@/Intro/Intro';
import Main from '@/Main/Main';
import Sub from '@/Sub/Sub';
import Function from '@/Function/Function';
import Scrollnav from '@/Scrollnav/Scrollnav';
import Compare from '@/Compare/Compare';
import Question from '@/Question/Question';
import Form from '@/Form/Form';
import Footer from '@/Footer/Footer';
import Qiestion from '@/Question/Question';
import { Suspense } from 'react';

export default function App() {
  return (
    <>
      <Suspense>
        <Header />
        <Guide />
        <Slider />
        <Scrollnav />
        <Intro />
        <Main />
        <Sub />
        <Function />
        <Compare />
        <Qiestion />
        <Form />
        <Footer />
      </Suspense>
    </>
  );
}
