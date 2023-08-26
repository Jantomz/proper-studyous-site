import { X509Certificate } from "crypto";
import React, { useState } from "react";

let fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf",
  },
};

// Must be called in the same order at the top level of a function
// const [initial state, function] = useState();
let pdfMake = require("pdfmake/build/pdfmake.js");
let pdfFonts = require("pdfmake/build/vfs_fonts.js");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

let dt = new Date();

dt.setTime(dt.getTime() - dt.getTimezoneOffset() * 60 * 1000);

let date = dt.toISOString().split("T")[0];

export default function MolNotes() {
  const [title, setValue] = useState("");
  // WILL RESET EACH TIME AN INPUT IS USED, BEWARE\
  const [name, setName] = useState("");
  const [classe, setClasse] = useState("");
  const [datey, setDatey] = useState(date);
  const [notes, setNotes] = useState("");
  const [style, setStyle] = useState("");
  const [keys, setKeys] = useState("");
  const [keysContent, setKeysContent] = useState("");
  const [numKeys, setNumKeys] = useState("");
  const [keyTwo, setKeyTwo] = useState("");
  const [keysContentTwo, setKeysContentTwo] = useState("");
  const [keysContentThird, setKeysContentThird] = useState("");
  const [keyThird, setKeyThird] = useState("");
  const [keysContentFourth, setKeysContentFourth] = useState("");
  const [keyFourth, setKeyFourth] = useState("");
  const [keysContentFifth, setKeysContentFifth] = useState("");
  const [keyFifth, setKeyFifth] = useState("");
  const [keysContentSixth, setKeysContentSixth] = useState("");
  const [keySixth, setKeySixth] = useState("");
  const [keysContentSeventh, setKeysContentSeventh] = useState("");
  const [keySeventh, setKeySeventh] = useState("");
  const [keysContentEighth, setKeysContentEighth] = useState("");
  const [keyEighth, setKeyEighth] = useState("");
  const [keysContentNinth, setKeysContentNinth] = useState("");
  const [keyNinth, setKeyNinth] = useState("");
  const [keysContentTenth, setKeysContentTenth] = useState("");
  const [keyTenth, setKeyTenth] = useState("");
  const [summary, setSummary] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleClass = (event: any) => {
    setClasse(event.target.value);
  };

  const handleDate = (event: any) => {
    setDatey(event.target.value);
  };

  const handleNumKeys = (event: any) => {
    setNumKeys(event.target.value);
  };

  const handleNotes = (event: any) => {
    setNotes(event.target.value);
  };

  const handleKeys = (event: any) => {
    setKeys(event.target.value);
  };

  const handleKeysContent = (event: any) => {
    setKeysContent(event.target.value);
  };

  const handleKeyTwo = (event: any) => {
    setKeyTwo(event.target.value);
  };

  const handleKeysContentTwo = (event: any) => {
    setKeysContentTwo(event.target.value);
  };

  const handleKeyThird = (event: any) => {
    setKeyThird(event.target.value);
  };

  const handleKeysContentThird = (event: any) => {
    setKeysContentThird(event.target.value);
  };

  const handleKeyFourth = (event: any) => {
    setKeyFourth(event.target.value);
  };

  const handleKeysContentFourth = (event: any) => {
    setKeysContentFourth(event.target.value);
  };

  const handleKeyFifth = (event: any) => {
    setKeyFifth(event.target.value);
  };

  const handleKeysContentFifth = (event: any) => {
    setKeysContentFifth(event.target.value);
  };

  const handleKeySixth = (event: any) => {
    setKeySixth(event.target.value);
  };

  const handleKeysContentSixth = (event: any) => {
    setKeysContentSixth(event.target.value);
  };

  const handleKeySeventh = (event: any) => {
    setKeySeventh(event.target.value);
  };

  const handleKeysContentSeventh = (event: any) => {
    setKeysContentSeventh(event.target.value);
  };

  const handleKeyEighth = (event: any) => {
    setKeyEighth(event.target.value);
  };

  const handleKeysContentEighth = (event: any) => {
    setKeysContentEighth(event.target.value);
  };

  const handleKeyNinth = (event: any) => {
    setKeyNinth(event.target.value);
  };

  const handleKeysContentNinth = (event: any) => {
    setKeysContentNinth(event.target.value);
  };

  const handleKeyTenth = (event: any) => {
    setKeyTenth(event.target.value);
  };

  const handleKeysContentTenth = (event: any) => {
    setKeysContentTenth(event.target.value);
  };

  const handleSummary = (event: any) => {
    setSummary(event.target.value);
  };

  function handleButton() {
    createPDF();
  }

  //jspdf portion

  function createPDF() {
    let docDefinition;

    if (style === "cornell") {
      docDefinition = {
        header: { text: `\nCornell Method Note Taking`, style: "header" },
        footer: { text: `Studyous 2023 \u00A9 `, style: "header" },

        content: [
          { text: `${title}`, style: "title" },
          { text: `Property of ${name}`, style: "subtitle" },
          { text: `For ${classe} | ${datey}`, style: "subtitle" },
          {
            layout: "headerLineOnly",
            table: {
              headerRows: 1,
              widths: [100, "*"],

              body: [
                [
                  { text: "\n\nKey Points", bold: true, fontSize: 20 },
                  { text: "\n\nContent", bold: true, fontSize: 20 },
                ],
                ["\n", "\n"],
                [{ text: `${keys}`, fontSize: 16 }, `${keysContent}`],
                ["\n", "\n"],

                [{ text: `${keyTwo}`, fontSize: 16 }, `${keysContentTwo}`],
                ["\n", "\n"],

                [{ text: `${keyThird}`, fontSize: 16 }, `${keysContentThird}`],
                ["\n", "\n"],

                [
                  { text: `${keyFourth}`, fontSize: 16 },
                  `${keysContentFourth}`,
                ],
                ["\n", "\n"],

                [{ text: `${keyFifth}`, fontSize: 16 }, `${keysContentFifth}`],
                ["\n", "\n"],

                [{ text: `${keySixth}`, fontSize: 16 }, `${keysContentSixth}`],
                ["\n", "\n"],

                [
                  { text: `${keySeventh}`, fontSize: 16 },
                  `${keysContentSeventh}`,
                ],
                ["\n", "\n"],

                [
                  { text: `${keyEighth}`, fontSize: 16 },
                  `${keysContentEighth}`,
                ],
                ["\n", "\n"],

                [{ text: `${keyNinth}`, fontSize: 16 }, `${keysContentNinth}`],
                ["\n", "\n"],

                [{ text: `${keyTenth}`, fontSize: 16 }, `${keysContentTenth}`],
              ],
            },
          },
          { text: "\n\n" },
          { text: `Summary`, style: "summary" },
          { text: `${summary}`, margin: [20, 5] },
        ],
        styles: {
          title: {
            fontSize: 32,
            bold: true,
            alignment: "center",
          },
          subtitle: {
            fontSize: 12,
            alignment: "center",
            color: "gray",
          },
          header: {
            alignment: "center",
            color: "gray",
          },
          summary: {
            fontSize: 16,
            bold: true,
          },
        },
      };
    } else if (style === "outline") {
      docDefinition = {
        header: { text: `\nOutlining Style Note Taking`, style: "header" },
        content: [
          { text: `${title}`, style: "title" },
          { text: `Property of ${name}`, style: "subtitle" },
          { text: `For ${classe} | ${datey}`, style: "subtitle" },
          { text: "\n" },
          { text: `${keys}`, style: "key" },
          { text: `${keysContent}`, margin: [40, 5] },
          { text: `${keyTwo}`, style: "key" },
          { text: `${keysContentTwo}`, margin: [40, 5] },
          { text: `${keyThird}`, style: "key" },
          { text: `${keysContentThird}`, margin: [40, 5] },
          { text: `${keyFourth}`, style: "key" },
          { text: `${keysContentFourth}`, margin: [40, 5] },
          { text: `${keyFifth}`, style: "key" },
          { text: `${keysContentFifth}`, margin: [40, 5] },
          { text: `${keySixth}`, style: "key" },
          { text: `${keySixth}`, margin: [40, 5] },
          { text: `${keySeventh}`, style: "key" },
          { text: `${keysContentSeventh}`, margin: [40, 5] },
          { text: `${keyEighth}`, style: "key" },
          { text: `${keysContentEighth}`, margin: [40, 5] },
          { text: `${keyNinth}`, style: "key" },
          { text: `${keysContentNinth}`, margin: [40, 5] },
          { text: `${keyTenth}`, style: "key" },
          { text: `${keysContentTenth}`, margin: [40, 5] },
          { text: "Summary", style: "key" },
          { text: `${summary}`, margin: [40, 5] },
        ],
        styles: {
          title: {
            fontSize: 32,
            bold: true,
            alignment: "center",
          },
          subtitle: {
            fontSize: 12,
            alignment: "center",
            color: "gray",
          },
          header: {
            alignment: "center",
            color: "gray",
          },
          key: {
            fontSize: 20,
          },
        },
      };
    } else {
      docDefinition = {
        header: { text: `\nFree-Write Note Taking`, style: "header" },
        content: [
          { text: `${title}`, style: "title" },
          { text: `Property of ${name}`, style: "subtitle" },
          { text: `For ${classe} | ${datey}`, style: "subtitle" },
          { text: `${notes}`, margin: 20 },
        ],
        styles: {
          title: {
            fontSize: 32,
            bold: true,
            alignment: "center",
          },
          subtitle: {
            fontSize: 12,
            alignment: "center",
            color: "gray",
          },
          header: {
            alignment: "center",
            color: "gray",
          },
        },
      };
    }
    pdfMake.createPdf(docDefinition).open();
  }

  return (
    <div className="h-screen w-full bg-basWhite pt-28" id="main">
      <div className="w-fill mx-36 mt-16 flex h-full rounded-xl bg-mintWhite pt-10">
        <div className="h-fill mx-10 w-3/5 overflow-scroll pt-1">
          <form>
            <label htmlFor="title" className="text-4xl lg:text-5xl">
              Title:
            </label>
            <br></br>
            <input
              required
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={title}
              className="mt-3 h-10 w-5/6 bg-basWhite p-2"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="name" className="text-4xl lg:text-5xl">
              Name:
            </label>
            <br></br>
            <input
              required
              type="text"
              id="name"
              name="name"
              onChange={handleName}
              value={name}
              className="mt-3 h-10 w-5/6 bg-basWhite p-2"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="classe" className="text-4xl lg:text-5xl">
              Class:
            </label>
            <br></br>
            <input
              required
              type="text"
              id="classe"
              name="classe"
              onChange={handleClass}
              value={classe}
              className="mt-3 h-10 w-5/6 bg-basWhite p-2"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="datey" className="text-4xl lg:text-5xl">
              Date:
            </label>
            <br></br>
            <input
              required
              type="date"
              id="datey"
              name="datey"
              onChange={handleDate}
              value={datey}
              className="mt-3 h-10 w-5/6 bg-basWhite p-2"
            ></input>

            <br></br>
            <br></br>
            {style === "free" ? (
              <div>
                <label htmlFor="notes" className="text-4xl lg:text-5xl">
                  Notes:
                </label>
                <br></br>
                <textarea
                  required
                  id="notes"
                  name="notes"
                  onChange={handleNotes}
                  value={notes}
                  className="mt-3 h-32 min-h-[600px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {style === "cornell" || style === "outline" ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="firstKey" className="text-4xl lg:text-xl">
                  First Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="firstKey"
                  name="firstKey"
                  onChange={handleKeys}
                  value={keys}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="firstKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="firstKeyContent"
                  name="firstKeyContent"
                  onChange={handleKeysContent}
                  value={keysContent}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 1 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="secondKey" className="text-4xl lg:text-xl">
                  Second Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="secondKey"
                  name="secondKey"
                  onChange={handleKeyTwo}
                  value={keyTwo}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="secondKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="secondKeyContent"
                  name="secondKeyContent"
                  onChange={handleKeysContentTwo}
                  value={keysContentTwo}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 2 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="thirdKey" className="text-4xl lg:text-xl">
                  Third Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="thirdKey"
                  name="thirdKey"
                  onChange={handleKeyThird}
                  value={keyThird}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="thirdKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="thirdKeyContent"
                  name="thirdKeyContent"
                  onChange={handleKeysContentThird}
                  value={keysContentThird}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 3 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="fourthKey" className="text-4xl lg:text-xl">
                  Fourth Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="fourthKey"
                  name="fourthKey"
                  onChange={handleKeyFourth}
                  value={keyFourth}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="fourthKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="fourthKeyContent"
                  name="fourthKeyContent"
                  onChange={handleKeysContentFourth}
                  value={keysContentFourth}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 4 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="fifthKey" className="text-4xl lg:text-xl">
                  Fifth Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="fifthKey"
                  name="fifthKey"
                  onChange={handleKeyFifth}
                  value={keyFifth}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="fifthKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="fifthKeyContent"
                  name="fifthKeyContent"
                  onChange={handleKeysContentFifth}
                  value={keysContentFifth}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 5 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="sixthKey" className="text-4xl lg:text-xl">
                  Sixth Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="sixthKey"
                  name="sixthKey"
                  onChange={handleKeySixth}
                  value={keySixth}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="sixthKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="sixthKeyContent"
                  name="sixthKeyContent"
                  onChange={handleKeysContentSixth}
                  value={keysContentSixth}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 6 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="seventhKey" className="text-4xl lg:text-xl">
                  Seventh Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="seventhKey"
                  name="seventhKey"
                  onChange={handleKeySeventh}
                  value={keySeventh}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="seventhKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="seventhKeyContent"
                  name="seventhKeyContent"
                  onChange={handleKeysContentSeventh}
                  value={keysContentSeventh}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 7 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="eighthKey" className="text-4xl lg:text-xl">
                  Eighth Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="eighthKey"
                  name="eighthKey"
                  onChange={handleKeyEighth}
                  value={keyEighth}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="eighthKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="eighthKeyContent"
                  name="eighthKeyContent"
                  onChange={handleKeysContentEighth}
                  value={keysContentEighth}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 8 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="ninthKey" className="text-4xl lg:text-xl">
                  Ninth Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="ninthKey"
                  name="ninthKey"
                  onChange={handleKeyNinth}
                  value={keyNinth}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="ninthKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="ninthKeyContent"
                  name="ninthKeyContent"
                  onChange={handleKeysContentNinth}
                  value={keysContentNinth}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {(style === "cornell" || style === "outline") &&
            Number(numKeys) > 9 ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>

                <label htmlFor="tenthKey" className="text-4xl lg:text-xl">
                  Tenth Key Point:
                </label>
                <br></br>
                <input
                  required
                  type="text"
                  id="tenthKey"
                  name="tenthKey"
                  onChange={handleKeyTenth}
                  value={keyTenth}
                  className=" mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></input>
                <label
                  htmlFor="tenthKeyContent"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Content:
                </label>
                <textarea
                  required
                  id="tenthKeyContent"
                  name="tenthKeyContent"
                  onChange={handleKeysContentTenth}
                  value={keysContentTenth}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
            {style === "cornell" || style === "outline" ? (
              <div>
                <hr className="text-red h-8 w-1/4 border-red-800"></hr>
                <label
                  htmlFor="summary"
                  className="block pt-2 text-4xl lg:text-xl"
                >
                  Summary:
                </label>
                <textarea
                  required
                  id="summary"
                  name="summary"
                  onChange={handleSummary}
                  value={summary}
                  className="mb-8 mt-3 min-h-[30px] w-5/6 bg-basWhite p-2"
                ></textarea>
              </div>
            ) : null}
          </form>
        </div>
        <div className="mt-8 h-full w-1/4">
          <div className=" rounded-2xl bg-greenish">
            <h1 className="ml-2 mt-2 pl-4 pt-4 text-2xl lg:text-4xl">
              Note Style
            </h1>
            <div>
              <select
                onChange={(event) => {
                  setStyle(event.target.value);
                }}
                name="choice"
                defaultValue={"DEFAULT"}
                className="m-8 h-10 w-5/6 rounded-md bg-basWhite"
              >
                <option value="DEFAULT" hidden>
                  Select Style
                </option>
                <option value="cornell">Cornell</option>
                <option value="outline">Outlining</option>
                <option value="free">Free Write</option>
              </select>
              {style === "cornell" || style === "outline" ? (
                <div className="">
                  <label className="m-8">Number of Key Ideas</label>
                  <input
                    required
                    type="number"
                    min={1}
                    max={10}
                    id="numKeys"
                    name="numKeys"
                    onChange={handleNumKeys}
                    value={numKeys}
                    className="m-8 mt-0 h-10 w-5/6 rounded-md bg-basWhite p-2 "
                  ></input>
                </div>
              ) : null}
            </div>

            <div className="flex place-content-center items-center">
              {style === "cornell" ||
              style === "outline" ||
              style === "free" ? (
                <button
                  onClick={handleButton}
                  id="submitButton"
                  type="submit"
                  className="mb-6 rounded-md bg-minty px-8 py-4 hover:bg-midDarkGreen"
                >
                  Create Notes
                </button>
              ) : null}
            </div>
          </div>
          <img src="realone.svg" alt="" className="mx-auto mt-32 w-64"></img>
        </div>
      </div>
    </div>
  );
}
