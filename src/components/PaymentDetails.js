import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
export const PaymentDetails=()=>{
    const schema=yup.object().shape({
installment1:yup.string().required("*Enter all the installments and their dates* "),
installment2:yup.string().required("*Enter all the installments and their dates* "),
installment3:yup.string().required("*Enter all the installments and their dates* "),
installment4:yup.string().required("*Enter all the installments and their dates* "),
date1:yup.date().required("*Enter all the installments and their dates* "),
date2:yup.date().required("*Enter all the installments and their dates* "),
date3:yup.date().required("*Enter all the installments and their dates* "),
date4:yup.date().required("*Enter all the installments and their dates* "),
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    });
    const onClick=(data)=>{
        console.log(data)
    }

    return(
        <center>
        <div className="box">
            <h1 className="heading">PAYMENT DETAILS</h1>
        <table className="con">
            <tr>
                <td>INSTALLMENT-1</td>
                <td><input type='text' {...register("installment1")}/></td>
                <p>{errors.installment1?.message}</p>
                <td>DATE : </td>
                <td><input type='date' {...register("date1")}/></td>
            </tr>
            <tr>
                <td>INSTALLMENT-2</td>
                <td><input type='text'  {...register("installment2")}/></td>
                <p>{errors.installment2?.message}</p>

                <td>DATE : </td>
                <td><input type='date'  {...register("date2")}/></td>
            </tr>
            <tr>
                <td>INSTALLMENT-3</td>
                <td><input type='text'  {...register("installment3")}/></td>
                <p>{errors.installment3?.message}</p>

                <td>DATE : </td>
                <td><input type='date'  {...register("date3")}/></td>
            </tr>
            <tr>
                <td>INSTALLMENT-4</td>
                <td><input type='text'  {...register("installment4")}/></td>
                <p>{errors.installment4?.message}</p>

                <td>DATE : </td>
                <td><input type='date'  {...register("date4")}/></td>
            </tr>
        </table>
        <button onClick={handleSubmit(onClick)}>
            COMPLETED
            </button>
        </div>
        <hr ></hr>
        <div><h1>TERMS AND CONDITIONS</h1>
        <p1>


        <input type='checkbox' /> I hereby accept to the moneyback and other Terms Conditions mentioned by VPS codbuilders Private Limited
        </p1>
        </div>
        </center>
       
        
    )
    }

