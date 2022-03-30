import Axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'

const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
	const [projects, setProjects] = useState({})
	const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProjects = async() => {
      let projects = await Axios.get('http://localhost:5000/work')
      setProjects(projects.data)
      setLoading(false)
    }

    getProjects()
  }, [])

	const value = {
		projects,
	}

	return <ProjectContext.Provider value={value}>{!loading && children}</ProjectContext.Provider>
}

export const usePojects = () => useContext(ProjectContext)
