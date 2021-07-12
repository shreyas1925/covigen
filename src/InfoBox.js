import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

const InfoBox = ({ title, cases, active, isRed, isGrey, total, ...props }) => {
  return (
    <div>
      <Card
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
        onClick={props.onClick}
      >
        <div className="main__info">
          <CardContent className="app__card">
            <Typography color="textSecondary" className="infoBox__title">
              {title}
            </Typography>
            <h2
              className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
                isGrey && "infoBox__cases--grey"
              }`}
            >
              {cases}
            </h2>
            <Typography color="textSecondary" className="infoBox__total">
              {total} Total
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default InfoBox;
