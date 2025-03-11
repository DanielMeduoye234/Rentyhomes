import React, { useState, useEffect, useRef } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import './Blogs.css';

const Blogs = () => {
    const blogs = [
        { title: "Editorial House", description: "JL. Kencana oke. No2 universen", image: "./house1.jpg" },
        { title: "Modern Villa", description: "Sunset Boulevard, CA", image: "./house2.jpg" },
        { title: "Luxury House", description: "Palm Beach, Florida", image: "./house3.jpg" },
        { title: "Cozy Cabin", description: "Snowy Hills, Norway", image: "./house4.jpg" },
        { title: "Glass Mansion", description: "New York, USA", image: "./house5.jpg" },
        { title: "Beachfront Villa", description: "Malibu, California", image: "./house6.jpg" },
    ];

    const totalSlides = blogs.length;
    const itemsPerPage = 4;
    const [currentIndex, setCurrentIndex] = useState(itemsPerPage);
    const carouselRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Clone images for infinite scrolling
    const infiniteBlogs = [...blogs.slice(-itemsPerPage), ...blogs, ...blogs.slice(0, itemsPerPage)];

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => setCurrentIndex(totalSlides), 0);
        } else if (currentIndex === totalSlides + itemsPerPage) {
            setTimeout(() => setCurrentIndex(itemsPerPage), 0);
        }
    }, [currentIndex, totalSlides]);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextSlide();
        }

        if (touchStartX.current - touchEndX.current < -50) {
            prevSlide();
        }
    };

    return (
        <div className='Blog'>
            <div className="container">
                <div className="blog-top">
                    <div className="blog-top-right">
                        <h5>Popular</h5>
                        <h2>Homes for Renty News And Stories</h2>
                    </div>
                    <div className="blog-top-left">
                        <FiArrowLeftCircle className='blogs-icon' size={'40px'} onClick={prevSlide} color='white' />
                        <FiArrowRightCircle className='blogs-icon' size={'40px'} onClick={nextSlide} color='white' />
                    </div>
                </div>
                <div className="blog-btm">
                    <div className="blog-carousel">
                        <div 
                            className="blog-track" 
                            ref={carouselRef}
                            style={{ transform: `translateX(-${currentIndex * (300 + 20)}px)` }} // Adjust for spacing
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {infiniteBlogs.map((blog, index) => (
                                <div key={index} className="blog-card">
                                    <img src={blog.image} alt={blog.title} className="blog-image" />
                                    <div className="blog-content">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;