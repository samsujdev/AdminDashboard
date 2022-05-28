import React from 'react';
import style from "./add.module.css"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from 'react-select'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  role: yup.string().email().required(),
});

const RoleList = [{label:'Admin',value:'Admin'},{label:'User',value:'User'},{label:'Vendor',value:'Vendor'},{label:'Coorier',value:'Coorier'}]

function UserAdd() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(123);
    console.log(data);
  };

  const onError = (data) => {
    console.log(852);
    console.log(data);
  };

  return (
    <React.Fragment>
    <div className={`${style.test}`}>
    <form onSubmit={handleSubmit(onSubmit,onError)}>
      <div>
        <input placeholder="email" name="email" type="email" {...register("email")} />
        {(errors && errors?.email) && <p>{errors?.email?.message}</p>}
      </div>
      <div>
        <Select options={RoleList} name="role"  {...register("role")} />
        {(errors && errors?.role) && <p>{errors?.role?.message}</p>}
      </div>
      <div>
        <input type="submit" value={'submit'} />
      </div>
    </form>
    </div>
    </React.Fragment>
  );
}

export default UserAdd;
