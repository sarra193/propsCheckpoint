import React from 'react'
import {FaInfoCircle } from "react-icons/fa"
import {IconContext} from "react-icons"


const Profile = ({ data }) => {
      
      const handelName = (fullName) => {
      alert(`Hello I am ${fullName}`);
      };
      return (
      <>
            {
            data.map((data, i) => (
            <div className="card mb-3 " style={{ margin: "150px 250px 200px 250px" }}>
                  {console.log(data.fullName)}

            <div className="row no-gutters">
            <div className="col-md-4">
            <img alt="" src={data.photo} style={{width:"300px",height:"313px"}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                  <h5 className="card-title">{data.fullName}</h5>
                  <p className="card-text">
                  {data.bio}
                  </p>
                  <p className="card-text">
                  <small className="text-muted">{data.profession}</small>
                  </p>
      <IconContext.Provider value={{ style: {fontSize: '30px', color: "black"}}}>
            < FaInfoCircle onClick={() => handelName(data.fullName)}/>
      </IconContext.Provider>
            </div>
            </div>
                  </div>

            </div>
            ))
            }
            </>
      )
}

export default Profile