import "./FooterPage.css";
function FooterPage() {
  return (
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
            <a href="">
              <img src="src\imageProject\original-products.svg" alt="" /> ضمانت
              اصل بودن کالا{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <img src="src\imageProject\days-return.svg" alt="" /> هفت روز
              ضمانت برگشت کالا{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <img src="src\imageProject\support.svg" alt="" /> هفت روز هفته،
              بیست و چهار ساعته
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <img src="src\imageProject\cash-on-delivery.svg" alt="" />
              امکان پرداخت در محل
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              {" "}
              <img src="src\imageProject\express-delivery.svg" alt="" /> امکان
              تحویل اکسپرس
            </a>
          </li>
        </ul>
      </div>
      <div className="body4">
        <div className="witDigikala">
          <h1>با دیجی‌کالا</h1>
          <ul>
            <li>
              {" "}
              <a href="">اتاق خبر دیجی‌کالا</a>
            </li>
            <li>
              {" "}
              <a href="">فروش در دیجی‌کالا</a>
            </li>
            <li>
              {" "}
              <a href="">فرصت های شغلی</a>
            </li>
            <li>
              {" "}
              <a href="">گزارش تخلف در دیجی‌کالا</a>
            </li>
            <li>
              {" "}
              <a href="">تماس با دیجی‌کالا</a>
            </li>
            <li>
              {" "}
              <a href="">درباره دیجی‌کالا</a>
            </li>
          </ul>
        </div>
        <div className="customer">
          <h1>خدمات مشتریان</h1>
          <ul>
            <li>
              {" "}
              <a href="">پاسخ به پرسش های متداول</a>
            </li>
            <li>
              {" "}
              <a href="">رویه های بازگرداندن کالا</a>
            </li>
            <li>
              {" "}
              <a href="">شرایط استفاده</a>
            </li>
            <li>
              {" "}
              <a href="">حریم خصوصی</a>
            </li>
            <li>
              {" "}
              <a href="">گزارش باگ</a>
            </li>
          </ul>
        </div>
        <div className="shopigGuide">
          <h1> راهنمای خرید از دیجیکالا</h1>
          <ul>
            <li>
              {" "}
              <a href="">نحوه ثبت سفارش</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">رویه ارسال سفارش</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">شیوه های پرداخت</a>{" "}
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
      <div className="body5"></div>
      <div className="body6"></div>
      <div className="body7"></div>
    </div>
  );
}

export default FooterPage;
