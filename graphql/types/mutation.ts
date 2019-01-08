export const Mutation = `
    type Mutation {
        userReg(login: String!, password: String!, address: String! ): String
        userLogin(login: String!, password: String! ): User
        userResetToken: String

        basketAdd(item: InputItem, count: Float!): String
        basketBuy: String
        basketUpdate(id: Float!, count: Float!): String
    }

    input InputItem {
        name:         String
        description:  String
        imageUrl:     String
        category:     String
        countDB:      Float
        price:        Float
    }
`;
