import Container from "../components/Container";
import Image from "next/image";
import RecentPosts from "../components/RecentPosts";
import { allPosts } from "../.contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
      <Container>
        <div className={`my-5 w-full`}>
          <div className={`relative`}>
            <Image
              src={`/home.png`}
              alt="대표 이미지"
              width={120}
              height={45}
              layout={`responsive`}
              objectFit="cover"
              className={`rounded-3xl`}
            />
            
          </div>
          <RecentPosts posts={posts} />
        </div>
      </Container>
    );
  };

  export const getStaticProps = async () => {
    const posts = allPosts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
    return {
      props: {
        posts,
      },
    };
  };
  
  export default Home;