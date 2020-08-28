import React from "react";
import Router, { useRouter } from "next/router";
import { TextHeader } from "../core/heading/TextHeader";
import {
  LAUNCH_YEAR,
  LAUNCH_YEARS,
  SUCCESSFULL_LAUNCHING,
  SUCCESSFULL_LANDING,
} from "../../constants";
import { ToggleButton } from "../core/buttons/ToggleButton";
import { updateQueryStringParameter } from "../../util/updateQueryParams";

const LAUNCH_VALUES = ["true", "false"];

export function FiltersComponent() {
  const router = useRouter();
  console.log(router.query);
  const handleClick = (filterName, event) => {
    if (event.target.tagName === "INPUT") {
      let query = updateQueryStringParameter(
        window.location.search,
        filterName,
        event.target.value
      );
      Router.push({
        pathname: "/Spacex",
        search: query,
      });
    }
  };
  return (
    <ul className="col-2 menu">
      <li className="launch_year">
        <TextHeader title={LAUNCH_YEAR} />
        <div className="grid-container">
          {LAUNCH_YEARS.map((year) => (
            <ToggleButton
              className="grid-item"
              id={year}
              key={year}
              title={year}
              filter="launch_year"
              onChange={(event) => handleClick("launch_year", event)}
            />
          ))}
        </div>
      </li>
      <li className="success_launch">
        <TextHeader title={SUCCESSFULL_LAUNCHING} />
        <div className="grid-container">
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton
              key={value}
              className="grid-item"
              id={`launch_${value}`}
              title={value}
              filter="launch_success"
              onChange={(event) => handleClick("launch_success", event)}
            />
          ))}
        </div>
      </li>
      <li className="success_landing">
        <TextHeader title={SUCCESSFULL_LANDING} />
        <div className="grid-container">
          {LAUNCH_VALUES.map((value) => (
            <ToggleButton
              key={value}
              className="grid-item"
              id={`landing_${value}`}
              title={value}
              filter="land_success"
              onChange={(event) => handleClick("land_success", event)}
            />
          ))}
        </div>
      </li>
    </ul>
  );
}
