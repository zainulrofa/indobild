import "./App.css";
import style from "./styles/Main.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const widthOfEachCard = 200;

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="App">
      <Header />
      <main className={style["hero"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className={style["hero-card"]}>
                <h1>
                  Hey! Looking for an interesting event? Let us help you find
                  it.
                </h1>
                <form action="">
                  <div className={style["category"]}>
                    <h5>First, choose a category that you want.</h5>
                    <div className={style["category-dropdown"]}>
                      <p>Category Event</p>
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className={style["location"]}>
                    <h5>Where do you want to go?</h5>
                    <div className={style["location-bar"]}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Search Location" />
                    </div>
                  </div>
                  <div className={style["date"]}>
                    <h5>Fill up your free time!</h5>
                    <div className={style["date-bar"]}>
                      <div className={style["date-title"]}>
                        <i className="fa-solid fa-calendar"></i>
                        <p>Pick a Date!</p>
                      </div>
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className={style["input-btn"]}>
                    <button>Let's Go!</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 offset-md-1 d-flex">
              <div className={style["hero-content"]}>
                <h1>Our Highlighted Event</h1>
                <div className={style["left-btn"]} onClick={handlePrevClick}>
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className={style["right-btn"]} onClick={handleNextClick}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div
                  className={style["event-highlight"]}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    transform: `translateX(${
                      currentIndex * -widthOfEachCard
                    }px)`,
                    transition: "transform 0.5s ease-out",
                  }}
                >
                  <div className={style["card"]}>
                    <div className={style["favorite-bar"]}>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className={style["card-img"]}>
                      <img
                        src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                        alt=""
                      />
                    </div>
                    <div className={style["card-content"]}>
                      <div className={style["card-name"]}>
                        <h5>Coffee Journey 2019</h5>
                      </div>
                      <div className={style["card-date"]}>
                        <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
                      </div>
                      <div className={style["card-address"]}>
                        <p>Indobild, Blugreen Office SBI, 8th Floor</p>
                      </div>
                    </div>
                  </div>
                  <div className={style["card"]}>
                    <div className={style["favorite-bar"]}>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className={style["card-img"]}>
                      <img
                        src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                        alt=""
                      />
                    </div>
                    <div className={style["card-content"]}>
                      <div className={style["card-name"]}>
                        <h5>Coffee Journey 2019</h5>
                      </div>
                      <div className={style["card-date"]}>
                        <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
                      </div>
                      <div className={style["card-address"]}>
                        <p>Indobild, Blugreen Office SBI, 8th Floor</p>
                      </div>
                    </div>
                  </div>
                  <div className={style["card"]}>
                    <div className={style["favorite-bar"]}>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className={style["card-img"]}>
                      <img
                        src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                        alt=""
                      />
                    </div>
                    <div className={style["card-content"]}>
                      <div className={style["card-name"]}>
                        <h5>Coffee Journey 2019</h5>
                      </div>
                      <div className={style["card-date"]}>
                        <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
                      </div>
                      <div className={style["card-address"]}>
                        <p>Indobild, Blugreen Office SBI, 8th Floor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className={style["event"]}>
        <div className="container">
          <h1>Upcoming Event</h1>
        </div>
        <div className={style["event-container"]}>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
          <div className={style["card"]}>
            <div className={style["favorite-bar"]}>
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className={style["card-img"]}>
              <img
                src="https://res.cloudinary.com/dnlwovh4y/image/upload/v1676590353/indobild/FB-Event-1_xpirhr.png"
                alt=""
              />
            </div>
            <div className={style["card-content"]}>
              <div className={style["card-name"]}>
                <h5>Coffee Journey 2019</h5>
              </div>
              <div className={style["card-date"]}>
                <p>1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00</p>
              </div>
              <div className={style["card-address"]}>
                <p>Indobild, Blugreen Office SBI, 8th Floor</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
