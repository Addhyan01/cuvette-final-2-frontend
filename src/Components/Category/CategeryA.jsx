import React from 'react'
import './CategeryA.css'

import categories from "../../data/categories";
export default function CategeryA() {
    return (
        <>
            <div className="category-container">
                <h2 className="category-header">
                    Order.uk Popular Categories <span role="img" aria-label="emoji">🍔</span>
                </h2>
                <div className="category-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="category-image"
                            />
                            <div className="category-details">
                                <h3 className="category-title">{category.title}</h3>
                                <p className="category-restaurants">{category.restaurants}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
