import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #0000002b;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  width: 300px;
  
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  
  svg {
    color: ${({ theme }) => theme.colors.textLight};
    margin-right: ${({ theme }) => theme.space[2]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const BlogMain = styled.div``;

const FeaturedPost = styled.div`
  background-color: #0000002b;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  .image {
    height: 400px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  &:hover .image img {
    transform: scale(1.05);
  }
  
  .content {
    padding: ${({ theme }) => theme.space[6]};
    
    .category {
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
      border-radius: ${({ theme }) => theme.radii.md};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      margin-bottom: ${({ theme }) => theme.space[3]};
    }
    
    h2 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[3]};
    }
    
    .meta {
      display: flex;
      gap: ${({ theme }) => theme.space[4]};
      margin-bottom: ${({ theme }) => theme.space[4]};
      color: ${({ theme }) => theme.colors.textLight};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      
      .item {
        display: flex;
        align-items: center;
        
        svg {
          margin-right: ${({ theme }) => theme.space[1]};
        }
      }
    }
    
    p {
      color: ${({ theme }) => theme.colors.textLight};
      margin-bottom: ${({ theme }) => theme.space[4]};
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled(motion.div)`
  background-color: #0000002b;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .image {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  &:hover .image img {
    transform: scale(1.05);
  }
  
  .content {
    padding: ${({ theme }) => theme.space[5]};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    .category {
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
      padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
      border-radius: ${({ theme }) => theme.radii.md};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      margin-bottom: ${({ theme }) => theme.space[2]};
    }
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[2]};
    }
    
    .meta {
      display: flex;
      gap: ${({ theme }) => theme.space[3]};
      margin-bottom: ${({ theme }) => theme.space[3]};
      color: ${({ theme }) => theme.colors.textLight};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      
      .item {
        display: flex;
        align-items: center;
        
        svg {
          margin-right: ${({ theme }) => theme.space[1]};
          font-size: 0.75rem;
        }
      }
    }
    
    p {
      color: ${({ theme }) => theme.colors.textLight};
      margin-bottom: ${({ theme }) => theme.space[4]};
      line-height: ${({ theme }) => theme.lineHeights.relaxed};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      flex-grow: 1;
    }
    
    .read-more {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      
      svg {
        margin-left: ${({ theme }) => theme.space[2]};
        transition: transform 0.3s ease;
      }
      
      &:hover svg {
        transform: translateX(4px);
      }
    }
  }
`;

const BlogSidebar = styled.div``;

const SidebarSection = styled.div`
  background-color: #0000002b;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[6]};
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[4]};
    position: relative;
    padding-bottom: ${({ theme }) => theme.space[2]};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: ${({ theme }) => theme.space[3]};
    
    a {
      display: flex;
      justify-content: space-between;
      color: ${({ theme }) => theme.colors.textLight};
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
      
      span {
        background-color: ${({ theme }) => theme.colors.bgLight};
        padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
        border-radius: ${({ theme }) => theme.radii.sm};
        font-size: ${({ theme }) => theme.fontSizes.xs};
      }
    }
  }
`;

const PopularPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const PopularPostItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  
  .image {
    width: 80px;
    height: 60px;
    border-radius: ${({ theme }) => theme.radii.md};
    overflow: hidden;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .content {
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[1]};
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    
    .date {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.textLight};
      display: flex;
      align-items: center;
      
      svg {
        margin-right: ${({ theme }) => theme.space[1]};
      }
    }
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  
  a {
    display: inline-block;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.bgLight};
    color: ${({ theme }) => theme.colors.textLight};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[8]};
  
  .page-item {
    margin: 0 ${({ theme }) => theme.space[1]};
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: ${({ theme }) => theme.radii.md};
      background-color: #0000002b;
      color: ${({ theme }) => theme.colors.text};
      box-shadow: ${({ theme }) => theme.shadows.sm};
      transition: all 0.3s ease;
      
      &:hover, &.active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.light};
      }
    }
  }
`;

