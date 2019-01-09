export const Query = `
    type Query {
        user: User
        adminUsers: [User]
        
        items: [Item]
        item(id: Float!): Item

        basketGet: [Basket]
    }
`;
