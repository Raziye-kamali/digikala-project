import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./component/Login";

import "./HeadBar.css";
export const HeadBar = () => {
  return (
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
              <BrowserRouter>
                <Link to="/login">ورود | ثبت نام</Link>
                <Routes>
                 
                    <Route path="login" element={<Login />} >
                  </Route>
                </Routes>
              </BrowserRouter>

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
                  src="src\assets\digikalaImage.png"
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
              <a href="#" className="flex">
                <p>!در دیجیکالا بفروشید</p>{" "}
              </a>
            </li>
            <li className="soal">
              <a href="#" className="flex ">
                <p>سوالی دارید؟</p>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <p>تخفیف ها و پیشنهاد ها</p>
                <i className="material-symbols-outlined">heap_snapshot_large</i>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <p> پرفروش ترین ها</p>
                <i className="material-symbols-outlined">
                  local_fire_department
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <p>کارت هدیه</p>
                <i className="material-symbols-outlined">credit_card</i>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <p> سوپرمارکت</p>
                <i className="material-symbols-outlined">shopping_cart</i>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <p>شگفت انگیزها</p>
                <i className="material-symbols-outlined">humidity_percentage</i>
              </a>
            </li>

            <li className="groupKala">
              <a href="#" className="flex font-bold ">
                <p> دسته بندی کالا ها</p>
                <i className="material-symbols-outlined ">menu</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
