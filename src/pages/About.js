import React from 'react';

function About() {
    return (
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row g-4"> {/* g-4 ใช้เพิ่มช่องว่างระหว่างคอลัมน์ */}
          
          {/* การ์ดแรก */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/04/24/5608757681874e1ea5df1aa41d5b2e3d_How_To_Make_Tom_Yam_Kung_The_Epitome_Of_Delicious_And_Nutritious_Thai_Cuisine3.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">ต้มยำกุ้ง</h5>
                <p className="card-text">เมนูอาหารไทยแสนอร่อยที่อุดมไปด้วยรสชาติและสมุนไพร เป็นเมนูประจำชาติ</p>
                <a href="#" className="btn btn-primary">$ 100</a>
              </div>
            </div>
          </div>

          {/* การ์ดที่สอง */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://eknoodle.com/wp-content/uploads/2023/06/8.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">ก๋วยเตี๋ยว</h5>
                <p className="card-text">ชามซุปก๋วยเตี๋ยวที่อุ่นสบายพิเศษความอิ่มอร่อยด้วยหมู</p>
                <a href="#" className="btn btn-primary">$ 70</a>
              </div>
            </div>
          </div>

          {/* การ์ดที่สาม */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://www.thammculture.com/wp-content/uploads/2024/01/Untitled-612.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">ผัดกะเพรา</h5>
                <p className="card-text">เมนูผัดกะเพราสุดคลาสสิก+ไข่ดาว มีกลิ่นสมุนไพรสุดหอมจากใบกะเพรา</p>
                <a href="#" className="btn btn-primary">$ 70</a>
              </div>
            </div>
          </div>

          {/* การ์ดที่สี่ */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://mpics.mgronline.com/pics/Images/557000010508801.JPEG" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">ส้มตำ</h5>
                <p className="card-text">ส้มตำถาดและมีกลิ่นหอมจากประเทศไทย</p>
                <a href="#" className="btn btn-primary">$ 150</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://static.cordonbleu.edu/Files/MediaFile/86678.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">แกงเขียวหวานไก่</h5>
                <p className="card-text">ส้มตำถาดและมีกลิ่นหอมจากประเทศไทย</p>
                <a href="#" className="btn btn-primary">$ 60</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://static.cordonbleu.edu/Files/MediaFile/86681.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">แกงมัสมั่นไก่</h5>
                <p className="card-text">ส้มตำถาดและมีกลิ่นหอมจากประเทศไทย</p>
                <a href="#" className="btn btn-primary">$ 170</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://static.cordonbleu.edu/Files/MediaFile/86682.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">ข้าวซอย</h5>
                <p className="card-text">ส้มตำถาดและมีกลิ่นหอมจากประเทศไทย</p>
                <a href="#" className="btn btn-primary">$ 80</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src="https://static.cordonbleu.edu/Files/MediaFile/86672.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> ข้าวเหนียวมะม่วง</h5>
                <p className="card-text">ส้มตำถาดและมีกลิ่นหอมจากประเทศไทย</p>
                <a href="#" className="btn btn-primary">$ 90</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}

export default About;
