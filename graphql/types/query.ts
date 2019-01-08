export const Query = `
    type Query {
        adminUsers: [User]
        user(id: Float!): User

        items: [Item]
        item(id: Float!): Item

        basketGet: [Basket]
    }
`;
