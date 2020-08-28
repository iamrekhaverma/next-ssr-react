import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "next/router";
import { FiltersComponent } from "../components/filter";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "../Resources/main.scss";
import { fetchSpacex } from "../Api";
import { TextHeader } from "../components/core/heading/TextHeader";

function Spacex({ router, spacex, query, history, error }) {
  const { land_success, launch_success, launch_year } = query || {};
  console.log("props rendered", query);

  const [data, setData] = useState(spacex);

  const handleApiCall = (params) => {
    fetchSpacex(params).then((json) => {
      setData(json);
    });
  };
  useEffect(() => {
    handleApiCall(query);
    console.log("Inital render");
  }, [land_success, launch_success, launch_year, query]);
  //   console.log("1111111111", data);
  if (!data) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div className="row">
        <Header />
        <section>
          <nav className="nav">
            <FiltersComponent history={history} />
          </nav>

          <article className="column article">
            {data.map((item, index) => (
              <div key={index} className="cards_item">
                <img
                  src={item.links.mission_patch_small}
                  className="card_image"
                  alt="User Icon"
                />
                <div className="card_content">
                  <a href="#">
                    {item.mission_name} #{item.flight_number}
                  </a>
                  {item.mission_id.length && (
                    <ul>
                      <b>Mission Ids</b>
                      {item.mission_id.map((id) => (
                        <li key={id}>{id}</li>
                      ))}
                    </ul>
                  )}
                  {item.launch_year && (
                    <div>
                      <b>Launch Year:</b>
                      {item.launch_year}
                    </div>
                  )}
                  <p>
                    <b>Successful Launch:-</b>
                    {item.launch_success ? "True" : "false"}
                  </p>
                </div>
              </div>
            ))}
          </article>
        </section>

        <Footer devName="Rekha" />
        {/* <Header />
        <br />
        <div className="column1">
          <FiltersComponent history={history} />
        </div>
        <div className="column">
          {data.map((item, index) => (
            <div key={index} className="cards_item">
              <img
                src={item.links.mission_patch_small}
                className="card_image"
                alt="User Icon"
              />
              <div className="card_content">
                <a href="#">
                  {item.mission_name} #{item.flight_number}
                </a>
                {item.mission_id.length && (
                  <ul>
                    <b>Mission Ids</b>
                    {item.mission_id.map((id) => (
                      <li key={id}>{id}</li>
                    ))}
                  </ul>
                )}
                {item.launch_year && (
                  <div>
                    <b>Launch Year:</b>
                    {item.launch_year}
                  </div>
                )}
                <p>
                  <b>Successful Launch:-</b>
                  {item.launch_success ? "True" : "false"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Footer devName="Rekha" /> */}
      </div>
    );
  }
  // }
}
Spacex.getInitialProps = async ({ query }) => {
  console.log("ctx", query);
  try {
    var url = new URL("https://api.spacexdata.com/v3/launches?limit=100");
    var params = query; // or:
    url.search = new URLSearchParams(params).toString();
    const res = await fetch(url);
    return { spacex: res.data, query };
  } catch (e) {
    return { error: e };
  }
};
export default withRouter(Spacex);
