import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "next/router";
import { FiltersComponent } from "../components/filter";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "../Resources/main.scss";
import { fetchSpacex } from "../Api";
import { TextHeader } from "../components/core/heading/TextHeader";

function Spacex(props) {
  console.log("props rendered", props);
  const [data, setData] = useState(props.data);
  const { query } = props.router;
  console.log("query", query, data);

  const handleApiCall = (params) => {
    fetchSpacex(params).then((json) => {
      setData(json);
    });
  };

  useEffect(() => {
    // verify props have changed to avoid an infinite loop
    // fetch data based on the new query
    handleApiCall(query);
    console.log("handleApiCall", query);
  }, data);
  const { history } = props;
  //   console.log("1111111111", data);
  if (!data) {
    return <div>Error: {props.error}</div>;
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
Spacex.getServerSideProps = async (ctx) => {
  console.log("ctx", ctx);
  try {
    var url = new URL("https://api.spacexdata.com/v3/launches?limit=100");
    var params = ctx.query; // or:
    url.search = new URLSearchParams(params).toString();
    const res = await fetch(url);
    console.log("res", res.json());
    return { data: res };
  } catch (e) {
    return { error: e };
  }
};
export default withRouter(Spacex);
