export default () => {
    const createDiv = document.createElement('div');
    const admin = `
    <input type="email">
    <input type="password">
    `;
    createDiv.innerHTML = admin;

    return admin;
}