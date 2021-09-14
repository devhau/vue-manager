
export const moduleToRouter = (modules, pageDefault) => {
    return Object.keys(modules).map((key) => {
        const item = modules[key];
        if (item.page) {
            return {
                path: `/${key}`,
                name: item.name ?? key,
                component: item.page,
            }
        } else {
            return {
                path: `/${key}`,
                name: item.name ?? key,
                component: pageDefault,
            }
        }

    })
}