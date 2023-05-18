import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Layout from "../components/layout";
import BW2 from "../public/assets/dejiBW2.webp";

const Home: NextPage = () => {
  return (
    <Layout>
      <Main className="p-8 md:p-14 h-screen md:min-h-screen">
        <section className="bg-beige2 py-2 px-3 h-full md:px-6 lg:pt-0.5 shadow-2xl">
          <Grid className="font-[700] text-[10px]">
            <div>
              <span className="hover:underline cursor-pointer">Ayodeji Akinborewa</span>
            </div>
            <div>
              <span>Frontend engineer at Emergent labs</span>
            </div>

            <div>
              <span>Based in Lagos, Nigeria</span>
            </div>
            <div>
              <span>Work, About, Contact</span>
            </div>
          </Grid>

          <h1 className="bigText pt-4 md:pt-6">
            SOFTWARE <span className="block">ENGINEER</span>
          </h1>

          <ImageContainer className="relative rounded-[12px] mt-4 md:mt-8">
            <Image
              src={BW2}
              priority
              layout="fill"
              className=""
              objectFit="cover"
              objectPosition="top"
              alt=" ayodeji's image"
            />
          </ImageContainer>

          <div className="flex items-center justify-between pt-4 md:pt-6 ">
            <svg
              className="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
              `{" "}
            </svg>
            <h1 className="bigText text-right">
              AYODEJI <span className="block">AKINBOREWA</span>
            </h1>
          </div>
        </section>
      </Main>

      {/* <div className="bg-white p-8 md:p-14 h-screen md:min-h-screen">
        <section className="bg-beige2 py-2 px-3 h-full md:px-6 lg:pt-0.5">
          <Grid className="font-[700] text-[10px]">
            <div>
              <span className="hover:underline cursor-pointer">Ayodeji Akinborewa</span>
            </div>
            <div>
              <span>Frontend engineer at Emergent labs</span>
            </div>

            <div>
              <span>Based in Lagos, Nigeria</span>
            </div>
            <div>
              <span>Work, About, Contact</span>
            </div>
          </Grid>

          <h1 className="bigText pt-4 md:pt-6">
            SOFTWARE <span className="block">ENGINEER</span>
          </h1>

          <ImageContainer className="relative rounded-[12px] mt-4 md:mt-8">
            <Image
              src={BW2}
              priority
              layout="fill"
              className=""
              objectFit="cover"
              objectPosition="top"
            />
          </ImageContainer>

          <div className="flex items-center justify-between pt-4 md:pt-6 ">
            <svg
              className="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <h1 className="bigText text-right">
              AYODEJI <span className="block">AKINBOREWA</span>`{" "}
            </h1>
          </div>
        </section>
      </div> */}
    </Layout>
  );
};

const Main = styled.main`
  background: linear-gradient(
    209deg,
    #089c02 20%,
    #e5eed6 20% 21%,
    #089c02 21% 80%,
    #e5eed6 80% 81%,
    #089c02 81% 100%
  );
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr;
  row-gap: -1.8em;
  margin: -1.5em 0;

  & > div {
    line-height: 0.5;
  }

  & > :nth-child(even) {
    text-align: right;

    @media (min-width: 767px) {
      text-align: unset;
    }
  }

  @media (min-width: 767px) {
    display: grid;
    font-size: 13px;
    grid-template-columns: repeat(3, 1fr);
    column-gap: -1.3em;

    & > :nth-child(1) {
      text-align: center;
    }

    & > :nth-child(2) {
      text-align: center;
    }

    & > :nth-child(3) {
      text-align: right;
    }
  }

  @media (min-width: 1023px) {
    font-size: 15px;
  }
`;

const ImageContainer = styled.div`
  width: 99%;
  height: calc(99% - 210px);
  box-shadow: -1px 3px 10px 3px #c1c1c1;

  @media (min-width: 767px) {
    width: 49%;
    height: 199px;
  }

  @media (min-width: 1023px) {
    width: 29%;
    height: 229px;
  }
`;

export default Home;
