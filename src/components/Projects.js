import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../client.js'

export default function Project() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const query = '*[_type == "projects"]'
        
        // fetch the projects located in sanity
        client.fetch(query).then((data) => {
            setProjects(data)
        })
    }, [])

    return (
        // lg for large screns
        <div className=' m-auto mb-16 w-2/3'>
            {/* map through all of the projects and display them */}
            {projects.map((project, index) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='relative flex-col justify-center pt-12 px-8 text-center'
                    key={project.title + index}>
                    <h1 className='text-4xl heading-one font-bold'>{project.title}</h1>
                    <div className='mt-3 mb-5 heading-two'>
                        {project.description.map((disc, idx) => (
                            <p key={idx}>{disc.children[0].text}</p>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                    <img src={urlFor(project.imgUrl)} alt={project.title}/>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}