import React from 'react'

const JournarEntry = (props) => {
  return (
    <article className = 'flex mx-auto w-2/5 gap-6 mt-6'>
        <div className = 'w-40 h-52 shrink-0'>
            <img className = 'h-full w-full bg-cover rounded-md' src={props.mountFuji.src} alt = {props.mountFuji.alt} />
        </div>
        <div> 
            <div className = 'flex'>
                <img src = {props.mapIcon.src} alt = {props.mapIcon.alt} />
                <span className = 'font-medium'>JAPAN</span>
                <a className = 'ml-3 text-gray-600 underline' target = {props.mapLink.target} href = {props.mapLink.href} >{props.mapLink.text}</a>
            </div>
            <h2 className = 'font-bold my-2 text-2xl'>{props.mountName}</h2>
            <p className = 'font-bold  my-3'>{props.date}</p>
            <p className = 'font-light'>
               {props.generalText}
            </p>
        </div>

    </article>
  )
}

export default JournarEntry