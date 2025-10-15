import blogData from '../mockData/blogData';

export const BlogHeader = ({ text }) => (
  <h2 className="blog_title">{text}</h2>
);

export const BlogPostWide = ({ src, alt, title, data, omg }) => {
  return (
    <div className="blog_post_wide">
      <img src={src} alt={alt} />
      <div className="blog_post_wide_content">
        <h3 className="blog_post_wide_title">{title}</h3>
        <p className="blog_post_wide_date">{data}</p>
        <p className="blog_post_wide_text">{omg}</p>
      </div>
    </div>
  );
};

export const BlogPostSmall = ({ src, alt, title, data, omg }) => {
  return (
    <div className="blog_post_small">
      <img src={src} alt={alt} />
      <div className="blog_post_small_content">
        <h3 className="blog_post_small_title">{title}</h3>
        <p className="blog_post_small_date">{data}</p>
        <p className="blog_post_small_text">{omg}</p>
      </div>
    </div>
  );
};

export const BlogPostsSmall = ({ blogContent }) => {
  return blogContent.slice(1).map((blog) => (
    <BlogPostSmall
      src={blog.src} 
      alt={blog.alt} 
      title={blog.title}
      data={blog.data}
      omg={blog.omg}
    />
  ));
};

export const Blog = () => {
  const { blogHeader, blogContent, } = blogData;
  const blogTitle = <BlogHeader text={blogHeader.header} />;
  const blogPostWide = (
    <BlogPostWide
      src={blogContent[0].src}
      alt={blogContent[0].alt}
      title={blogContent[0].title}
      data={blogContent[0].data}
      omg={blogContent[0].omg}
    />
  );
  const blogPostsSmall = (
    <BlogPostsSmall blogContent={blogContent} />
  );

  return (
    <section className="blog_section">
      {blogTitle}
      <div className="blog_container">
        {blogPostWide}
        <div className="blog_posts_small">{blogPostsSmall}</div>
      </div>
    </section>
  );
};

export default Blog;
