import type { GetStaticProps, NextPage } from "next";
import { getPostsEntirely } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="My blog"
        description="Here I will discuss about the tech stuff that I am learning, enjoy your reading!"
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getPostsEntirely().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Home;
