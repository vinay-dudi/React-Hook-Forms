import { useForm } from "react-hook-form";
//npm i react-hook-form
const YoutubeForm = () => {
  const form = useForm();
  const { register } = form;
  const { name, ref, onChange, onBlur } = register("username");
  return (
    <form>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" name={name} ref={ref} onBlur={onBlur} onChange={onChange}/>
      <label htmlFor="email">E Mail</label>
      <input type="text" id="email" {...register("email")} />
      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel"{...register("channel")} />
      <button>Submit</button>
    </form>
  );
};

export default YoutubeForm;
