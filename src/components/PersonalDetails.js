import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
export const PersonalDetails=()=>{
    <div className="hed"><h1>STUDENT APPLICATION FORM</h1></div>
    const schema=yup.object().shape({
        name:yup.string().required("*Entering name is required*"),
        email:yup.string().email().required("*Entering email is required*"),
        number:yup.string().required("*Entering phone number is required*"),
        address:yup.string(),
        fathername:yup.string(),
        mothername:yup.string()
    }
    )
    const {register,handleSubmit , formState:{errors}}=useForm( {
        resolver:yupResolver(schema),
    }
    );
    const onClick =(data)=>{
        console.log(data)
    }
    return(
        <center>
        <div className="box">
       <h1 className="heading">PERSONAL DETAILS</h1>
        <form >
            <table className="con">
                <tr>
        <td>   <label htmlFor="studentname"> STUDENT NAME : </label></td>
           <td><input type="text" name="studentname" {...register("name")}/></td>
            <p>{errors.name?.message}</p>
            </tr>
            <tr>
            <td> <label htmlFor="emailid">EMAIL ID : </label></td>
            <td><input type="email" name="emailid"{...register("email")}/></td>
            <p>{errors.email?.message}</p>
            </tr>
            <tr>
           <td><label htmlFor="phonenumber">PHONE NUMBER : </label></td>
           <td><input type="number" name="phonenumber"{...register("number")}/></td> 
            <p>{errors.number?.message}</p>
            </tr>
            <tr>
           <td> <label htmlFor="address">ADDRESS : </label></td>
            <td><input type="text" name="address"{...register("address")}/></td>
            </tr>
            <tr>
            <td><label htmlFor="fathername">FATHER'S NAME : </label></td>
            <td><input type="text" name="fathername"{...register("fathername")}/></td>
            </tr>
            <tr>
           <td><label htmlFor="mothername">MOTHER'S NAME : </label></td> 
           <td><input type="text" name="mothername"{...register("mothername")}/></td> 
            </tr>
            </table>
            </form>
            <button onClick={handleSubmit(onClick)}>PROCEED</button>       
        </div>
        </center>
    )
}