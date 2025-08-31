// import React from 'react'
// import './Techstack.css'
// import { TechstackList } from '../../utils/TechstackList'
// const Techstack = () => {
//   return (
//     <>
//       <div className="container techstack">
//         <h2 className="col-12 mt-3 mb-1 text-center">Technology Stack</h2><hr />
//         <p className="pb-3 text-center">👉🏼 Including programming Languages, frameworks, databases, front-end and back-end </p>
      
//         <div className="row">
//           {TechstackList.map((tech, index) => {
//             <div key={index} className='col-md-2 text-center m-2'>
//               <tech.icon size={40}/>
//               <p>{tech.name}</p>
//             </div>
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Techstack


import React from 'react';
import './Techstack.css';
import { TechstackList } from '../../utils/TechstackList';
import { LangList } from '../../utils/LangList';

const Techstack = () => {
  return (
    <div className="container techstack" id='techstack'>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technology Stack</h2>
      <hr />
      <p className="pb-3 text-center text-uppercase">
        🎯 Including programming Languages, frameworks, databases, front-end and back-end
      </p>
  
      <div className="row">
        {TechstackList.map((tech) => (
          <div key={tech._id}  className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                    <tech.icon className='tech-icon'/>
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container languages col-12 mt-3 mb-1 text-center  text-uppercase"> 
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">languages</h2>
      </div> <hr />

      <div className="row">
        {LangList .map((lang) => (
          <div key={lang._id}  className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                    <lang.icon className='lang-icon'/>
                    </div>
                    <div className="media-body">
                      <h5>{lang.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
