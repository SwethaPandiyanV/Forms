import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
    
export const EducationalDetails=()=>{
    const schema=yup.object().shape({
        sslcPercentage:yup.string().required('*Entering SSLC percentage is required*'),
        collegeName:yup.string().required('*Entering College name is required required*'),
    }
    )
    
    
    const {register,handleSubmit,formState:{errors}}=useForm( {
        resolver:yupResolver(schema),
    }
    );
    const onClick =(data)=>{
        console.log(data)
    }
    return(
        <center>
        <div className='box'>
                <h1 className="heading">EDUCATIONAL DETAILS</h1>
              
            <form>
            <table className="con">
                <tr>
               <td><label htmlFor="sslcper">SSLC PERCENTAGE : </label></td> 
              <td><input type="text" name="sslcper" {...register("sslcPercentage")} /></td>  
                <p>{errors.sslcPercentage?.message}</p>
                </tr>
                <tr>
               <td> <label htmlFor="hscper">HSC PERCENTAGE : </label></td>
                <td><input type="text" name="hscper"  /></td>
                </tr>
                <tr>
               <td><label htmlFor="dipper">DIPLOMA PERCENTAGE : </label></td> 
               <td><input type="text" name="dipper"   /></td> 
                </tr>
                <tr>
                <td><label htmlFor="clgname">COLLEGE NAME : </label></td>
               <td><input type="text" name="clgname"  {...register("collegeName")}/></td> 
                <p>{errors.collegeName?.message}</p>
                </tr>
               <tr>
               <td><label htmlFor="deg">DEGREE : </label></td>
               <td> <input type="text" name="deg" /></td>
               </tr>
               <tr>
               <td><label htmlFor="dep">DEPARTMENT : </label></td>
              <td> <input type="text" name="dep"  /></td> 
               </tr>
               <tr>
              <td><label htmlFor="yop">YEAR OF PASS OUT : </label></td> 
               <td><input type='number' name="yop"   {...register("yearOfPassOut ")}/></td> 
                <p>{errors.yearOfPassOut?.message}</p>
               </tr>
               </table> 
               </form>
             
               <button onClick={handleSubmit(onClick)}>PROCEED</button>
           
        </div>
        </center>
    )
        
    
}
