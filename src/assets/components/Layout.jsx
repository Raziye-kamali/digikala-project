import { Link , Outlet } from "react-router-dom"
import "./Layout.css"
import Content from "./Content"

export default function Layout(){

    return(
       <div>
        <nav>
        <div className="HeadBarContainer">
      <div className="fixHead flex justify-between">
        <div className="leftHead flex p-4">
          <div>
            <button className="leftHeadBtn pr-3 pt-2">
              <span className="material-symbols-outlined pl-2">
                shopping_bag
              </span>
            </button>
          </div>
          <div className="pl-3">
            <button className="rightHeadBtn flex pl-5 pt-2 font-bold">
              <div className="router-react">
                <Link to={"/login"}> ورود|ثبت نام</Link>
{/*            
                <button onClick={() => gotoOtherPage()}>ورود / ثبت نام</button> */}
              </div>

              <div className="pl-1">
                <span className="material-symbols-outlined ">login</span>
              </div>
            </button>
          </div>
        </div>
        <div className="rightHead p-4">
          <div className="rightHeadDetail flex ">
            <div className="search ">
              <form className="flex" action="#">
                <button>
                  <input
                    className="inputBtn"
                    type="text"
                    placeholder="جستجو"
                    name="search"
                  />
                  <i className="fa fa-search pl-5 pr-5 pt-2"></i>
                </button>
              </form>
            </div>
            <div className="iconHead">
              <button>
                <img
                  className="imgSearch"
                  src="src\imageProject\headericon.svg"
                  alt=""
                />
              </button>
          
            </div>
          </div>
        </div>
      </div>
      <div className="floatHead flex">
        <div className="leftFloatHead flex pt-2 pl-6">
          <a className="flex" href="#">
            <p>لطفا شهر خود را انتخاب کنید</p>
            <span className="material-symbols-outlined pl-2">location_on</span>
          </a>
        </div>
        <div className="rightFloatHead ">
          <ul className="flex">
            <li>
              <Link to="/sell" className="flex">
                <p>!در دیجیکالا بفروشید</p>{" "}
              </Link>
            </li>
            <li className="soal">
              <Link to="/question" className="flex ">
                <p>سوالی دارید؟</p>
              </Link>
            </li>
            <li>
              <Link to="suggestion" className="flex">
                <p>تخفیف ها و پیشنهاد ها</p>
                <i className="material-symbols-outlined">heap_snapshot_large</i>
              </Link>
            </li>
            <li>
              <Link to="bestSeller" className="flex">
                <p> پرفروش ترین ها</p>
                <i className="material-symbols-outlined">
                  local_fire_department
                </i>
              </Link>
            </li>
            <li>
              <Link to="giftCard" className="flex">
                <p>کارت هدیه</p>
                <i className="material-symbols-outlined">credit_card</i>
              </Link>
            </li>
            <li>
              <Link to="supperMarket" className="flex">
                <p> سوپرمارکت</p>
                <i className="material-symbols-outlined">shopping_cart</i>
              </Link>
            </li>
            <li>
              <Link to="amazing" className="flex">
                <p>شگفت انگیزها</p>
                <i className="material-symbols-outlined">humidity_percentage</i>
              </Link>
            </li>

            <li className="groupKala">
              <Link to="category" className="flex font-bold ">
                <p> دسته بندی کالا ها</p>
                <i className="material-symbols-outlined ">menu</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
            
        </nav>
        <Outlet />
        <nav> 
        <div className="FooterContainer">
      <div className="body1">
        <div className="leftBody1">
          <a href="#">
            <span className="material-symbols-outlined">keyboard_arrow_up</span>
            <button>بازگشت به بالا</button>
          </a>
        </div>
        <div className="rightBody1">
          <div>
            <img src="src\imageProject\FooterIcon.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="body2">
        <p>
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۰۲۱-۹۱۰۰۰۱۰۰ | ۷ روز هفته، ۲۴ ساعته
          پاسخگوی شما هستیم
        </p>
      </div>
      <div className="body3">
        <ul className="ulBody3">
          <li>
            {" "}
            <Link to="orginalProduct">
              <img src="src\imageProject\original-products.svg" alt="" /> ضمانت
              اصل بودن کالا{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="dayReturn">
              <img src="src\imageProject\days-return.svg" alt="" /> هفت روز
              ضمانت برگشت کالا{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="support">
              <img src="src\imageProject\support.svg" alt="" /> هفت روز هفته،
              بیست و چهار ساعته
            </Link>
          </li>
          <li>
            {" "}
            <Link to="reciveHome">
              <img src="src\imageProject\cash-on-delivery.svg" alt="" />
              امکان پرداخت در محل
            </Link>
          </li>
          <li>
            {" "}
            <Link to="expresDelivery">
              {" "}
              <img src="src\imageProject\express-delivery.svg" alt="" /> امکان
              تحویل اکسپرس
            </Link>
          </li>
        </ul>
      </div>
      <div className="body4">
        <div className="witDigikala">
          <h1>با دیجی‌کالا</h1>
          <ul>
            <li>
              {" "}
              <Link to="newsHome">اتاق خبر دیجی‌کالا</Link>
            </li>
            <li>
              {" "}
              <Link to="sellInDidikala">فروش در دیجی‌کالا</Link>
            </li>
            <li>
              {" "}
              <Link to="jobInDigikala">فرصت های شغلی</Link>
            </li>
            <li>
              {" "}
              <Link to="violationReport">گزارش تخلف در دیجی‌کالا</Link>
            </li>
            <li>
              {" "}
              <Link to="callDigikala">تماس با دیجی‌کالا</Link>
            </li>
            <li>
              {" "}
              <Link to="aboutDigikala">درباره دیجی‌کالا</Link>
            </li>
          </ul>
        </div>
        <div className="customer">
          <h1>خدمات مشتریان</h1>
          <ul>
            <li>
              {" "}
              <Link to="answerQuestion">پاسخ به پرسش های متداول</Link>
            </li>
            <li>
              {" "}
              <Link to="returnProduct">رویه های بازگرداندن کالا</Link>
            </li>
            <li>
              {" "}
              <Link to="useConditional">شرایط استفاده</Link>
            </li>
            <li>
              {" "}
              <Link to="privacy">حریم خصوصی</Link>
            </li>
            <li>
              {" "}
              <Link to="bagReport">گزارش باگ</Link>
            </li>
          </ul>
        </div>
        <div className="shopigGuide">
          <h1> راهنمای خرید از دیجی‌کالا</h1>
          <ul>
            <li>
              {" "}
              <Link to="registerOrder">نحوه ثبت سفارش</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="sendOrder">رویه ارسال سفارش</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="payment">شیوه های پرداخت</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="withUs">
          <h1>همراه ما باشید</h1>
          <div className="containerWithUs">
            <div className="withUsIcon">
                <ul className="WithUsUl"> 
                    <li> <a href=""><img src="src\imageProject\instagram.svg" alt="" /></a></li>
                    <li> <a href=""><img src="src\imageProject\twitter.svg" alt="" /></a></li>
                    <li> <a href=""><img src="src\imageProject\social-linkedin.svg" alt="" /></a></li>
                    <li> <a href=""><img src="src\imageProject\aparat.svg" alt="" /></a></li>
                </ul>
            </div>
            <div className="emailBox">
                <h1 > با ثبت ایمیل، از جدیدترین تخفیف ها با خبر شوید </h1>
                <div className="detailemail">
                    <input type="email" placeholder="ایمیل شما" />
                    <button>ثبت</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body5">
        <div className="body5Container">
          <div className="body-5">
          <div className="leftBody5">  
            <div className="more"><Link to="moreDownload"><img src="src\imageProject\more-horiz.svg" alt="" /></Link></div>
            <div className="sibApp"> <a href="https://sibapp.com/applications/digikala?metrix_token=4gluyi&metrix_user_id=713bcce3-7249-4235-b14a-51293c341cfa&utm_source=ios&utm_campaign=sibapp&utm_content=home_page"><img src="src\imageProject\sib-app.svg" alt="" /></a> </div>
            <div className="myket"><a href="https://myket.ir/app/com.digikala?utm_source=search-ads-gift&utm_source=myket&utm_medium=cpc&utm_campaign=home_page"><img src="src\imageProject\myket.svg" alt="" /></a> </div>
            <div className="bazar"><a href="https://cafebazaar.ir/app/com.digikala?metrix_token=k3of5r&metrix_user_id=d27cb094-d91e-4bd1-a63d-30e7ca3d2014&utm_source=cafebazaar&utm_campaign=home_page"><img src="src\imageProject\coffe-bazzar.svg" alt="" /></a></div>
          </div>
          <div className="rightBody5 flex">
            <p>دانلود اپلیکیشن دیجی‌کالا</p>
            <div className="downloadIcon">
              <img src="src\imageProject\footerlogo2.webp" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="body6 flex">
        <div className="leftBody6 flex">
         <div className="logo6"><a href=""><img src="src\imageProject\forFotter\logo.png" alt="" /></a></div>
         <div className="kasbokar"><a href=""><img src="src\imageProject\forFotter\kasbokar.webp" alt="" /></a></div>
         <div className="rezi"><a href=""><img src="src\imageProject\forFotter\rezi.webp" alt="" /></a></div>
        </div>
        <div className="rightBody6">
        
            <h1 className="geeks">فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
            </h1>
          
            <Content />
        </div>
      </div>
      <div className="body7">
        <p>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
      </div>
    </div>
        </nav>
       </div>
    )
} 