import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../components/Button/Button";


storiesOf("Button", module)
  .add("primary", () => (
    <Button variant="outlined" color="primary"/>
  ))

storiesOf("Button", module)
    .add("secondary", () => (
      <Button variant="contained" color="default" onClick={action("clicked")} />
    ))

/*
  .add("secondary", () => (
    <Button
      type={ButtonTypes.SECONDARY}
      onClick={action("clicked")}
      label="Secondary"
    />
  ))

*/

