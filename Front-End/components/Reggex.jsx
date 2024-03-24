export const Reggex = (texte) => {
    const regex = /[^a-zA-Z0-9 ]/g;
    const texteFiltre = texte.replace(regex, '');
    return texteFiltre;
};