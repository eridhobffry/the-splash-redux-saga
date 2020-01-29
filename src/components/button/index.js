import React from "react";
import { Button } from "../../style/button_style";

export const ButtonComponent = ({ children, loading, ...props }) => (
  <Button disabled={loading} {...props}>
    {loading ? "Loading..." : children}
  </Button>
);
