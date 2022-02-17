import React from 'react';
import { BlogGridStyles } from '../styles/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <div className="container">
      <BlogGridStyles>
        {blogs &&
          blogs.map((blog) => (
            <BlogItem
              key={blog._id}
              path={blog.slug.current}
              title={blog.title}
              categories={blog.categories}
              image={{
                imageData: blog.coverImage.asset.gatsbyImageData,
                altText: blog.coverImage.alt,
              }}
            />
          ))}
      </BlogGridStyles>
    </div>
  );
}

export default BlogGrid;
