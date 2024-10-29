import React, { useState, useEffect } from 'react';
import '../assets/Componentcss/Heritage.css'; 
import image1 from '../assets/images/Heritage/Ditsong-Museum1.png'; 
import image2 from '../assets/images/Heritage/Fort_Klapperkop_Pretoria.jpg';
import image3 from '../assets/images/Heritage/TownHall.png';
import image4 from '../assets/images/Heritage/burgersPark.png'; 
import image5 from '../assets/images/Heritage/churchSquare.png';
import image6 from '../assets/images/Heritage/theatre.png';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for the carousel items
  const items = [
    {
      title: 'Union Buildings',
      description: 'In 1909, Herbert Baker designed the Union Buildings in Pretoria, the South African governments administrative headquarters. Construction began in 1910, with the cornerstone laid on November 26, and was completed in November 1913 at a cost of £1,180,000, making it the largest building project in South Africa at the time. Situated on Meintjieskop, the Union Buildings overlook Pretoria and feature beautiful gardens, the Delville Wood War Memorial honoring World War I troops, and statues of the country’s first prime ministers.',
      imgUrl: image1,
    },
    {
      title: 'South African State Theatre',
      description: 'Designed by Hans and Roelf Botha, the State Theatre covers the eastern portion of the block on the corner of Church and Prinsloo Streets, and houses five theatres and a square; On completion in 1981, it was the largest centre of its kind in the southern hemisphere. Commissioned art by South African artists decorate the inside walls and foyers.',
      imgUrl: image2,
    },
    {
        title: 'City Hall',
        description: 'The City Hall was built to celebrate Pretoria’s city status obtained in 1931; It was designed by FG McIntosh and John Lockwood Hall; the two statues in front of the building depict Voortrekker leaders Marthinus Pretorius and Andries Pretorius, his father, after whom Pretoria was named when it was established in 1855.',
        imgUrl: image3,
      },
      {
        title: 'Church Square',
        description: 'The Palace of Justice, headquarters of the Gauteng Provincial Division of the Supreme Court, is part of Church Squares northern façade. Designed by Dutch architect Sytze Wierda in Italian Renaissance style, it dates back to the late 19th century. Central to the square is Anton van Wouw’s statue of Paul Kruger, with bronze figures erected in 1954. The Ou Raadsaal, also designed by Wierda, was built by Scotsman JJ Kirkness in 1887. Parades take place at the square on Wednesdays.',
        imgUrl: image3,
      }, {
        title: 'National Zoological Gardens',
        description: 'This is the finest zoo in South Africa and one of the best in the world; The Pretoria Zoo is an 80-hectare oasis nestled in the heart of Pretoria’s city centre; It houses 97 mammal species, 161 bird species, 279 fish species, 106 reptile species and seven amphibian species; At least 4 300 animals call the Pretoria Zoo home.',
        imgUrl: image4,
      },
      {
        title: 'Sammy Marks Square',
        description: 'The square offers a wonderful array of speciality stores integrated with the piazza and spacious malls; The Sammy Marks building is the only remaining example of neo-Dutch architecture in Gauteng; The Square Centre houses the City of Tshwane’s community library.',
        imgUrl: image5,
      },
      {
        title: 'South African Reserve Bank',
        description: 'At 150 metres high, the Reserve Bank is the tallest building in Pretoria; The building is a combination of reflecting glass and black Rustenburg granite; The architects Burg Dohery and Bryant built the 37-storey building; The open square in front of the building is landscaped with fountains and terraces; The stainless steel, non-representational sculpture, Untitled, by Johan van Heerden was especially commissioned to complement the building.',
        imgUrl: image6,
    },
  
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 7 seconds per slide

    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? items.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === items.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="carousel" id='heritageSites'>
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
            }}
          >
            <div className="content">
              <h1 className="title">{item.title}</h1>
              <p className="des">{item.description}</p>
              <div className="btn">
                <button>Learn More</button>
                <button>Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      
    </div>
  );
};

export default Carousel;
