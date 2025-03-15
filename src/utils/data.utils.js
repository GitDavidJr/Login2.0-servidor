export const isEmpty = (value) => {
    return value == null;
}

export const hideSensitiveFields = (user) => {
    return {
        name: user.name,
        email: user.email,
        gitHub: user.gitHub,
    }
}