export const User = () => {
  const search = (event: MouseEventButton<HTMLButtonElement>) => {
    console.log("searching");
  };

  const onNameChanged = () => {
    console.log("name changed")
  }

  const onAgeChanged = () => {
    console.log("age was changed:" + event?.currentTarget.value)
  }

  const focusLostHandler = () => {
    console.log("focus was lost")
  }
return (
  <div>
    <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Hello</textarea>
    <input onChange={onAgeChanged} type={number}/>
    <button name="delete" onClick={search}>Search</button>
  </div>
);

};