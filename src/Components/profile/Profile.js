import React from 'react'
import {Button} from 'react-bootstrap'
const Profile = ({ data} ) => {
      
      const handelName = (myname) => {
      alert(`Hello I am ${myname}`);
      };
      return (
      <>
            {
            data.map((data, i) => (
            <div className="card mb-3 " style={{ margin: "150px 250px 200px 250px", backgroudColor: "rgba(.0,.0,.0,0.5)" }}>
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
                  <Button variant="primary" onClick={()=>handelName(data.fullName)}>Primary Button</Button>
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