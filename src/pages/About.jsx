function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className='text-left w-full'>
      <div>
        <div className='flex flex-row'>
          <div className='my-auto w-1/2'>
            <h2 className='font-bold text-4xl py-3'>Hi, I'm Anthony.</h2>
            <p>
              I'm a full stack developer currently living in Los Angeles,
              California.
              <br />
              <br />
              Most recently I co-developed a product called DenoGres &#40;open
              source&#41;, an object relational mapper built for PostgreSQL for
              use with Deno runtime.
              <br />
              <br />
              My previous background is in utilizing data warehousing solutions
              and building out business intelligence tools, having spent over 7
              years at various companies as a senior analyst.
              <br />
              <br />
              When I'm not coding, you can find me traveling the world &#40;most
              recently got married in Italy&#41; , exploring pour over shops in
              the LA area , and tinkering with my espresso machine!
            </p>
          </div>
          <div className='w-1/2 '>
            <img
              className='mx-auto'
              src='src/images/Profile.jpeg'
              width={400}
              alt='profile picture'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
