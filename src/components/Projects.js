// import React, { Component } from 'react'
// import axios from 'axios';
// import ProjectItems from './ProjectItems';

// export class Projects extends Component {
//    state = {
//        projects: [],
//        isLoaded: false
//    }
//  componentDidMount () {
//    axios.get('https://wordpress.anastasiabunduc.com/wp-json/wp/v2/projects')
//        .then(res => this.setState({
//            projects: res.data,
//            isLoaded: true
//        }))
//        .catch(err => console.log(err))
//    }
//    render() {
//       const {projects, isLoaded}= this.state;
//        return (
//            <div>
//               { projects.map(project =>
//               <ProjectItems key = {projects.id} project={project}/>
//               )}
//            </div>
//        );
//    }
// }
// export default Projects