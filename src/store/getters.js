const getters = {
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters,
    name: state => state.user.name,
    date: state => state.user.date,
    status: state => state.user.status,
    id: state => state.user.id
}

export default getters