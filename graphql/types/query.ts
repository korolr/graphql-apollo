export const Query = `
    type Query {
        users: [User]
        user(id: String!): User
    }
`;
