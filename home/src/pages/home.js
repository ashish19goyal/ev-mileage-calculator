import React from "react";

// import my fancy third-party component
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div>
      <p>This is my super awesome page made with Gatsby!</p>

      {/* use my fancy third-party component */}
      <Button variant="contained">Fancy button!</Button>
    </div>
  );
}
