import React, { Fragment } from "react";
import { Styled } from "theme-ui";

export default ({author}) => (
  <Fragment>
    Words by <Styled.a href="http://example.com/">{author}</Styled.a>.
    <br />
    Change me. This is all quite default.
  </Fragment>
);
