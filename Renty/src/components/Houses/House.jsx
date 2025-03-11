import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useLocation } from "react-router-dom";
import "./House.css";
import { FaMapMarkerAlt, FaBed, FaRulerCombined } from "react-icons/fa";
import { BsTextarea } from "react-icons/bs";

const House = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category") || "sale";

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const start = (currentPage - 1) * pageSize;
                const end = start + pageSize - 1;

                const { data, error } = await supabase
                    .from("properties")
                    .select("*")
                    .eq("category", category)
                    .range(start, end);

                if (error) throw error;

                setProperties(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [currentPage, category]);

    const handleBookNow = (property) => {
        const message = `Hello, I am interested in booking the following property:\n\n` +
            `Title: ${property.title}\n` +
            `Location: ${property.location}\n` +
            `Price: ${property.price}\n` +
            `Beds: ${property.beds}\n` +
            `Size: ${property.size}\n` +
            `Area: ${property.area}\n\n` +
            `Image: ${property.image}`;

        const whatsappUrl = `https://wa.me/2349167560387?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (loading) return <p>Loading properties...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="houses">
            <div className="container">
                <div className="property">
                    <div className="property-list">
                        {properties.length > 0 ? (
                            properties.map((property) => (
                                <div key={property.id} className="property-card">
                                    <img
                                        src={property.image}
                                        alt="Property"
                                        className="property-image"
                                        onError={(e) => (e.target.src = "/fallback-image.jpg")}
                                    />
                                    <div className="property-info">
                                        <p>
                                            <FaMapMarkerAlt /> {property.location}
                                        </p>
                                        <div className="details">
                                            <span>
                                                <FaBed style={{ marginRight: "5px" }} /> {property.beds} bed
                                            </span>
                                            <span>
                                                <FaRulerCombined style={{ marginRight: "5px" }} /> {property.size}
                                            </span>
                                            <span>
                                                <BsTextarea style={{ marginRight: "5px" }} /> {property.area}
                                            </span>
                                        </div>
                                        <div className="actions">
                                            <button className="book-btn" onClick={() => handleBookNow(property)}>Book Now</button>
                                            <span className="price">{property.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No properties found.</p>
                        )}
                    </div>
                    <div className="pagination">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <span> Page {currentPage} </span>
                        <button
                            disabled={properties.length < pageSize}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default House;