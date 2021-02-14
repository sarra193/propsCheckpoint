import React from 'react'
import {FaInfoCircle } from "react-icons/fa"
import {IconContext} from "react-icons"
import propsTypes from 'prop-types'

const Profile = ({ fullName, bio, profession, photo,children }) => {
      
      const handelName = (fullName) => {
            alert(`Hello I am ${fullName}`);
      };
      return (
            <>
            
                  <div className="card mb-3 " style={{ margin: "150px 250px 200px 250px" }}>
                        {console.log(fullName)}

                        <div className="row no-gutters">
                              <div className="col-md-4">
                                    <img alt="" src={photo} style={{ width: "300px", height: "313px" }} />
                              </div>
                              <div className="col-md-8">
                                    <div className="card-body">
                                          <h5 className="card-title">{fullName}</h5>
                                          <p className="card-text">
                                                {bio}
                                          </p>
                                          <p className="card-text">
                                                <small className="text-muted">{profession}</small>
                                          </p>
                                          {children}
                                          <IconContext.Provider value={{ style: { fontSize: '30px', color: "black" } }}>
                                          <span  onClick={() => handelName(fullName)}>  profile Name</span>  
                                                < FaInfoCircle onClick={() => handelName(fullName)} />
                                          </IconContext.Provider>
                                    </div>
                              </div>
                        </div>

                  </div>
      
            </>
      )
};
Profile.defaultProps = {
      fullName: "benslimen sarra",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            profession: "ingenieur Informatique: genie logiciel",
            photo:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
      
}
Profile.prototype = {
      fullName: propsTypes.string,
      bio: propsTypes.string,
      profession: propsTypes.string,
      photo:propsTypes.string
}

export default Profile