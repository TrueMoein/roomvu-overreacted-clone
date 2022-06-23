import dayjs from "dayjs";

export const getFakeDateByPostId = (postId: number) =>
  dayjs("2022").add(postId, "day").format("MMMM D, YYYY");
