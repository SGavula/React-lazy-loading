import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {

  return (
    <div className="App">
      {/*<LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image1.jpeg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image2.jpeg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image3.jpg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image4.jpeg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image5.jpeg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image1.jpeg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image2.jpeg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image3.jpg"} height={500} width={800} />
      <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image4.jpeg"} height={500} width={800} />
  <LazyLoadImage effect="blur" src={"https://ik.imagekit.io/demo/img/image5.jpeg"} height={500} width={800} />*/}

        <img src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image3.jpg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image3.jpg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-800,h-500" />
        <img src="https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-800,h-500" />
      
    </div>
  );
}

export default App;
