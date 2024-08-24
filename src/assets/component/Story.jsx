import "./Story.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Story() {
  const settings = {
dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="wrap">
      <Slider {...settings}>
      {data.map((d) => (
        <div className="face" key={d.id}>
          
          <div >
          <img className="imgStory" src={d.img} />
          </div>

          <div>
            <p className="nameStory">{d.name}</p>
          </div>
        </div>
      ))}
      
      
     
    </Slider>
  
    </div>
  );
}

const data = [
  {
    id:1,
    name: "image1",
    img: "src/ImageData/images.jpeg",
  },
  {
    id:2,
    name: "image2",
    img: "src/ImageData/images(1).jpeg",
  },
  {
    id:3,
    name: "image3",
    img: "src/ImageData/images(2).jpeg",
  },
  {
    id:4,
    name: "image4",
    img: "src/ImageData/images(3).jpeg",
  },
  {
    id:5,
    name: "image5",
    img: "src/ImageData/images(4).jpeg",
  },
  {
    id:6,
    name: "image6",
    img: "src/ImageData/images(5).jpeg",
  },
  {
    id:7,
    name: "image7",
    img: "src/ImageData/images(6).jpeg",
  },
  {
    id:8,
    name: "image8",
    img: "src/ImageData/images(7).jpeg",
  },
  {
    id:9,
    name: "image9",
    img: "src/ImageData/images(8).jpeg",
  },
  {
    id:10,
    name: "image10",
    img: "src/ImageData/images(9).jpeg",
  },
  {
    id:11,
    name: "image11",
    img: "src/ImageData/images(10).jpeg",
  },
  {
    id:12,
    name: "image12",
    img: "src/ImageData/images(11).jpeg",
  },
  {
    id:13,
    name: "image13",
    img: "src/ImageData/images(12).jpeg",
  },
  {
    id:14,
    name: "image14",
    img: "src/ImageData/images(13).jpeg",
  },
  {
    id:15,
    name: "image15",
    img: "src/ImageData/images(14).jpeg",
  },
  {
    id:16,
    name: "image16",
    img: "src/ImageData/images(15).jpeg",
  },
  {
    id:17,
    name: "image17",
    img: "src/ImageData/images(16).jpeg",
  },
  {
    id:18,
    name: "image18",
    img: "src/ImageData/images(17).jpeg",
  },
  {
    id:19,
    name: "image19",
    img: "src/ImageData/images(18).jpeg",
  },
  {
    id:20,
    name: "image20",
    img: "src/ImageData/images(19).jpeg",
  },
];
export default Story;
