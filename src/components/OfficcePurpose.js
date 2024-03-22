import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
export const OfficePurpose=()=>{
    const schema=yup.object().shape({
        studendId:yup.string().optional("*Entering this feild is optional*")

    })
    const {register,handleSubmit,formState:{errors}}=useForm( {
        resolver:yupResolver(schema),
    }
    );
    const onClick =(data)=>{
        console.log(data)
    }
    return(
        <center>
        <div className="box">
                <h1 className="heading">OFFICE PURPOSE</h1>

        <form>
            <table className="con">
                <tr>
                   <td> <label htmlFor="stdid">STUDENT ID : </label></td>
                  <td> <input type='text' name='stdid' {...register("studentId")}/></td> 
                  <p>{errors.studendId?.message}</p>
                </tr>
                <tr>
                    <td><label>STATUS : </label></td>
                    <td><input type='radio' name='status'/>
                    <label>Approved</label>
                    </td>
                    <td>
                        <input type="radio" name='status'/>
                        <label>Rejected</label>
                    </td>
                    
                </tr>
                <tr>
                    <td><label >SIGN OF THE STAFF : </label></td>
                    <td><input type='file' /></td>
                </tr>
                <tr>
                <td><label>SIGN OF THE FOUNDER : </label></td>   
                 <td> <input type='file'/></td>  
                </tr>



            </table>
            <button onClick={handleSubmit(onClick)}>PROCEED</button>
        </form>
        </div>
        </center>
    )
    }