import "./Main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export default function Main() {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="wrap">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="face" key={d.id}>
              <a>
                <img className="imgStory" src={d.img} />
              </a>

              <div>
                <p className="nameStory">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="wrap2">
        <Slider {...settings2}>
          <a href="">
            <img src="src\imageProject\mainImg\1.webp" alt="" />
          </a>
          <a href="">
            <img src="" alt="src\imageProject\mainImg\2.webp" />
          </a>
          <a href="">
            <img src="" alt="src\imageProject\mainImg\3.gif" />
          </a>
          <a href="">
            <img src="src\imageProject\mainImg\4.webp" alt="" />
          </a>
          <a href="">
            <img src="src\imageProject\mainImg\5.webp" alt="" />
          </a>
          <a href="">
            <img src="src\imageProject\mainImg\6.webp" alt="" />
          </a>
          <a href="">
            <img src="src\imageProject\mainImg\7.webp" alt="" />
          </a>
          <a href="">
            <img src="src\imageProject\mainImg\ 8.webp" alt="" />
          </a>
          <a href="">
            <img src="src\imageProject\mainImg\ 9.gif" alt="" />
          </a>
        </Slider>
        <div className="prev1">
        <a className="prev" onClick="plusSlides(-1)">
          ❮
        </a>
        </div>
        <div className="next1">
        <a className="next" onClick="plusSlides(1)">
          ❯
        </a>
        </div>
       
      </div>
      <div className="wrap3">
        <div className="containerWrap3">
            <ul className="ulWrap3">
                <li><a href="https://www.digikalajet.com/?utm_source=digikala&utm_medium=circle_badge&utm_campaign=jet&promo_name=jet&promo_position=circle_badge"> <img src="src\imageProject\mainImg\1\digijet.png" alt="" /><p>دیجیکالا جت</p></a></li>
                <li><Link to="/login"> <img src="src\imageProject\mainImg\1\reciveVam.png" alt="" /><p>دریافت وام</p></Link></li>
                <li><a href="https://www.digistyle.com/"><img src="src\imageProject\mainImg\1\harajStyle.png" alt="" /> <p>حراج استایل</p></a></li>
                <li><a href="https://about.digikala.com/landing/back-to-school1403/"> <img src="src\imageProject\mainImg\1\returnToSchool.png" alt="" /><p>بازگشت به مدرسه</p></a></li>
                <li> <Link to="/advertising"> <img src="src\imageProject\mainImg\1\tablighatFroshande.png" alt="" /><p>تبلیغات فروشندگان</p></Link></li>
                <li> <Link to="/advertising"> <img src="src\imageProject\mainImg\1\firstGiftBye.png" alt="" /><p>جایزه اول خرید</p></Link></li>
                <li><Link to="foodBeverage"><img src="src\imageProject\mainImg\1\manyTakhfifSupperMarket.png" alt="" /><p>سوپر مارکت پرتخفیف</p></Link></li>
                <li> <Link to="/cheque"> <img src="src\imageProject\mainImg\1\KharidCheki.png" alt="" /><p>خرید چکی</p></Link></li>
                <li> <Link to="digiPlus"><img src="src\imageProject\mainImg\1\digi.png" alt="" /> <p>دیجی پلاس</p></Link></li>
                <li className="moreLi"> <a href=""><img src="src\imageProject\more-horiz.svg" alt="" /><p>بیشتر</p></a></li>
            </ul>
        </div>
      </div>
    </>
  );
}
const data = [
  {
    id: 1,
    name: "image1",
    img: "src/ImageData/images.jpeg",
  },
  {
    id: 2,
    name: "image2",
    img: "src/ImageData/images(1).jpeg",
  },
  {
    id: 3,
    name: "image3",
    img: "src/ImageData/images(2).jpeg",
  },
  {
    id: 4,
    name: "image4",
    img: "src/ImageData/images(3).jpeg",
  },
  {
    id: 5,
    name: "image5",
    img: "src/ImageData/images(4).jpeg",
  },
  {
    id: 6,
    name: "image6",
    img: "src/ImageData/images(5).jpeg",
  },
  {
    id: 7,
    name: "image7",
    img: "src/ImageData/images(6).jpeg",
  },
  {
    id: 8,
    name: "image8",
    img: "src/ImageData/images(7).jpeg",
  },
  {
    id: 9,
    name: "image9",
    img: "src/ImageData/images(8).jpeg",
  },
  {
    id: 10,
    name: "image10",
    img: "src/ImageData/images(9).jpeg",
  },
  {
    id: 11,
    name: "image11",
    img: "src/ImageData/images(10).jpeg",
  },
  {
    id: 12,
    name: "image12",
    img: "src/ImageData/images(11).jpeg",
  },
  {
    id: 13,
    name: "image13",
    img: "src/ImageData/images(12).jpeg",
  },
  {
    id: 14,
    name: "image14",
    img: "src/ImageData/images(13).jpeg",
  },
  {
    id: 15,
    name: "image15",
    img: "src/ImageData/images(14).jpeg",
  },
  {
    id: 16,
    name: "image16",
    img: "src/ImageData/images(15).jpeg",
  },
  {
    id: 17,
    name: "image17",
    img: "src/ImageData/images(16).jpeg",
  },
  {
    id: 18,
    name: "image18",
    img: "src/ImageData/images(17).jpeg",
  },
  {
    id: 19,
    name: "image19",
    img: "src/ImageData/images(18).jpeg",
  },
  {
    id: 20,
    name: "image20",
    img: "src/ImageData/images(19).jpeg",
  },
];
