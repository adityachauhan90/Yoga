import React from 'react';
import '../Yogacss/Secondline.css';

function Secondline() {
  const features = [
    {
      title: "Many Styles",
      img: "https://img.lovepik.com/free-png/20210918/lovepik-yoga-girl-png-image_400205216_wh1200.png",
      desc: "20+ Styles of Yoga Workout and Meditation that suit everyone"
    },
    {
      title: "Pro Instructors",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfKpnIFqkkfCOaQ29L-vCETY1BodfqWpYpk3HSbrmrMvCv7DrRmxoZTiNSEm-mjw4v4w&usqp=CAU",
      desc: "Professional Yoga Instructors from around the world"
    },
    {
      title: "Quality Content",
      img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/contract-3465997-2905675.png",
      desc: "All Our Classes are Well Planned by Professional Yoga Instructors"
    }
  ];

  return (
    <div className="secondline-container">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <img src={item.img} alt={item.title} />
          <div className="feature-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Secondline;
