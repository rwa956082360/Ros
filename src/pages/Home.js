import React from "react";

function Home() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://www.matichonacademy.com/wp-content/uploads/2021/03/thai-food-som-tum-papaya-salad.jpg" class="d-block w-50" alt="..."/>
            <div class="carousel-caption d-none d-md-block text-end">
              <h5>เมนู ส้มตำ</h5>
              <p>ส้มตำเป็นอาหารที่เหมาะสำหรับทุกคนที่ชื่นชอบรสชาติแซ่บ ๆ และสดชื่น เป็นเมนูที่เหมาะกับการทานในทุกโอกาส ไม่ว่าจะเป็นมื้อกลางวันหรือมื้อเย็น</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://img.wongnai.com/p/1920x0/2021/08/09/f5ff71c37a2c4101b895432aae1ac01a.jpg" class="d-block w-50" alt="..."/>
            <div class="carousel-caption d-none d-md-block text-end">
              <h5>เมนู ผัดไทย</h5>
              <p >ผัดไทยเป็นหนึ่งในเมนูที่โดดเด่น</p>
              <p >มีรสชาติกลมกล่อมผสมผสานระหว่างรสเปรี้ยว</p>
              <p >เป็นที่นิยมในต่างชาติ และ ในไทย</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/04/24/5608757681874e1ea5df1aa41d5b2e3d_How_To_Make_Tom_Yam_Kung_The_Epitome_Of_Delicious_And_Nutritious_Thai_Cuisine3.jpg" class="d-block w-50" alt="..."/>
            <div class="carousel-caption d-none d-md-block text-end">
              <h5>เมนู ต้มยำกุ้งแม่น้ำไทย</h5>
              <p>ต้มยำกุ้งเป็นเมนูที่อัดแน่นไปด้วยรสชาติและสมุนไพรไทยที่มีประโยชน์ สามารถทานได้ทุกโอกาส ไม่ว่าจะเป็นการทานคู่กับข้าวสวยร้อน ๆ หรือเส้นขนมจีนที่ช่วยเพิ่มความอร่อยให้กับอาหารจานนี้</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
      

    );
  }
  
export default Home;
