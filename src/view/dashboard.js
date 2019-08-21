export const Dashboard = () => {
    const tmpldashboard = `
    
    <a href="#/home"> salir </a>
    `
    
    const sectionDashboard = document.createElement('section');
    sectionDashboard.innerHTML = tmpldashboard;

    

    
    return sectionDashboard;
}
