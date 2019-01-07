export const Query = `
    type Query {
        users: [User]
        user(id: Float!): User
        userAdmin: String
    }
`;
