export const User = `
    type User {
        id          : Float
        login       : String
        password    : String
        address     : String
        token       : String
        admin       : Boolean
        money       : Float
        basket      : [Basket]
    }
`;
