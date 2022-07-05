import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";
import { range } from "../../utils/helpers";
import "./ExtractPdf.css";

export const ExtractPdf = () => {
  const [pdfFileData, setPdfFileData] = useState();
  const [file, setFile] = useState(null);
  const [rangeParams, setRangeParams] = useState({
    from: -1,
    to: -1,
  });

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setPdfFileData(docUrl);
  }

  async function extractPdfPage(arrayBuff) {
    try {
      const pdfSrcDoc = await PDFDocument.load(arrayBuff);
      const pdfNewDoc = await PDFDocument.create();
      let pages = range(rangeParams.from, rangeParams.to);
      for (let page of pages) {
        const [copiedPage] = await pdfNewDoc.copyPages(pdfSrcDoc, [page]);
        await pdfNewDoc.addPage(copiedPage);
      }
      return pdfNewDoc.save();
    } catch (error) {
      alert(`Invalid PDF uploaded or from and to range might not be valid.`);
      return null;
    }
  }

  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      setFile(fileList[0]);
    }
  };

  function onRangeChange(event) {
    setRangeParams((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (rangeParams.from === -1 || rangeParams.to === -1) {
      alert("Please provide from and to values");
      return;
    }
    if (file) {
      const pdfArrayBuffer = await readFileAsync(file);
      const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
      newPdfDoc && renderPdf(newPdfDoc);
    } else {
      alert("Please upload a valid file");
    }
  };

  return (
    <div className="extract-pdf">
      <form className="form-params center-vh" onSubmit={submitHandler}>
        <input
          type="file"
          id="file-selector"
          accept=".pdf"
          onChange={onFileSelected}
        />
        <label>From</label>
        <input type="number" name="from" min="1" onChange={onRangeChange} />
        <label>To</label>
        <input type="number" name="to" min="1" onChange={onRangeChange} />
        <button type="submit" className="btn btn-primary">
          Extract
        </button>
      </form>
      <div className="rendered-pdf center-vh">
        {pdfFileData && (
          <iframe
            className="pdf-space"
            title="Extracted PDF"
            src={pdfFileData}
          ></iframe>
        )}
      </div>
    </div>
  );
};
