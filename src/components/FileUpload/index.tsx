import { useState } from "react";
import { Button } from "@mui/material";
import { FileUploadContainer } from "./FileUpload.styled";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const FileUpload = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const { handleReceivedContent } = props;
  let fileReader: any;

  const handleFileRead = (event: any) => {
    const content = fileReader.result;
    handleReceivedContent(content);
  };

  const handleOnChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      setIsFilePicked(true);
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
      event.target.value = null;
    }
  };

  const handleFileUpload = () => {};

  return (
    <FileUploadContainer>
      <Button
        variant="outlined"
        component="label"
        onClick={handleFileUpload}
        startIcon={<UploadFileIcon />}
      >
        Auto-complete from file
        <input
          type="file"
          name="file-upload"
          accept=".json"
          onChange={handleOnChange}
          hidden
        />
      </Button>
    </FileUploadContainer>
  );
};

export default FileUpload;
