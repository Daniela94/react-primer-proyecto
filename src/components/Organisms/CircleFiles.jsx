import React from 'react'
import withUploadFile from '../HOC/withUploadFile'

const CircleFiles = (props) => (
  <>
    <form>
      <input type="file" onChange={props.addFile}/>
    </form>
    {
      props.files.map((file, index) => (
      <div className="image">
        <img src={file} key={index} alt="Imagen circulada" className="circle" />
      </div>
      ))
    }
  </>
)

export default withUploadFile(CircleFiles)