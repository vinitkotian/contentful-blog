import { gql } from "@apollo/client";
import client from "../apollo/client";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";
import { blogPost } from "../types/BlogPost";
import Image from "next/image";

function convertToLocaleDateFormat(date) {
  return new Date(date).toLocaleDateString("en-US");
}
const HomePage: React.FC<{ posts: blogPost[] }> = ({ posts }) => {
  return (
    <div className="page-ctn">
      <Typography variant="h2">All Blogs</Typography>
      <div className="blogs-ctn">
        {posts.map((post) => {
          return (
            <Paper elevation={5} className={"blog-post-item"} key={post.blogId}>
             <Image src={post.blogBackground.url} className={"img-back"} height={"150px"} width={"300px"}/>
              <Link href={`/post/?blogId=${post.blogId}`}>
                <a>
                  <Typography variant="h6">{post.title}</Typography>
                </a>
              </Link>
              <div>
                Published : {convertToLocaleDateFormat(post.publishDate)}
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getAllBlogPosts {
        blogPostCollection {
          items {
            title
            publishDate
            blogId
            blogBackground {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.blogPostCollection["items"],
    },
  };
};

export default HomePage;
