import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Capturing Moments",
      description: "Photography is more than just taking pictures; it's about capturing emotions, memories, and stories...",
      image: "https://www.cameraworld.co.uk/wordpress/wp-content/uploads/2021/07/capturing-the-moment-in-photography.jpg",
      date: "Feb 10, 2025"
    },
    {
      id: 2,
      title: "Top 5 Places for Landscape Photography",
      description: "Discover the most breathtaking locations for landscape photography and how to get the perfect shot...",
      image: "https://thumbs.dreamstime.com/b/capture-every-moment-vintage-camera-retro-camera-vector-flat-illustration-capture-every-moment-vintage-camera-retro-camera-144253360.jpg",
      date: "Jan 25, 2025"
    },
    {
      id: 3,
      title: "How to Take Stunning Portraits",
      description: "Learn the secrets behind taking professional portraits with natural lighting and minimal equipment...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugs6gpk6rjrFzK_1zFcQGUg8WiV7vi3XB-w&s",
      date: "Dec 15, 2024"
    }
  ];

  return (
    <div className="content-body">
      <div className="blog-container">

      <h1 className="page-title">Latest Blog Posts</h1>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description">{post.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Blog;
