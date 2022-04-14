import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [user, setUser] = useState(0);

  const getUser = (num) => {
    if (user === 3 && num === 1) {
      setUser(0);
      console.log(user);
      return;
    }

    if (user === 0 && num === -1) {
      setUser(3);
      console.log(user);
      return;
    }

    const count = user + num;
    setUser(count);
    console.log(user);
  };

  const getRandomUser = () => {
    const aleatorio = Math.round(Math.random() * (0 - 3) + 3);
    console.log(aleatorio);
    setUser(aleatorio);
  };

  useEffect(() => {
    setUser(0);
  }, []);

  const { img, name, text, job } = props.user[user];

  return (
    <div className="card">
      <div className="img-circle">
        <img className="user-img" src={img} alt="" />
      </div>
      <div className="inspect">
        <h2 className="name-string">{name}</h2>
        <h2 className="job-string">{job}</h2>
        <div className="text">
          <p className="text-string">{text}</p>
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="btn" onClick={() => getUser(-1)}>
          {"<"}
        </button>
        <button type="button" className="btn" onClick={() => getUser(1)}>
          {">"}
        </button>
      </div>
      <button className="surprise" onClick={() => getRandomUser()}>
        Surprise Me
      </button>
    </div>
  );
};

export default Card;
