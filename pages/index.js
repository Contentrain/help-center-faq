import Head from "next/head";
import FaqCard from "../components/FaqCard";
import { useState } from "react";
import { getAllQuestions, markdownToHtml } from "./api/questions";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
export default function Home({ questions }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Head>
        <title>Contentrain FAQ Template</title>
        <meta name="description" content="Contentrain Frequently asked questions template with NextJS and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero className="mt-32 mb-12 max-w-3xl mx-auto" />
        <div className="flex max-w-3xl mx-auto flex-col justify-center items-center mt-12">
          {questions.map((question, index) => (
            <div className="w-full mb-8" key={index}>
              <FaqCard
                title={"Accordion " + (index + 1)}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                content={question.content}
                slug={question.slug}
             />
            </div>
          ))}
        </div>
        <Banner />
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const questions = await getAllQuestions([
    "tags",
    "createdAt",
    "slug",
    "publish",
    "content",
  ]);
  for await (const question of questions) {
    question.content = (await markdownToHtml(question.content)) || "";
  }
  return {
    props: { questions },
  };
}

