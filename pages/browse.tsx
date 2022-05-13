import { gql } from "@apollo/client";
import client from "../apollo/client";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";
import { blogPost } from "../types/BlogPost";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  blogpostItem: {
    margin: "10px",
    heigh: "200px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    font: "20px bold",
    background: "rgb(43, 42, 42)",
    color: "white",
    borderRadius: "1rem"
  }
})

function convertToLocaleDateFormat(date) {
  return new Date(date).toLocaleDateString("en-US");
}

const BrowseBlogs: React.FC<{ posts: blogPost[] }> = ({ posts }) => {
  const classes = useStyles();
  return (
    <div className="page-ctn">
      <div className="blogs-ctn">
        {posts.map((post) => {
          return (
            <Paper elevation={5} className={classes.blogpostItem} key={post.blogId}>
              <Image
                src={post.blogBackground.url}
                className={"img-back"}
                height={"150px"}
                width={"300px"}
              />
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

export default BrowseBlogs;
