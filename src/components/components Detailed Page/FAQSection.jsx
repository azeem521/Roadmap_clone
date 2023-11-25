import React, { useMemo } from 'react'
import Accordian from './Accordian'

const FAQSection = () => {
    let faqData;
useMemo(()=>{
    return faqData = [
        {
          id:"frontend",
          questions:[
            {
              question: "What are the job titles of a Frontend Developer?",
              answer: `Front-end developers are also known as front-end engineers, front-end web developers, JavaScript Developers, HTML/CSS Developer, front-end web designers, and front-end web architects.
    
    Each of these roles mostly encompass the same front-end development skills but require different levels of expertise in different front-end development skills. It's better to look at the job description to get an idea about the job requirements.`,
            },
            {
              question:"How to become a Frontend Developer?" ,
              answer: `Start with learning HTML and CSS; don't wait to fully master these and start building simple projects as soon as possible. You could try rebuilding the frontend of your favorite websites using HTML and CSS to start with. Do as many of these projects as possible as you keep learning. Once you are somewhat comfortable with HTML and CSS, start learning some basic JavaScript (DOM manipulation, making AJAX calls etc) and learn how to add interactivity to your websites. While you are at it learn some basics of Git and GitHub. At this point you should be able to get an entry level frontend development job. Keep revisiting this roadmap and try to fill the gaps in your knowledge.`,
            },
            {
              question:"How long does it take to become a Frontend Developer?" ,
              answer:`The amount of time it takes to become a frontend developer can vary depending on several factors, such as your learning pace, previous experience and the amount of time you are able to dedicate to learning.
    
    However, to give you a rough idea, if you are a complete beginner, it could take you anywhere from 3 to 6 months to get a job as an entry level frontend developer. If you are already familiar with some of the frontend technologies, it could take you anywhere from 1 to 3 months. What's important is to practice as much you can while you are learning i.e. by building as many projects as you can. You should also participate in online communities and ask for feedback from more experienced developers to accelerate your learning process.` ,
            },
            {
              question: "What are the Frontend Developer salaries?",
              answer:`Frontend developer salaries can vary depending on factors such as location, experience, and company size. According to data from Glassdoor, the average base salary for a frontend developer in the United States is around $80,000 per year. However, this number can vary greatly depending on location, with the highest-paying cities such as San Francisco, Seattle, and New York having an average salary of $110,000 to $130,000.
    
    It's important to keep in mind that these are just averages, and salaries can vary greatly depending on factors such as experience level, specific skills, and the company you work for. With more experience and specific skills you can expect to earn more.
    
    It is worth looking at a range of resources, including salary surveys, and job boards to get a general understanding of the current market in your location and experience level. Also try reaching out to other professionals in the field and getting an understanding of their own experience and salary ranges.` ,
            },
            {
              question:"Should I learn everything listed on the Frontend Roadmap?" ,
              answer:`This roadmap contains everything that you might encounter while working as a Frontend Developer. You may not need everything listed on this roadmap to get into the industry; every job is different and most of the jobs will require a subset of the items on the roadmap. However, knowing what you don't know is as important as knowing things, so you can use this roadmap to get an idea of what you are missing as well.
    
    If you are a beginner who is just getting started, don't feel overwhelmed by looking at this roadmap. Look at the answer to the FAQ 'How to become a Frontend Developer?'` ,
            },
            
          ]
        }
      ]
      
},[])
// const faqData = [
//     {
//       id:"frontend",
//       questions:[
//         {
//           question: "What are the job titles of a Frontend Developer?",
//           answer: `Front-end developers are also known as front-end engineers, front-end web developers, JavaScript Developers, HTML/CSS Developer, front-end web designers, and front-end web architects.

// Each of these roles mostly encompass the same front-end development skills but require different levels of expertise in different front-end development skills. It's better to look at the job description to get an idea about the job requirements.`,
//         },
//         {
//           question:"How to become a Frontend Developer?" ,
//           answer: `Start with learning HTML and CSS; don't wait to fully master these and start building simple projects as soon as possible. You could try rebuilding the frontend of your favorite websites using HTML and CSS to start with. Do as many of these projects as possible as you keep learning. Once you are somewhat comfortable with HTML and CSS, start learning some basic JavaScript (DOM manipulation, making AJAX calls etc) and learn how to add interactivity to your websites. While you are at it learn some basics of Git and GitHub. At this point you should be able to get an entry level frontend development job. Keep revisiting this roadmap and try to fill the gaps in your knowledge.`,
//         },
//         {
//           question:"How long does it take to become a Frontend Developer?" ,
//           answer:`The amount of time it takes to become a frontend developer can vary depending on several factors, such as your learning pace, previous experience and the amount of time you are able to dedicate to learning.

// However, to give you a rough idea, if you are a complete beginner, it could take you anywhere from 3 to 6 months to get a job as an entry level frontend developer. If you are already familiar with some of the frontend technologies, it could take you anywhere from 1 to 3 months. What's important is to practice as much you can while you are learning i.e. by building as many projects as you can. You should also participate in online communities and ask for feedback from more experienced developers to accelerate your learning process.` ,
//         },
//         {
//           question: "What are the Frontend Developer salaries?",
//           answer:`Frontend developer salaries can vary depending on factors such as location, experience, and company size. According to data from Glassdoor, the average base salary for a frontend developer in the United States is around $80,000 per year. However, this number can vary greatly depending on location, with the highest-paying cities such as San Francisco, Seattle, and New York having an average salary of $110,000 to $130,000.

// It's important to keep in mind that these are just averages, and salaries can vary greatly depending on factors such as experience level, specific skills, and the company you work for. With more experience and specific skills you can expect to earn more.

// It is worth looking at a range of resources, including salary surveys, and job boards to get a general understanding of the current market in your location and experience level. Also try reaching out to other professionals in the field and getting an understanding of their own experience and salary ranges.` ,
//         },
//         {
//           question:"Should I learn everything listed on the Frontend Roadmap?" ,
//           answer:`This roadmap contains everything that you might encounter while working as a Frontend Developer. You may not need everything listed on this roadmap to get into the industry; every job is different and most of the jobs will require a subset of the items on the roadmap. However, knowing what you don't know is as important as knowing things, so you can use this roadmap to get an idea of what you are missing as well.

// If you are a beginner who is just getting started, don't feel overwhelmed by looking at this roadmap. Look at the answer to the FAQ 'How to become a Frontend Developer?'` ,
//         },
        
//       ]
//     }
//   ]

  return (
        <div className="border-t bg-gray-100 mt-8">
      <div className="container">
        <div className="flex justify-between relative -top-5">
          <h2
            className="text-sm sm:text-base font-medium py-1 px-3 border bg-white rounded-md"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-1 pb-14">
        <Accordian Questions={faqData[0]} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(FAQSection)