import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { type } from "jquery";


const Appss = () => {
  const { register, watch, errors, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input name="a" ref={register({ required: true, maxLength: 20 })} />
      <input name="lasbtName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
    <hr></hr>
     {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstNames" ref={register} />
      <select name="gender" ref={register}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form> */}
    <hr></hr>
    
     {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" defaultValue="test" ref={register({ required: true })} />
      {errors.firstName && <span>This firstName field is required</span>}
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && <span>This lastName field is required</span>}
      <input type="submit" />
    </form> */}

    <hr></hr>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => <input onChange={onChange} value={value} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        as={Select}
      />
      <input type="submit" />
    </form> */}
    </>
  );
};

export default Appss;