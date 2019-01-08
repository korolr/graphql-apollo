export const Mutation = `
    type Mutation {
        userReg(login: String!, password: String!, address: String! ): String
        userLogin(login: String!, password: String! ): User
    }
`;
