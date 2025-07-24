import React, { useState } from "react";
import styles from './Portfolio.module.css';


export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, src: "/imgi_1_poert1.png", alt: "Project 1" },
    { id: 2, src: "/imgi_2_port2.png", alt: "Project 2" },
    { id: 3, src: "/imgi_3_port3.png", alt: "Project 3" },
    { id: 4, src: "/imgi_1_poert1.png", alt: "Project 4" },
    { id: 5, src: "/imgi_2_port2.png", alt: "Project 5" },
    { id: 6, src: "/imgi_3_port3.png", alt: "Project 6" },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center">Portfolio Component</h1>
      <div className="row g-4">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <div
              className={`position-relative ${styles.imageWrapper}`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img src={item.src} alt={item.alt} className="img-fluid w-100" />
              <div className={styles.overlay}>
                <span>+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal d-block bg-dark bg-opacity-75 position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="img-fluid shadow-lg rounded"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </div>
  );
}
