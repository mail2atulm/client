import React, { useState } from "react";
import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";
import Cookies from "js-cookie";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: any) => {
    // const { files } = event.target;
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select a file to upload");
        return;
      }

      const json = JSON.stringify(["1", "2", "3"]);
      const blob = new Blob([json], {
        type: "application/json",
      });

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("data", blob);

      const config: AxiosRequestConfig = {
        headers: {
          Accept: "application/vnd.github+json",
          "Content-type": "multipart/form-data",

          //Authorization:
          //  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhdHVsbUBkZW5hbGkuY29tIiwiaWF0IjoxNzIwNzAzMjgyLCJleHAiOjE3MjA3MDQ3MjJ9.gKFHuisdXfmPsKM6oxcTKNbdBzNrI07fERXyPisiIFg",
        } as RawAxiosRequestHeaders,
      };

      const config3 = {
        headers: {
          "content-type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: { loaded: any; total: any }) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.floor((loaded * 100) / total);
          setProgress(percentage);
        },
      };

      try {
        //axios.defaults.withCredentials = true;
        axios
          .post("http://localhost:8080/api/v1/file/upload", formData, config)
          .then((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }

      /*
      let c = Cookies.get("OFBiz.Visitor");
      console.log(c);
      try {
        axios.defaults.withCredentials = true;

        axios
          .get("http://localhost:8080/api/v1/file/upload1", {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
        */

      alert("File uploaded  successfully ..");
      setProgress(0);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Failed to upload file");
      setProgress(0);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload20</button>
      {progress > 0 && <progress value={progress} max="100" />}
    </div>
  );
}
