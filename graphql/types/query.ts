export const Query = `
    type Query {
        users: [User]
        user(id: Float!): User
        userAdmin: String

        items: [Item]
        item(id: Float!): Item

        basket(id: Float!): [Basket]
    }
`;
