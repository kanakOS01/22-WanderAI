import { useEffect, useState } from "react";
const BackgroundImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "",
    "",
    "",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const backgroundImageStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundImage: images[currentIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: "slideshow 5s infinite",
  };
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide flex-wrap"
      data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active"style={{height:"500px",width:"100%",margin:"auto",overflow:"hidden"}} >
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1708978920837-da1e703981cc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1552432552-06c0b0a94dda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://wallpapercave.com/wp/wp8788367.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://images.unsplash.com/photo-1619947494583-29fc109e01d7?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item"style={{height:"500px"}} >
          <img src="https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default BackgroundImage;
