import React, { useState } from "react";

export default function Login( {changeStatus} ) {
    const [field, updateField] = useState("");
    return(
        <form
        onSubmit={(event)=>{
          event.preventDefault();
          changeStatus();
          localStorage.setItem("user", event.target.name.value.trim());
          updateField("");
        }}
      >
        <input
          type="text"
          name="name"
          required
          value={field}
          placeholder="User name"
          onChange={(event) => {
            updateField(event.target.value);
          }}
        />
        <input type="submit" value="log in"/>
      </form>

    )
}