import React, { useState } from "react";
import { AddFileContainer, StyledMiddleText } from "./App.styled";
import FileUpload from "../FileUpload";
import Form from "../Form";

const App = () => {
  const [content, setContent] = useState(null);
  const [removeHeader, setRemoveHeader] = useState(false);

  const handleReceivedContent = (content: any) => setContent(content);
  const hideHeader = (isHidden: boolean) => setRemoveHeader(isHidden);

  return (
    <AddFileContainer>
      {!removeHeader ? (
        <>
          <FileUpload handleReceivedContent={handleReceivedContent} />

          <StyledMiddleText>
            <span>or</span>
          </StyledMiddleText>
        </>
      ) : null}

      <Form content={content} setContent={setContent} hideHeader={hideHeader} />
    </AddFileContainer>
  );
};

export default App;
