import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile(){
    return (
    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>

        <img 
        src="https://www.lannapoly.ac.th/online/Stu_picture/67319010114.jpg" 
        alt="Profile" 
        style={{ width: '200px', borderRadius: '50%' }} 
        />

      
      <h1> นางสาวรติรส แซ่ท่อ </h1> 
      <p>นักศึกษาสาขาเทคโนโลยีสารสนเทศ ระดับปวส.1</p>
      <p>กำลังศึกษาอยู่ที่ วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่</p>
    </div>
    );
}

export default Profile;

