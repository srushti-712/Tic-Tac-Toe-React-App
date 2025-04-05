import { useState } from "react";

const Player = ({ initialName, symbol, isActive, handleNameChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing);
    // setIsEditing(!isEditing); // not a very good way to do the update as the update is executed in 1 cycle only and hence the change of state is one time as opposed to the expected 2 times considering the 2 set functions as shown above.

    setIsEditing((isEditing) => !isEditing); // best practice as update is always guarenteed by react
    if (isEditing) {
      handleNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            defaultValue={initialName}
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>
        {" "}
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
