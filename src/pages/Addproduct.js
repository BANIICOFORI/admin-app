import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const props = {
    name:"file",
    multile:true,
    action:"https://www.mocky.io/v2/5cc8019d30000098a055e76",
    onchange(info){
        const {status} = info.file
        if(status  !== "uploading" ){
            console.log(info.file, info.fileList);
        }
        if(status === "done"){
            message.success(`${info.file.name} file uploaded successfully.`);
        }else if(status === "error"){
            message.success(`${info.file.name} file uploaded failed.`);
        }
    },
    onDrop(e){
        console.log("Dropped files",e.dataTransfer.files);
    },
};

const Addproduct = () => {
   
    const [desc,setDesc] = useState();
    const handleDesc = (e) => {
             setDesc(e);
        };
  return (
    <div>
        <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
         
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
           <select className="form-control py-3 mb-3" name="" id="">
            <option value="">Select Blog Category</option>
            </select>
            <select className="form-control py-3 mb-3" name="" id="">
            <option value="">Select Blog Category</option>
            </select>
            <select className="form-control py-3 mb-3" name="" id="">
            <option value="">Select Blog Category</option>
            </select>
            <CustomInput
            type="text"
            label="Enter Product Price"
            name="title"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
                </p>
            </Dragger>
            <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
            >
            Add Product
          </button>
            </form>
        </div>
    </div>
  )
}

export default Addproduct