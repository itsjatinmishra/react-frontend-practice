import { useState } from "react";

function FunctionalForm() {
  // Single state object
  const [data, setData] = useState({
    username: "",
    comments: "",
    color: "red",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // always first

    alert(`${data.username} and ${data.comments} and ${data.color}`);

    // reset form
    setData({
      username: "",
      comments: "",
      color: "red",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
      </div>

      <div>
        <label>Comments</label>
        <textarea
          value={data.comments}
          onChange={(e) => setData({ ...data, comments: e.target.value })}
        />
      </div>

      <div>
        <label>Color</label>
        <select
          value={data.color}
          onChange={(e) => setData({ ...data, color: e.target.value })}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FunctionalForm;
