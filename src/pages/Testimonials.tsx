import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { getUnsplashImage, unsplashImages } from '../utils/unsplashImages';

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[16]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space[8]};
  position: relative;
  
  .quote-icon {
    position: absolute;
    top: ${({ theme }) => theme.space[6]};
    right: ${({ theme }) => theme.space[6]};
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.05);
  }
  
  .stars {
    display: flex;
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    svg {
      color: #FFD700;
      margin-right: ${({ theme }) => theme.space[1]};
    }
  }
  
  .quote {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[6]};
    font-style: italic;
  }
  
  .client {
    display: flex;
    align-items: center;
    
    .client-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: ${({ theme }) => theme.space[4]};
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .client-info {
      .name {
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: ${({ theme }) => theme.space[1]};
      }
      
      .position {
        color: ${({ theme }) => theme.colors.textLight};
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }
      
      .company {
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }
    }
  }
`;

const FeaturedTestimonial = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[10]};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.space[16]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 200px;
    opacity: 0.1;
    font-family: serif;
  }
  
  .content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .quote {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin-bottom: ${({ theme }) => theme.space[8]};
    font-style: italic;
  }
  
  .client {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .client-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: ${({ theme }) => theme.space[4]};
      border: 3px solid ${({ theme }) => theme.colors.light};
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .name {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      margin-bottom: ${({ theme }) => theme.space[1]};
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
    
    .position {
      opacity: 0.8;
      margin-bottom: ${({ theme }) => theme.space[1]};
    }
    
    .company {
      opacity: 0.8;
    }
  }
`;

const VideoTestimonials = styled.div`
  margin-bottom: ${({ theme }) => theme.space[16]};
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  
  .video-info {
    padding: ${({ theme }) => theme.space[6]};
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.space[2]};
    }
    
    p {
      color: ${({ theme }) => theme.colors.textLight};
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

const testimonials = [
  {
    id: 1,
    quote: "Wipster Technologies transformed our outdated systems into a modern, efficient platform. Their team's expertise and dedication to our project exceeded our expectations.",
    name: "Rajesh Kumar",
    position: "CTO",
    company: "Global Healthcare Systems",
    image: unsplashImages.testimonials.client1,
    rating: 5
  },
  {
    id: 2,
    quote: "Working with Wipster was a game-changer for our business. Their mobile app development team delivered a product that our customers love, resulting in significant growth.",
    name: "Priya Sharma",
    position: "CEO",
    company: "InnovateTech Solutions",
    image: unsplashImages.testimonials.client2,
    rating: 5
  },
  {
    id: 3,
    quote: "The UI/UX design team at Wipster completely transformed our user experience. Our conversion rates have increased by 40% since the redesign.",
    name: "Amit Patel",
    position: "Marketing Director",
    company: "RetailPlus",
    image: unsplashImages.testimonials.client3,
    rating: 5
  },
  {
    id: 4,
    quote: "Wipster's cloud migration services helped us modernize our infrastructure while maintaining business continuity. Their expertise saved us time and resources.",
    name: "Ananya Singh",
    position: "IT Director",
    company: "FinSecure Banking",
    image: unsplashImages.testimonials.client4,
    rating: 5
  },
  {
    id: 5,
    quote: "The DevOps implementation by Wipster has revolutionized our development process. We're now deploying updates faster and with greater confidence.",
    name: "Rahul Verma",
    position: "Head of Engineering",
    company: "TechInnovate",
    image: unsplashImages.testimonials.client5,
    rating: 5
  },
  {
    id: 6,
    quote: "Wipster's IT consulting services provided us with a clear technology roadmap that aligned perfectly with our business goals. Their strategic guidance has been invaluable.",
    name: "Neha Gupta",
    position: "COO",
    company: "LogiTech Solutions",
    image: unsplashImages.testimonials.client1,
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <>
      <Hero
        useVideo={false}
      />
      
      <Section>
        <TestimonialsContainer>
          <SectionTitle
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about working with Wipster Technologies."
          />
          
          <FeaturedTestimonial>
            <div className="content">
              <div className="quote">
                "Wipster Technologies has been an invaluable partner in our digital transformation journey. Their team's technical expertise, combined with their understanding of our business needs, delivered results that exceeded our expectations."
              </div>
              <div className="client">
                <div className="client-image">
                  <img src={getUnsplashImage(unsplashImages.testimonials.client1)} alt="Sanjay Mehta" />
                </div>
                <div className="name">Sanjay Mehta</div>
                <div className="position">Chief Information Officer</div>
                <div className="company">Enterprise Solutions Ltd.</div>
              </div>
            </div>
          </FeaturedTestimonial>
          
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardVariants}
              >
                <FaQuoteLeft className="quote-icon" />
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="quote">{testimonial.quote}</div>
                <div className="client">
                  <div className="client-image">
                    <img src={getUnsplashImage(testimonial.image)} alt={testimonial.name} />
                  </div>
                  <div className="client-info">
                    <div className="name">{testimonial.name}</div>
                    <div className="position">{testimonial.position}</div>
                    <div className="company">{testimonial.company}</div>
                  </div>
                </div>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
          
          <VideoTestimonials>
            <SectionTitle
              title="Video Testimonials"
              subtitle="Watch our clients share their experiences working with Wipster Technologies."
              size="medium"
            />
            
            <VideoGrid>
              <VideoCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={cardVariants}
              >
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Client Testimonial - HealthTech Solutions"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>HealthTech Solutions Success Story</h3>
                  <p>How we helped transform their patient management system</p>
                </div>
              </VideoCard>
              
              <VideoCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={cardVariants}
              >
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Client Testimonial - FinTech Innovations"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>FinTech Innovations Partnership</h3>
                  <p>Building a secure and scalable financial platform</p>
                </div>
              </VideoCard>
            </VideoGrid>
          </VideoTestimonials>
        </TestimonialsContainer>
      </Section>
      
      <CTASection>
        <SectionTitle
          title="Ready to Join Our Success Stories?"
          subtitle="Let's discuss how we can help your business achieve its goals."
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
            to="/contact"
            size="large"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get in Touch
          </Button>
        </motion.div>
      </CTASection>
    </>
  );
};

export default Testimonials;
