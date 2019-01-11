export const Mutation = `
    type Mutation {
        userReg(login: String!, password: String!, address: String! ): String
        userLogin(login: String!, password: String! ): String
        userResetToken: String

        basketAdd(item: InputItem, count: Float!): String
        basketBuy: String
        basketUpdate(id: Float!, count: Float!): String

        adminItemAdd(input: InputItem): String
        adminItemUpdate(input: InputItem): String
        
    }

    input InputItem {
        id          : Float
        name        : String
        description : String
        imageUrl    : String
        category    : String
        countDB     : Float
        price       : Float
    }
`;