const CTASection = styled(Section)`
  text-align: center;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2023",
    category: "Web Development",
    date: "June 15, 2023",
    author: "Pritish Dhal",
    excerpt: "Explore the emerging trends in web development that are shaping the digital landscape in 2023 and beyond.",
    image: unsplashImages.services.webDev
  },
  {
    id: 2,
    title: "How AI is Transforming Mobile App Development",
    category: "Mobile Development",
    date: "May 28, 2023",
    author: "Vaishnavi Bhardwaj",
    excerpt: "Discover how artificial intelligence is revolutionizing the way mobile applications are designed, developed, and deployed.",
    image: unsplashImages.services.mobileDev
  },
  {
    id: 3,
    title: "The Importance of User Experience in Digital Products",
    category: "UI/UX Design",
    date: "May 10, 2023",
    author: "Samrita Swain",
    excerpt: "Learn why user experience is critical to the success of digital products and how to improve it for better results.",
    image: unsplashImages.services.uiUx
  },
  {
    id: 4,
    title: "Cloud Migration: Best Practices for a Smooth Transition",
    category: "Cloud Solutions",
    date: "April 22, 2023",
    author: "Pritam Pattanaik",
    excerpt: "Follow these best practices to ensure a successful cloud migration with minimal disruption to your business operations.",
    image: unsplashImages.services.cloud
  },
  {
    id: 5,
    title: "DevOps Implementation: Overcoming Common Challenges",
    category: "DevOps",
    date: "April 5, 2023",
    author: "Sweta Moharana",
    excerpt: "Address the most common challenges organizations face when implementing DevOps practices and how to overcome them.",
    image: unsplashImages.services.cloud
  },
  {
    id: 6,
    title: "Blockchain Technology: Beyond Cryptocurrency",
    category: "Blockchain",
    date: "March 18, 2023",
    author: "Pritish Dhal",
    excerpt: "Explore the diverse applications of blockchain technology beyond cryptocurrency and how it's transforming various industries.",
    image: unsplashImages.services.cloud
  }
];

const categories = [
  { name: "Web Development", count: 12 },
  { name: "Mobile Development", count: 8 },
  { name: "UI/UX Design", count: 10 },
  { name: "Cloud Solutions", count: 7 },
  { name: "DevOps", count: 5 },
  { name: "Blockchain", count: 3 },
  { name: "IT Consulting", count: 6 }
];

const popularPosts = [
  {
    id: 1,
    title: "10 Essential DevOps Tools Every Team Should Use",
    date: "July 5, 2023",
    image: unsplashImages.services.cloud
  },
  {
    id: 2,
    title: "The Role of AI in Modern Web Applications",
    date: "June 28, 2023",
    image: unsplashImages.services.webDev
  },
  {
    id: 3,
    title: "Responsive Design: Best Practices for 2023",
    date: "June 20, 2023",
    image: unsplashImages.services.uiUx
  },
  {
    id: 4,
    title: "Securing Your Cloud Infrastructure: A Comprehensive Guide",
    date: "June 12, 2023",
    image: unsplashImages.services.cloud
  }
];

const tags = [
  "Web Development", "Mobile Apps", "UI/UX", "Cloud", "DevOps",
  "Blockchain", "AI", "Machine Learning", "React", "Angular",
  "Node.js", "Python", "AWS", "Azure", "Google Cloud",
  "Docker", "Kubernetes", "Microservices", "API", "Security"
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <BlogContainer>
          <SectionTitle
            title="Our Blog"
            subtitle="Insights, tips, and industry news from the Wipster Technologies team."
          />
          
          <BlogHeader>
            <div>
              <h2>Latest Articles</h2>
            </div>
            <SearchBar>
              <FaSearch />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>
          </BlogHeader>
          
          <BlogLayout>
            <BlogMain>
              <FeaturedPost>
                <div className="image">
                  <img src={getUnsplashImage(unsplashImages.services.webDev)} alt="Featured Post" />
                </div>
                <div className="content">
                  <span className="category">Technology</span>
                  <h2>Digital Transformation: Strategies for Business Growth in 2023</h2>
                  <div className="meta">
                    <div className="item">
                      <FaCalendarAlt />
                      <span>July 10, 2023</span>
                    </div>
                    <div className="item">
                      <FaUser />
                      <span>Pritish Dhal</span>
                    </div>
                    <div className="item">
                      <FaTag />
                      <span>Digital Transformation</span>
                    </div>
                  </div>
                  <p>
                    Digital transformation is no longer optional for businesses looking to remain competitive in today's rapidly evolving marketplace. This article explores effective strategies for implementing digital transformation initiatives that drive business growth, enhance customer experience, and improve operational efficiency.
                  </p>
                  <Button
                    as={Link}
                    to="/blog/digital-transformation-strategies"
                    variant="primary"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                  >
                    Read More
                  </Button>
                </div>
              </FeaturedPost>
              
              <PostsGrid>
                {blogPosts.map((post, index) => (
                  <PostCard
                    key={post.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    variants={cardVariants}
                  >
                    <div className="image">
                      <img src={getUnsplashImage(post.image)} alt={post.title} />
                    </div>
                    <div className="content">
                      <span className="category">{post.category}</span>
                      <h3>{post.title}</h3>
                      <div className="meta">
                        <div className="item">
                          <FaCalendarAlt />
                          <span>{post.date}</span>
                        </div>
                        <div className="item">
                          <FaUser />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <p>{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="read-more">
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </PostCard>
                ))}
              </PostsGrid>
              
              <Pagination>
                <div className="page-item">
                  <a href="#" className="active">1</a>
                </div>
                <div className="page-item">
                  <a href="#">2</a>
                </div>
                <div className="page-item">
                  <a href="#">3</a>
                </div>
                <div className="page-item">
                  <a href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </Pagination>
            </BlogMain>
            
            <BlogSidebar>
              <SidebarSection>
                <h3>Categories</h3>
                <CategoryList>
                  {categories.map((category) => (
                    <li key={category.name}>
                      <a href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {category.name}
                        <span>{category.count}</span>
                      </a>
                    </li>
                  ))}
                </CategoryList>
              </SidebarSection>
              
              <SidebarSection>
                <h3>Popular Posts</h3>
                <PopularPostList>
                  {popularPosts.map((post) => (
                    <PopularPostItem key={post.id}>
                      <div className="image">
                        <img src={getUnsplashImage(post.image)} alt={post.title} />
                      </div>
                      <div className="content">
                        <h4>
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <div className="date">
                          <FaCalendarAlt />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </PopularPostItem>
                  ))}
                </PopularPostList>
              </SidebarSection>
              
              <SidebarSection>
                <h3>Tags</h3>
                <TagCloud>
                  {tags.map((tag) => (
                    <a key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tag}
                    </a>
                  ))}
                </TagCloud>
              </SidebarSection>
            </BlogSidebar>
          </BlogLayout>
        </BlogContainer>
      </Section>
      
      <CTASection>
        <SectionTitle
          title="Subscribe to Our Newsletter"
          subtitle="Stay updated with the latest insights and news from Wipster Technologies."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <Button
            as={Link}
            to="/subscribe"
            size="large"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default Blog;
