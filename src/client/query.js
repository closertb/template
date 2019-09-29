const typeDefs = `
  type issus {
    first: Int,
    states: String!
  }

  type BookList {
      total
      collections {
        book_id
        title
        image
      }
  }
  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
    changeStatus(status: String): String
  }

  type Query {
    visibilityFilter: String
    readStatus: String
    todos: [Todo]
  }
`;
export default typeDefs;
