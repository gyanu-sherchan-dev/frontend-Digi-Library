import axios from "axios";

const baseApiUrl =
  process.env === "production" ? "/api/v1" : process.env.REACT_APP_ROOT_URL;
const userApiUrl = baseApiUrl + "/user";

//bookEP
const bookEp = baseApiUrl + "/book";

//create user
export const postNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userApiUrl, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userApiUrl + "/login", userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//book section

// getting user id from sessionStorage
const getUserId = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return user?._id;
  }
  return;
};

//add books
export const addBook = async (userData) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Login first",
      };
    }

    const { data } = await axios.post(bookEp, userData, {
      headers: { Authorization: userId },
    });

    console.log(data);
    if (data) {
      return {
        status: "success",
        message: "Book added Successfully",
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//get books
export const getBooks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Unauthorized",
      };
    }
    const { data } = await axios.get(bookEp, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//borrow books
export const borrowBooks = async (bookId) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Unauthorized",
      };
    }
    const { data } = await axios.post(
      bookEp + "/borrow",
      { bookId },
      {
        headers: {
          Authorization: userId,
        },
      }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//delete book
export const deleteBooks = async (bookId) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Unauthorized",
      };
    }
    const { data } = await axios.delete(
      bookEp,

      {
        data: { bookId },
        headers: {
          Authorization: userId,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//mybook user specific borrowed books
export const getBorrowedBooks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Unauthorized",
      };
    }
    const { data } = await axios.get(bookEp + "/borrowedBooks", {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Return borrowed books
export const returnBook = async (bookId) => {
  console.log(bookId);
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      };
    }

    const { data } = await axios.patch(
      bookEp + "/return",
      {
        _id: bookId,
      },
      {
        headers: {
          Authorization: userId,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
