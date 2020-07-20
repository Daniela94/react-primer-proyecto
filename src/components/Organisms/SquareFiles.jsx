import React from 'react'
import withFileUpload from '../HOC/withUploadFile'

const SquareFiles = (props) => (
  <>
    <form>
      <input type="file" onChange={props.addFile}/>
    </form>
    {
      props.files.map((file, index) => (
      <div className="square">
        <div className="image">
          <img src={file} key={index}  alt="Imagen cuadrada"/>
        </div>
      </div>
      ))
    }
  </>
)

export default withFileUpload(SquareFiles)