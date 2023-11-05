import Head from "next/head";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

const currentYear = dayjs().year();
const currentMonth = dayjs().month() + 1;
const currentDay = dayjs().date();

console.log(currentYear, currentMonth, currentDay)
console.log(dayjs("2023-4-07","YYYY-M-DD", true).isValid())



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
