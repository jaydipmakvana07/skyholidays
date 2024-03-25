export const generateDefaultPassword = async (email) => {
    const name = email.split('@')[0];
    const randomChars = Math.floor(1000 + Math.random() * 9000).toString();
    const defaultPassword = `${name.charAt(0).toUpperCase()}${name.slice(
        1,
    )}@${randomChars}`;
    return defaultPassword;
};
