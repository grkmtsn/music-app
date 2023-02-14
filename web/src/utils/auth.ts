// @ts-nocheck
import { makeOperation } from "@urql/core";

export const getAuth = async ({ authState }) => {
  if (!authState) {
    const token = localStorage.getItem("token");
    if (token) {
      return { token };
    }
    return null;
  }
  localStorage.removeItem("token");
  return null;
};

export const addAuthToOperation = ({ authState, operation }) => {
  if (!authState || !authState.token) {
    return operation;
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === "function"
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: `Bearer ${authState.token}`,
      },
    },
  });
};
