import React, { useCallback, useEffect, useState } from 'react'
import { findSectionProgress, findOverallProgress  } from './CalculateProgress';
import ReactTrackerList from './ReactTrackerList';


const Reactlist = () => {
    const [reactList, setReactList] = useState([])
    const [overallProgress, setOverallProgress] = useState(0);


    useEffect(() =>{
          const locaList = JSON.parse(localStorage.getItem("reactList")) || [];
          setReactList(locaList.length !== 0 ? locaList : ReactTrackerList );
      }, []);

      useEffect(() => {
        setOverallProgress(findOverallProgress(reactList));
      }, [reactList]);

      const updateList = (index, indexOfSub) => {
        const newReactList = [...reactList];
        newReactList[index].subsections[indexOfSub].completed = 
        !newReactList[index].subsections[indexOfSub].completed;
        newReactList[index].progress = findSectionProgress(
            newReactList[index].subsections
        );
        setReactList(newReactList);
        localStorage.setItem("reactList", JSON.stringify(newReactList));
      };

  return (

    <div>
     {overallProgress  === 100 && (
        <h1>
            Succesfully Completed ! Hurray.
        </h1>
     )}
     <p>Progress: {overallProgress}%</p>
     <div  
     className={'-mt-6 rounded sticky top-0 bg-gradient-to-r from-purple-500-to-pink-500 transition-all h-2 w-[${overallProgress}%]'}>       
     </div>
     {reactList.map((Section, index) => {
     return (
        <Section 
        index={index}
        updateList={updateList}
        key={index}
        // section={section}
        />
     )
     })}   
    </div>
  )
}

export default Reactlist
