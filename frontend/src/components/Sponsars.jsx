import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Sponsors() {
  const options = {
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    loop: true,
    dots: true,
    nav: true,

    items: 1,
  };

  return (
    <div class="container-xxl py-5">
      <div class="container py-5 px-lg-5">
        <div
          class="text-center pb-4 animated slideInDown"
          data-wow-delay="0.1s"
        >
          
          <h1 class="">Our Sponsors</h1>
          <p class="mb-0">
            Our heartfelt gratitude to our sponsors for their invaluable support
            in making Samudramanthan a great success.
          </p>
          <p class="mb-0">Together, we make waves of change.</p>
        </div>

        <div className="container my-2"></div>

        <div className="row row-cols-1 row-cols-md-1 g-4 my-2 animated slideInRight">
          <div className="spons_width col">
            <div className="card h-100">
              <img src="img\Spons\Vedam.png" class="card-img-top" alt="" />
            </div>
          </div>
          <h5 className="spons_txt my-4">Title Sponsor</h5>
        </div>
        

        <div className="row row-cols-1 row-cols-md-2 g-4 my-2 new animated slideInLeft">
          <div className="spons_width2 col">
            <div className="card">
              <img src="img\Spons\TAI.png" class="card-img-top" alt="" />
            </div>
            <h5 className="spons_txt my-4">Event Sponsor</h5>
          </div>

          <div className="spons_width2 col">
            <div className="card">
              <img src="img\Spons\IRS.png" class="card-img-top" alt="" />
            </div>
            <h5 className="spons_txt my-4">Event Sponsor</h5>
          </div>
        </div>
        {/* col */}
        <div className="row row-cols-1 row-cols-md-3 g-4 my-2 new animated slideInRight">
          <div className="spons_width3 col">
            <div className="card">
              <img src="img\Spons\grse (1).png" class="card-img-top" alt="" />
            </div>
            <h5 className="spons_txt my-4">Event Sponsor</h5>
          </div>

          <div className="spons_width3 col">
            <div className="card">
              <img src="img\Spons\custkart (1).png" class="card-img-top" alt="" />
            </div>
            <h5 className="spons_txt my-4">Event Sponsor</h5>
          </div>

          <div className="spons_width3 col">
            <div className="card">
              <img src="img\Spons\shire (1).png" class="card-img-top" alt="" />
            </div>
            <h5 className="spons_txt my-4">Design Partner</h5>
          </div>

          <div className="spons_width3 col">
            <div className="card">
              <img src="img\Spons\HoverRobotix.png" class="card-img-top" alt="" />
            </div>
            <h5 className="spons_txt my-4">Event Sponsor</h5>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sponsors;
