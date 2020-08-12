import React from "react";
import ContentView from "./contentView";
import "./home.css";

class Home extends React.Component {
  state = {
    contents: []
  };

  render() {
    return (
      <section className="container">
        <div className="contents">
          <ContentView backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY501LUvKFwtOnUO_Mv-LurmMZArkgEBefDA&usqp=CAU" />
          <ContentView backgroundColor="#FFFFFF" />
          <ContentView backgroundColor="#D2E0F1" />
          <ContentView backgroundColor="#FFFFFF" />
        </div>
      </section>
    );
  }
}

export default Home;
