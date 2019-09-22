import React, { useContext } from "react";
import { Context } from "../../../Context";

import styles from "./PortfolioList.module.css";
import Grid from "@material-ui/core/Grid";
import PortfolioCard from "../../UI/PortfolioCard";

const PortfolioList = props => {
  const [lang] = useContext(Context);

  let data = props.items.en;
  if (lang === "ru") {
    data = props.items.ru;
  }

  const gridConfigurator = {
    container: true,
    direction: "row",
    justify: "space-around",
    alignItems: "center"
  };
  const itemConfigurator = {
    item: true,
    xs: 10,
    sm: 11,
    md: 5,
    lg: 4
  };

  return (
    <Grid {...gridConfigurator} className={styles.wrapper}>
      {data.map((item, key) => {
        return (
          <Grid key={key} {...itemConfigurator}>
            <PortfolioCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PortfolioList;
