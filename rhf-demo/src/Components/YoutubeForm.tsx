const YoutubeForm = () => {
  return (
    <form>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="email">E Mail</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel" name="channel" />
      <button>Submit</button>
    </form>
  )
}

export default YoutubeForm;
