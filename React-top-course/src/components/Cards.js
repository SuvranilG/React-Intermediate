import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    let localData = JSON.parse(localStorage.getItem("likedCourses"));
    let arrOfLikedCourses = localData || [];
    const [likedCourses, setLikedCourses] = useState(arrOfLikedCourses);
    function getCourses() {
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data array krunga  
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
            // localData={localData}
            // arrOfLikedCourses={arrOfLikedCourses}
            />
        ))
      }
    </div>
  )
}

export default Cards
