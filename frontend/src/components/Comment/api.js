export const getComments = async () => {
    return [
      {
        id: "1",
        content: "First comment",
        username: "Jack",
        userId: "1",
        parentId: null,
        created_at: "2021-08-16T23:00:33.010+02:00",
        closed_date: "2022-08-16T23:00:33.010+02:00"
      },
      {
        id: "2",
        content: "Second comment",
        username: "John",
        userId: "2",
        parentId: null,
        created_at: "2021-08-16T23:00:33.010+02:00",
        closed_date: "2022-08-16T23:00:33.010+02:00"
      },
      {
        id: "3",
        content: "First comment first child",
        username: "John",
        userId: "2",
        parentId: "1",
        created_at: "2021-08-16T23:00:33.010+02:00",
        closed_date: "2022-08-16T23:00:33.010+02:00"
      },
      {
        id: "4",
        content: "Second comment second child",
        username: "John",
        userId: "2",
        parentId: "2",
        created_at: "2021-08-16T23:00:33.010+02:00",
        closed_date: "2022-08-16T23:00:33.010+02:00"
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      content: text,
      parentId,
      userId: "1",
      username: "John",
      created_at: new Date().toISOString(),
      closed_date: text
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };