import React, { useState } from "react";

const Notes = ({ username }) => {
  const [entry, setentry] = useState("");
  const handleInputChange = (event) => {
    setentry(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const apiUrl = "https://emosense-backend.onrender.com/~api/accounts/input/";
    const requestData = { username, entry: entry };
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json(), alert("your journal is added"))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setentry("");
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h1>Enter your today's diary</h1>
        <textarea
          required
          name="diary"
          className="diary"
          rows="30"
          value={entry}
          onChange={handleInputChange}
          placeholder="Today's journal entry"
        ></textarea>
        <button
          style={{
            color: "white",
            backgroundColor: "#17cf97",
            borderRadius: "8px",
            fontSize: "20px",
            padding: "5px",
          }}
          type="submit"
        >
          Add journal entry
        </button>
      </form>
    </div>
  );
};

export default Notes;
