import Head from "next/head";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


dayjs.extend(relativeTime);

const current = dayjs();

const currentYear = current.$y as number;
const currentMonth = current.$M as number;
const currentDay = current.$D as number;

console.log(currentYear, currentMonth, currentDay)



export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <form action="">
            <label htmlFor="day">Day</label>
            <input id="day" type="number" />
            <label htmlFor="month">Month</label>
            <input type="text" />
            <label htmlFor="year">Year</label>
            <input id="year" type="number" />
            <button type="submit">Submit</button>
          </form>
          <section>
            <p>25 Years</p>
            <p>3 Months</p>
            <p>7 Days</p>
          </section>
        </div>
      </main>
    </>
  );
}
