import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
export const OtherDetails=()=>{
    const schema=yup.object().shape({
        dateOfAdmission:yup.string().required("*Entering date of admission is required*"),
        aboutUs:yup.string().optional("*Entering this feild is optional*")


    })

    const {register, handleSubmit,formState:{errors} }=useForm( {
        resolver:yupResolver(schema)
    });
    const onClick=(data)=>{
        console.log(data)
    }
    return(
        <center>
        <div className="box">
                <h1 className="heading">OTHER DETAILS</h1>

        <form > 
            <table className="con">
            <tr>
           <td><label>MODE OF STUDY : </label></td> 
            <td><input type="radio"  name="mode" />
           <label >Online</label></td>
           <td><input type='radio' name="mode"/>
            <label>Offline</label></td>
            </tr>
            <tr>
           <td><label htmlFor="doa">DATE OF ADMISSION : </label></td> 
          <td> <input type='date' name="doa" {...register("dateOfAdmission")}/></td> 
            <p>{errors.dateOfAdmission?.message}</p>
            </tr>
            <tr>
               <td> <label>PAYMENT : </label></td>
               <td><input type="radio" name='mod'/>
               <label>Installment</label></td> 
               <td> <input type='radio' name='mod'/>
                <label>Full Payment </label></td>
            </tr>
            <tr>
              <td><label htmlFor="area">HOW DID YOU HERE ABOUT US ? : </label></td>  
            <td><input type='text' name='area' {...register("aboutUs")}/></td>    
                <p>{errors.aboutUs?.message}</p>
            </tr>
            </table>
            <button onClick={handleSubmit(onClick)}>PROCEED</button>
        </form>
        </div>
        </center>
    )

}