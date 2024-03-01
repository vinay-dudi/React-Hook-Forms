import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";
//npm i react-hook-form
//npm i -D @hookform/devtools
const YoutubeForm = () => {
  const form = useForm();
  const { register,control } = form;
  return (
    <>
    <form>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username"  {...register("userName")}/>
      <label htmlFor="email">E Mail</label>
      <input type="text" id="email" {...register("email")} />
      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel"{...register("channel")} />
      <button>Submit</button>
    </form>
    <DevTool control={control}/>
    </>
  );
};

export default YoutubeForm;