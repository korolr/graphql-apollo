export const Query = `
    type Query {
        user(id: Float!): User
        adminUsers: [User]
        
        items: [Item]
        item(id: Float!): Item

        basketGet: [Basket]
    }
`;
